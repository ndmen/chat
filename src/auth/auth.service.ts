import { Injectable } from '@nestjs/common';
import { RegisterUserDto } from '../auth/dto/register-user.dto';

@Injectable()
export class AuthService {
  create(registerUserDto: RegisterUserDto) {
    return 'This action adds a new user';
  }
}
