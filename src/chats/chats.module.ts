import { Module } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { ChatsController } from './chats.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatSchema, Chat } from 'src/_schemas/chat.schema';
import { ChatsRepository } from './chats.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Chat.name, schema: ChatSchema }]),
  ],
  controllers: [ChatsController],
  providers: [ChatsService, ChatsRepository],
  exports: [ChatsService],
})
export class ChatsModule {}
