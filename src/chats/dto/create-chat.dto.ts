import { IsNotEmpty, IsArray } from 'class-validator';

export class CreateChatDto {
  @IsNotEmpty()
  @IsArray()
  members: Array<string>;
}
