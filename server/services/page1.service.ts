import { Page1Repository } from "../repositories/page1.repo";
import {
  IPageResponse,
  CreatePage1Input,
  UpdatePage1Input,
} from "@/types/page.type";

export class Page1Service {
  // Create a new item
  // static async createItem(itemData: CreatePage1Input): Promise<Page1Item> {
  //   return await Page1Repository.create(itemData);
  // }

  // Get all items
  static async getAllItems(): Promise<IPageResponse[]> {
    return await Page1Repository.findAll();
  }

  // Get item by ID
  static async getItemById(id: string): Promise<IPageResponse | null> {
    return await Page1Repository.findById(id);
  }

  // Get items by status
  // static async getItemsByStatus(
  //   status: "active" | "inactive"
  // ): Promise<Page1Item[]> {
  //   return await Page1Repository.findByStatus(status);
  // }

  // Update item
  // static async updateItem(
  //   id: string,
  //   itemData: UpdatePage1Input
  // ): Promise<Page1Item | null> {
  //   return await Page1Repository.update(id, itemData);
  // }

  // Delete item
  // static async deleteItem(id: string): Promise<boolean> {
  //   return await Page1Repository.delete(id);
  // }

  // Get item count
  // static async getItemCount(): Promise<number> {
  //   return await Page1Repository.count();
  // }

  // Get active items only
  // static async getActiveItems(): Promise<Page1Item[]> {
  //   return await Page1Repository.findByStatus("active");
  // }
}
