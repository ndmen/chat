import { Types } from 'mongoose';

export class UserDo {
  _id: Types.ObjectId;
  email: string;
  password: string;

  constructor(props: Partial<UserDo>) {
    this._id = props._id;
    this.email = props.email || null;
    this.password = props.password || null;
  }
}
