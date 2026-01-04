import { Collection } from "mongodb";
import { getDatabase } from "../db/mongodb";
import { IUser } from "@/types/user.type";

export class UserModel {
  private static collectionName = "users";

  static async getCollection(): Promise<Collection<IUser>> {
    const db = await getDatabase();
    return db.collection<IUser>(this.collectionName);
  }
}
