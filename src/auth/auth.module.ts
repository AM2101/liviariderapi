import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
<<<<<<< HEAD
import { User } from '../Entity/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { UserOtp } from '../Entity/userotp.entity';
=======
import { User } from '../entity/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { UserOtp } from '../entity/userotp.entity';
>>>>>>> 30019f07ab283974c638a09a58fcd98ee4eda1e7

@Module({
  imports: [TypeOrmModule.forFeature([User, UserOtp]),
  JwtModule.register({
    secret: process.env.JWT_SECRET || 'raider',
    signOptions: { expiresIn: process.env.EXPIRESIN || '1h' },
  }),],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule { }
