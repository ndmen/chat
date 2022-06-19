import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMessageDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  chat_id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  sender_id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  message: string;
}
