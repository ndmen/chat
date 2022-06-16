import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';

export type ChatDocument = Chat & Document;

@Schema()
export class Chat {
  @Prop()
  users: string;

  @Prop()
  messages: [{ sender_id: ObjectId; receiver_id: ObjectId; message: string }];
}

export const ChatSchema = SchemaFactory.createForClass(Chat);
