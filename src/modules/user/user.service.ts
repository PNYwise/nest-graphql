import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from '../../entities/user.entity';
import { UserRepository } from '../../repositories/user.repository';

@Injectable()
export class UserService {

  constructor (private readonly userRepository: UserRepository) { }
  create(createUserInput: CreateUserInput) {
    return 'This action adds a new user';
  }

  findAll(): User[] {
    return this.userRepository.findALl();
  }

  findOne(username: string): User {
    
    if (this.userRepository.findOneByUsername(username)) {
      return this.userRepository.findOneByUsername(username)
    }
    throw new NotFoundException;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
