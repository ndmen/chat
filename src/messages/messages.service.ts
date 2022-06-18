import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  constructor(private readonly messagesRepository: MessagesRepository) {}

  async createMessage(createMessageDto: CreateMessageDto) {
    return await this.messagesRepository.createMessage(createMessageDto);
  }

  async findAllMessages(id: string) {
    return await this.messagesRepository.findAllMessages(id);
  }
}
