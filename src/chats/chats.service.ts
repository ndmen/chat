import { Injectable } from '@nestjs/common';
import { CreateChatDto } from './dto/create-chat.dto';
import { CreateMessageDto } from './dto/create-message.dto';
import { ChatsRepository } from './chats.repository';

@Injectable()
export class ChatsService {
  constructor(private readonly chatsRepository: ChatsRepository) {}

  async createChat(createChatDto: CreateChatDto) {
    return await this.chatsRepository.createChat(createChatDto);
  }

  async createMessage(createMessageDto: CreateMessageDto) {
    return await this.chatsRepository.createMessage(createMessageDto);
  }

  async findAllChats(id: string) {
    return await this.chatsRepository.findAllChats(id);
  }

  async findAllMessages(id: string) {
    return await `This action returns a messages`;
  }
}
