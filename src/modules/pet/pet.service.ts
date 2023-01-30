import { Injectable } from '@nestjs/common';
import { CreatePetInput } from './dto/create-pet.input';
import { UpdatePetInput } from './dto/update-pet.input';
import { Pet } from '../../entities/pet.entity';
import { PetRepository } from '../../repositories/pet.repository';

@Injectable()
export class PetService {
  constructor (private petRepository: PetRepository) { }
  create(createPetInput: CreatePetInput) {
    return 'This action adds a new pet';
  }

  findAll(): Pet[] {
    return this.petRepository.findALl();
  }

  findOne(id: number): Pet {
    return this.petRepository.findOne(id);
  }

  update(id: number, updatePetInput: UpdatePetInput) {
    return `This action updates a #${id} pet`;
  }

  remove(id: number) {
    return `This action removes a #${id} pet`;
  }
}
