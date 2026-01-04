'use server'

import { UserService } from "@/server/services/user.service"

export async function getUserById(id: string) {
  try {
    const user = await UserService.getUserById(id);
    return { success: true, data: user };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
}