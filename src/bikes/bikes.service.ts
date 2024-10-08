import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bike } from '../entities/bike.entity';
import { CreateBikeDto, UpdateBikeDto } from '../dto/bike.dto';

@Injectable()
export class BikesService {
  constructor(
    @InjectRepository(Bike)
    private readonly bikeRepository: Repository<Bike>,
  ) {}

  async getBikes(): Promise<Bike[]> {
    return this.bikeRepository.find(); 
  }

  async create(createBikeDto: CreateBikeDto): Promise<Bike> {
    const bike = this.bikeRepository.create(createBikeDto); 
    return this.bikeRepository.save(bike); 
  }

  async update(id: string, updateBikeDto: UpdateBikeDto): Promise<Bike> {
    const bike = await this.bikeRepository.findOne({ where: { id } }); 
    if (!bike) {
      throw new NotFoundException(`Bike not found`); 
    }
    Object.assign(bike, updateBikeDto); 
    return this.bikeRepository.save(bike); 
  }

  async remove(id: string): Promise<void> {
    const bike = await this.bikeRepository.findOne({ where: { id } }); 
    if (!bike) {
      throw new NotFoundException(`Bike not found`); 
    }
    await this.bikeRepository.remove(bike); 
  }
}
