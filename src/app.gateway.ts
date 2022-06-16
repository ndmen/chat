import {
  SubscribeMessage,
  MessageBody,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class AppGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('create_message')
  async identity(@MessageBody() data: number): Promise<number> {
    await this.server.sockets.emit('get_message', data);
    console.log(data);
    return data;
  }
}
