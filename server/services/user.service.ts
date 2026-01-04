import { UserRepository } from "../repositories/user.repo";
import { User, CreateUserInput, UpdateUserInput } from "@/types/user.type";

export class UserService {
  // Create a new user
  // static async createUser(userData: CreateUserInput): Promise<User> {
  //   // Check if email already exists
  //   const existingUser = await UserRepository.findByEmail(userData.email);
  //   if (existingUser) {
  //     throw new Error("Email already exists");
  //   }
  //   return await UserRepository.create(userData);
  // }

  // Get all users
  static async getAllUsers(): Promise<User[]> {
    return await UserRepository.findAll();
  }

  // Get user by ID
  static async getUserById(id: string): Promise<User | null> {
    return await UserRepository.findById(id);
  }

  // Get user by email
  static async getUserByEmail(email: string): Promise<User | null> {
    return await UserRepository.findByEmail(email);
  }

  // Update user
  // static async updateUser(
  //   id: string,
  //   userData: UpdateUserInput
  // ): Promise<User | null> {
  //   // If updating email, check if new email already exists
  //   if (userData.email) {
  //     const existingUser = await UserRepository.findByEmail(userData.email);
  //     if (existingUser && existingUser._id?.toString() !== id) {
  //       throw new Error("Email already exists");
  //     }
  //   }
  //   return await UserRepository.update(id, userData);
  // }

  // Delete user
  static async deleteUser(id: string): Promise<boolean> {
    return await UserRepository.delete(id);
  }

  // Get user count
  static async getUserCount(): Promise<number> {
    return await UserRepository.count();
  }
}
