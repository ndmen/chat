import { isNotEmpty } from 'class-validator';

export class CreateChatDto {
  @isNotEmpty()
  users: Array;
}
