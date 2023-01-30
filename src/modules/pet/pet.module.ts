import { Module } from '@nestjs/common';
import { PetService } from './pet.service';
import { PetResolver } from './pet.resolver';
import { PetRepository } from '../../repositories/pet.repository';

@Module({
  providers: [PetResolver, PetService, PetRepository]
})
export class PetModule { }
