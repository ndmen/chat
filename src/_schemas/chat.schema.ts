import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes } from 'mongoose';
import { Document, ObjectId } from 'mongoose';

export type ChatDocument = Chat & Document;

@Schema({ versionKey: false, timestamps: true })
export class Chat {
  @Prop({ ref: 'User', type: [SchemaTypes.ObjectId] })
  members: [ObjectId];
}

export const ChatSchema = SchemaFactory.createForClass(Chat);
