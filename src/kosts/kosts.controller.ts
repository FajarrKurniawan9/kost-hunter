import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { KostsService } from './kosts.service';
import { CreateKostDto } from './dto/create-kost.dto';
import { UpdateKostDto } from './dto/update-kost.dto';

@Controller('kosts')
export class KostsController {
  constructor(private readonly kostsService: KostsService) {}

  @Post()
  create(@Body() createKostDto: CreateKostDto) {
    return this.kostsService.create(createKostDto);
  }

  @Get()
  findAll() {
    return this.kostsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kostsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKostDto: UpdateKostDto) {
    return this.kostsService.update(+id, updateKostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kostsService.remove(+id);
  }
}
