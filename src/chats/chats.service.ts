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
    return await 'This action adds a new message';
  }

  async findAllChats(id: string) {
    return await `This action returns a chats`;
  }

  async findAllMessages(id: string) {
    return await `This action returns a messages`;
  }
}
