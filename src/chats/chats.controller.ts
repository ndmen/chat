import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { CreateChatDto } from './dto/create-chat.dto';
import { CreateMessageDto } from './dto/create-message.dto';

@Controller('chats')
export class ChatsController {
  constructor(private readonly chatsService: ChatsService) {}

  @Post()
  createChat(@Body() createChatDto: CreateChatDto) {
    return this.chatsService.createChat(createChatDto);
  }

  createMessage(@Body() createMessageDto: CreateMessageDto) {
    return this.chatsService.createMessage(createMessageDto);
  }

  @Get(':id')
  getAllChatsByUserId(@Param(':id') id: string) {
    return this.chatsService.findAllChats(id);
  }

  @Get(':id')
  getAllMessagesByChatId(@Param('id') id: string) {
    return this.chatsService.findAllMessages(id);
  }
}
