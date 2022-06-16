import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes } from 'mongoose';
import { Document, ObjectId } from 'mongoose';

export type ChatDocument = Chat & Document;

@Schema({ versionKey: false, timestamps: true })
export class Message {
  @Prop({ ref: 'User', type: SchemaTypes.ObjectId })
  sender_id: ObjectId;

  @Prop()
  message: string;
}
@Schema({ versionKey: false, timestamps: true })
export class Chat {
  @Prop({ ref: 'User', type: [SchemaTypes.ObjectId] })
  users: [ObjectId];

  @Prop()
  messages: Message;
}

export const ChatSchema = SchemaFactory.createForClass(Chat);
