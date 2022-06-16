import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterUserDto } from '../auth/dto/register-user.dto';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async create(registerUserDto: RegisterUserDto): Promise<any> {
    const user = await this.usersService.createOne(registerUserDto);
    return user;
  }
}
