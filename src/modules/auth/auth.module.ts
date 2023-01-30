import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { UserRepository } from '../../repositories/user.repository';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt/jwt.strategy';


@Module({
  imports: [PassportModule, JwtModule.register({
    signOptions: { expiresIn: '1d' },
    secret: 'super-secret'
  })],
  providers: [AuthResolver, AuthService, UserRepository, JwtStrategy]
})
export class AuthModule { }
