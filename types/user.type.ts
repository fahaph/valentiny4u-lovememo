import { ObjectId } from "mongodb";

export interface IUser {
  _id?: ObjectId;
  access_key: string;
  message: string;
  image: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IUserResponse {
  _id?: string;
  access_key: string;
  message: string;
  image: string[];
  createdAt?: string;
  updatedAt?: string;
}

export type CreateUserInput = Omit<IUser, "_id" | "createdAt" | "updatedAt">;
export type UpdateUserInput = Partial<CreateUserInput>;
