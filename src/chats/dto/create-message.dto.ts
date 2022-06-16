import { isNotEmpty } from 'class-validator';

export class CreateMessageDto {
  @isNotEmpty()
  sender_id: string;

  @isNotEmpty()
  receiver_id: string;

  @isNotEmpty()
  message: string;
}
