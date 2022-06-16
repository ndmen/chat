import { Injectable } from '@nestjs/common';
import { CreateChatDto } from './dto/create-chat.dto';
import { CreateMessageDto } from './dto/create-message.dto';

@Injectable()
export class ChatsService {
  createChat(createChatDto: CreateChatDto) {
    return 'This action adds a new chat';
  }

  createMessage(createMessageDto: CreateMessageDto) {
    return 'This action adds a new message';
  }

  findAllChats(id: string) {
    return `This action returns a chats`;
  }

  findAllMessages(id: string) {
    return `This action returns a messages`;
  }
}
