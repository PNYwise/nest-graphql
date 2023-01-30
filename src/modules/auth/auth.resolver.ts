import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { User } from '../../entities/user.entity';
import { AuthService } from './auth.service';
import { LoginInput } from './dto/login.input';
import { LoginResponse } from './dto/login.response';

@Resolver()
export class AuthResolver {
  constructor (private readonly authService: AuthService) { }


  @Mutation(() => LoginResponse)
  async login(@Args('loginInput')  loginInput: LoginInput) {
    return this.authService.login(loginInput);
  }

}
