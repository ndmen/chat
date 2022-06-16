import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ChatDo } from 'src/_schemas/chat.do';

export class ChatsRepository {
  constructor(
    @InjectModel('Chat')
    private postModel: Model<ChatDo>,
  ) {}

  async createChat(chat): Promise<any> {
    const createOne = await this.postModel.create(chat);
    return createOne;
  }

  //   async findAll(): Promise<any> {
  //     const findAll = await this.postModel.find();
  //     return findAll;
  //   }

  //   async findOne(id): Promise<any> {
  //     const findOne = await this.postModel.findById(id);
  //     return findOne;
  //   }

  //   async update(id, post): Promise<any> {
  //     const update = await this.postModel.findByIdAndUpdate(id, post);
  //     return update;
  //   }

  //   async remove(id): Promise<any> {
  //     const remove = await this.postModel.findByIdAndDelete(id);
  //     return remove;
  //   }
}
