import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { UserRepository } from '../../repositories/user.repository';

@Module({
  providers: [UserResolver, UserService, UserRepository]
})
export class UserModule { }
