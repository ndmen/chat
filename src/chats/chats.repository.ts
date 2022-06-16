import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ChatDo } from 'src/_schemas/chat.do';

export class ChatsRepository {
  constructor(
    @InjectModel('Chat')
    private chatModel: Model<ChatDo>,
  ) {}

  async createChat(chat): Promise<any> {
    const createOne = await this.chatModel.create(chat);
    return createOne;
  }

  async createMessage(message): Promise<any> {
    const createOne = await this.chatModel.findByIdAndUpdate(
      { _id: message.chat_id },
      {
        $push: {
          messages: {
            sender_id: message.sender_id,
            message: message.message,
          },
        },
      },
      { new: true },
    );
    return createOne;
  }

  async findAllChats(id): Promise<any> {
    const findAll = await this.chatModel.find({ users: { $all: [id] } });
    return findAll;
  }

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
