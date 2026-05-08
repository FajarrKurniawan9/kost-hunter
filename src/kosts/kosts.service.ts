import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateKostDto } from './dto/create-kost.dto';

@Injectable()
export class KostsService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateKostDto, ownerId: number) {
    return this.prisma.kost.create({
      data: { ...dto, photos: JSON.stringify(dto.photos), ownerId },
    });
  }

  async findAll(
    city?: string,
    minPrice?: number,
    maxPrice?: number,
    type?: string,
  ) {
    return this.prisma.kost.findMany({
      where: {
        ...(city && { city: { contains: city } }),
        ...(type && { type }),
        ...(minPrice || maxPrice
          ? {
              price: {
                ...(minPrice && { gte: minPrice }),
                ...(maxPrice && { lte: maxPrice }),
              },
            }
          : {}),
      },
      include: { owner: { select: { username: true } }, reviews: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: number) {
    const kost = await this.prisma.kost.findUnique({
      where: { id },
      include: { owner: { select: { username: true } }, reviews: true },
    });
    if (!kost) throw new NotFoundException('Kost tidak ditemukan');
    return kost;
  }

  async update(id: number, dto: Partial<CreateKostDto>, userId: number) {
    const kost = await this.findOne(id);
    if (kost.ownerId !== userId)
      throw new ForbiddenException('Bukan milik kamu');
    return this.prisma.kost.update({ where: { id }, data: dto });
  }

  async remove(id: number, userId: number, userRole: string) {
    const kost = await this.findOne(id);
    if (kost.ownerId !== userId && userRole !== 'ADMIN')
      throw new ForbiddenException('Tidak diizinkan');
    await this.prisma.kost.delete({ where: { id } });
    return { message: `Kost id ${id} dihapus` };
  }
}
