import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMessageDto {
  @IsNotEmpty()
  @IsString()
  sender_id: string;

  @IsString()
  @IsNotEmpty()
  receiver_id: string;

  @IsString()
  @IsNotEmpty()
  message: string;
}
