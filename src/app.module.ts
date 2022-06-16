import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppGateway } from './app.gateway';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatsModule } from './chats/chats.module';
import { AuthModule } from './auth/auth.module';

@Module({
  controllers: [AppController],
  providers: [AppService, AppGateway],
  imports: [
    MongooseModule.forRoot('mongodb://localhost/chat'),
    UsersModule,
    ChatsModule,
    AuthModule,
  ],
})
export class AppModule {}
