import { Types } from 'mongoose';

export class ChatDo {
  _id: Types.ObjectId;
  users: Array<Types.ObjectId>;
  messages: Array<Types.ObjectId>;

  constructor(props: Partial<ChatDo>) {
    this._id = props._id;
    this.users = props.users || null;
    this.messages = props.messages || null;
  }
}
