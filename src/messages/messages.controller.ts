import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('messages')
@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Post('create-message')
  async createMessage(@Body() createMessageDto: CreateMessageDto) {
    return await this.messagesService.createMessage(createMessageDto);
  }

  @Get(':id')
  async getAllMessagesByChatId(@Param('id') id: string) {
    return await this.messagesService.findAllMessages(id);
  }
}