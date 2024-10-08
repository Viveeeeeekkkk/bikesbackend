import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { BikesService } from '../services/bikes.service';
import { CreateBikeDto, UpdateBikeDto } from '../dto/bike.dto'; 
import { Bike } from '../entities/bike.entity';

@Controller('bikes')
export class BikesController {
  constructor(private readonly bikesService: BikesService) {}

  @Get()
  async getBikes(): Promise<Bike[]> {
    return this.bikesService.getBikes(); 
  }

  @Post()
  async create(@Body() createBikeDto: CreateBikeDto): Promise<Bike> {
    return this.bikesService.create(createBikeDto); 
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateBikeDto: UpdateBikeDto,
  ): Promise<Bike> {
    return this.bikesService.update(id, updateBikeDto); 
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.bikesService.remove(id); 
  }
}
