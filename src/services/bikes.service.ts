import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bike } from '../entities/bike.entity';
import { CreateBikeDto, UpdateBikeDto } from '../dto/bike.dto';

@Injectable()
export class BikesService {
  constructor(
    @InjectRepository(Bike)
    private readonly bikeInstance: Repository<Bike>,
  ) {}

  async getBikes(): Promise<Bike[]> {
    return this.bikeInstance.find(); 
  }

  async create(createBikeDto: CreateBikeDto): Promise<Bike> {
    const bike = this.bikeInstance.create(createBikeDto); 
    return this.bikeInstance.save(bike); 
  }

  async update(id: string, updateBikeDto: UpdateBikeDto): Promise<Bike> {
    const bike = await this.bikeInstance.findOne({ where: { id } }); 
    if (!bike) {
      throw new NotFoundException(`Bike not found`); 
    }
    Object.assign(bike, updateBikeDto); 
    return this.bikeInstance.save(bike); 
  }

  async remove(id: string): Promise<void> {
    const bike = await this.bikeInstance.findOne({ where: { id } }); 
    if (!bike) {
      throw new NotFoundException(`Bike not found`); 
    }
    await this.bikeInstance.remove(bike); 
  }
}
