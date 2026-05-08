import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class CreateKostDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsInt()
  @Min(100000)
  price: number;

  @IsString()
  @IsNotEmpty()
  type: string;
  // 'putra' | 'putri' | 'campur'

  photos: string[];
  // array URL foto
}
