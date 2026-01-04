"use server";

import { Page1Service } from "@/server/services/page1.service";
import { UserService } from "@/server/services/user.service";
import { CreatePage1Input, UpdatePage1Input } from "@/types/page.type";
import { CreateUserInput, UpdateUserInput } from "@/types/user.type";
import { revalidatePath } from "next/cache";

// ============ Page1 Actions ============

export async function getAllPage1Items() {
  try {
    const items = await Page1Service.getAllItems();
    return { success: true, data: items };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
}

export async function getPage1ItemById(id: string) {
  try {
    const item = await Page1Service.getItemById(id);
    return { success: true, data: item };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
}

export async function createPage1Item(data: CreatePage1Input) {
  try {
    const item = await Page1Service.createItem(data);
    revalidatePath("/page1");
    return { success: true, data: item };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
}

export async function updatePage1Item(id: string, data: UpdatePage1Input) {
  try {
    const item = await Page1Service.updateItem(id, data);
    revalidatePath("/page1");
    return { success: true, data: item };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
}

export async function deletePage1Item(id: string) {
  try {
    const result = await Page1Service.deleteItem(id);
    revalidatePath("/page1");
    return { success: true, data: result };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
}

// ============ User Actions ============

export async function getAllUsers() {
  try {
    const users = await UserService.getAllUsers();
    return { success: true, data: users };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
}

export async function getUserById(id: string) {
  try {
    const user = await UserService.getUserById(id);
    return { success: true, data: user };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
}

// export async function createUser(data: CreateUserInput) {
//   try {
//     const user = await UserService.createUser(data);
//     revalidatePath("/page1");
//     return { success: true, data: user };
//   } catch (error) {
//     return { success: false, error: (error as Error).message };
//   }
// }

// export async function updateUser(id: string, data: UpdateUserInput) {
//   try {
//     const user = await UserService.updateUser(id, data);
//     revalidatePath("/page1");
//     return { success: true, data: user };
//   } catch (error) {
//     return { success: false, error: (error as Error).message };
//   }
// }

export async function deleteUser(id: string) {
  try {
    const result = await UserService.deleteUser(id);
    revalidatePath("/page1");
    return { success: true, data: result };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
}
