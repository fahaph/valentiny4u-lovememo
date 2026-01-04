import { Collection } from "mongodb";
import { getDatabase } from "../db/mongodb";
import { User } from "@/types/user.type";

export class UserModel {
  private static collectionName = "users";

  static async getCollection(): Promise<Collection<User>> {
    const db = await getDatabase();
    return db.collection<User>(this.collectionName);
  }
}
