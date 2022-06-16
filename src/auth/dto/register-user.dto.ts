import { isEmail, isNotEmpty } from 'class-validator';

export class RegisterUserDto {
  @isNotEmpty()
  @isEmail()
  email: string;

  @isNotEmpty()
  password: string;
}
