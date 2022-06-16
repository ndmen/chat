import { IsNotEmpty, IsArray } from 'class-validator';

export class CreateChatDto {
  @IsNotEmpty()
  @IsArray()
  users: Array<string>;
}
