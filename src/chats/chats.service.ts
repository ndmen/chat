import { Injectable } from '@nestjs/common';
import { CreateChatDto } from './dto/create-chat.dto';
import { CreateMessageDto } from './dto/create-message.dto';

@Injectable()
export class ChatsService {
  async createChat(createChatDto: CreateChatDto) {
    return await 'This action adds a new chat';
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
