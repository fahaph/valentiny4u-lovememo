import { Collection } from "mongodb";
import { getDatabase } from "../db/mongodb";
import { IPage } from "@/types/page1.type";

export class Page1Model {
  private static collectionName = "page1";

  static async getCollection(): Promise<Collection<IPage>> {
    const db = await getDatabase();
    return db.collection<IPage>(this.collectionName);
  }
}
