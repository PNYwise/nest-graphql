import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../../entities/user.entity';
import { UserRepository } from '../../repositories/user.repository';
import { LoginInput } from './dto/login.input';

@Injectable()
export class AuthService {
     constructor (
          private readonly userRepository: UserRepository,
          private jwtService: JwtService
     ) { }
     async login(LoginInput: LoginInput) {
          const user = this.userRepository.findOneByUsername(LoginInput.username);
          if (user && user.password === LoginInput.password) {
               return {
                    access_token: this.jwtService.sign({ sub: user.id, username: user.username }),
               };
          }
          throw new UnauthorizedException;

     }

}
