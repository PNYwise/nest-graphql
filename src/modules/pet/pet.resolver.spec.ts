import { Test, TestingModule } from '@nestjs/testing';
import { PetResolver } from './pet.resolver';
import { PetService } from './pet.service';

describe('PetResolver', () => {
  let resolver: PetResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PetResolver, PetService],
    }).compile();

    resolver = module.get<PetResolver>(PetResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
