import { ObjectId } from "mongodb";
import { UserModel } from "../models/user.model";
import { IUser, IUserResponse } from "@/types/user.type";

export class UserRepository {
  private static transform(userData: IUser & { _id: ObjectId }): IUserResponse {
    return {
      _id: userData._id.toString(),
      access_key: userData.access_key,
      message: userData.message,
      createdAt: userData.createdAt?.toISOString(),
      updatedAt: userData.updatedAt?.toISOString(),
    };
  }

  // Read all
  static async findAll(): Promise<IUserResponse[]> {
    const collection = await UserModel.getCollection();
    const data = await collection.find({}).toArray();

    return data.map((item) =>
      this.transform(item as IUser & { _id: ObjectId })
    );
  }

  // Create
  // static async create(userData: CreateUserInput): Promise<User> {
  //   const collection = await UserModel.getCollection();
  //   const now = new Date();
  //   const newUser: User = {
  //     ...userData,
  //     createdAt: now,
  //     updatedAt: now,
  //   };
  //   const result = await collection.insertOne(newUser);
  //   return { ...newUser, _id: result.insertedId };
  // }
}
