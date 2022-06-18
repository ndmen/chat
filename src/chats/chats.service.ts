import { Injectable } from '@nestjs/common';
import { CreateChatDto } from './dto/create-chat.dto';
import { ChatsRepository } from './chats.repository';

@Injectable()
export class ChatsService {
  constructor(private readonly chatsRepository: ChatsRepository) {}

  async createChat(createChatDto: CreateChatDto) {
    return await this.chatsRepository.createChat(createChatDto);
  }

  async findAllChats(id: string) {
    return await this.chatsRepository.findAllChats(id);
  }
}
