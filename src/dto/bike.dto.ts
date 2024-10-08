import { IsString, IsNumber, IsUUID } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBikeDto {
  @ApiProperty({required: false})
  @IsString()
  make: string; 
  
  @ApiProperty({required: false})
  @IsString()
  model: string; 

  @ApiProperty({required: false})
  @IsNumber()
  @Type(() => Number) 
  year: number; 

  @ApiProperty({required: false})
  @IsString()
  type: string; 
}

export class UpdateBikeDto {
  @ApiProperty({ required: true })
  @IsUUID() 
  id: string; 

  @ApiProperty({ required: false })
  @IsString()
  make?: string; 
  
  @ApiProperty({ required: false })
  @IsString()
  model?: string; 
 
  @ApiProperty({ required: false })
  @IsNumber()
  @Type(() => Number) 
  year?: number; 

  @ApiProperty({ required: false })
  @IsString()
  type?: string; 
}
