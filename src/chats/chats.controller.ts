import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { CreateChatDto } from './dto/create-chat.dto';
import { CreateMessageDto } from './dto/create-message.dto';

@Controller('chats')
export class ChatsController {
  constructor(private readonly chatsService: ChatsService) {}

  @Post('create-chat')
  async createChat(@Body() createChatDto: CreateChatDto) {
    return await this.chatsService.createChat(createChatDto);
  }

  @Post('create-message')
  async createMessage(@Body() createMessageDto: CreateMessageDto) {
    return await this.chatsService.createMessage(createMessageDto);
  }

  @Get('chats/:id')
  async getAllChatsByUserId(@Param(':id') id: string) {
    return await this.chatsService.findAllChats(id);
  }

  @Get('messages/:id')
  async getAllMessagesByChatId(@Param('id') id: string) {
    return await this.chatsService.findAllMessages(id);
  }
}
