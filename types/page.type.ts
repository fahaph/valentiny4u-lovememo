import { ObjectId } from "mongodb";

export interface IPage {
  _id?: ObjectId;
  images: string[];
  message: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IPageResponse {
  _id?: string;
  images: string[];
  message: string;
  createdAt?: string;
  updatedAt?: string;
}

export type CreatePage1Input = Omit<
  IPage,
  "_id" | "createdAt" | "updatedAt"
>;
export type UpdatePage1Input = Partial<CreatePage1Input>;
