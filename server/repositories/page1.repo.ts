import { ObjectId } from "mongodb";
import { Page1Model } from "../models/page1.model";
import {
  IPage,
  IPageResponse,
} from "@/types/page1.type";

export class Page1Repository {

  // Transform
  private static transform(pageData: IPage & { _id: ObjectId }): IPageResponse {
    return {
      _id: pageData._id.toString(),
      images: pageData.images,
      message: pageData.message,
      createdAt: pageData.createdAt?.toISOString(),
      updatedAt: pageData.updatedAt?.toISOString(),
    };
  }

  // Read all
  static async findAll(): Promise<IPageResponse[]> {
    const collection = await Page1Model.getCollection();
    const data = await collection.find({}).toArray();

    return data.map(
      (item) => this.transform(item as IPage & { _id: ObjectId })
    );
  }

  // Read by ID
  static async findById(
    id: string
  ): Promise<IPageResponse | null> {

    const collection = await Page1Model.getCollection();
    const data = await collection.findOne({ _id: new ObjectId(id) });

    if (!data) return null;

    return this.transform(data as IPage & { _id: ObjectId });
  }

  // Count
  static async count(): Promise<number> {
    const collection = await Page1Model.getCollection();
    return collection.countDocuments();
  }

  // Create
  // static async create(
  //   itemData: CreatePage1Input
  // ): Promise<IPageResponse> {

  //   const collection = await Page1Model.getCollection();
  //   const now = new Date();

  //   const newItem: IPage = {
  //     ...itemData,
  //     createdAt: now,
  //     updatedAt: now,
  //   };

  //   const result = await collection.insertOne(newItem);

  //   return this.transform({
  //     ...newItem,
  //     _id: result.insertedId,
  //   });
  // }
}

