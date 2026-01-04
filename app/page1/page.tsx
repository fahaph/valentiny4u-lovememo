"use client";

import { useEffect, useState } from "react";
import {
  getAllPage1Items,
  getAllUsers,
  createPage1Item,
  updatePage1Item,
  deletePage1Item,
  deleteUser,
} from "./actions";
import { IPageResponse } from "@/types/page.type";
import { IUserResponse } from "@/types/user.type";

export default function Page1() {
  const [page1Items, setPage1Items] = useState<IPageResponse[]>([]);
  const [users, setUsers] = useState<IUserResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"page1" | "users">("page1");

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      const [page1Result, usersResult] = await Promise.all([
        getAllPage1Items(),
        getAllUsers(),
      ]);

      if (page1Result.success) {
        setPage1Items(page1Result.data || []);
      }
      if (usersResult.success) {
        setUsers(usersResult.data || []);
      }
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  // const handleCreatePage1 = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   const result = await createPage1Item(newPage1);
  //   if (result.success) {
  //     setNewPage1({ images: [], message: "" });
  //     loadData();
  //   } else {
  //     alert("Error: " + result.error);
  //   }
  // };

  // const handleCreateUser = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   const result = await createUser(newUser);
  //   if (result.success) {
  //     setNewUser({ access_key: "", message: "" });
  //     loadData();
  //   } else {
  //     alert("Error: " + result.error);
  //   }
  // };

  // const handleDeletePage1 = async (id: string) => {
  //   if (confirm("Are you sure you want to delete this item?")) {
  //     const result = await deletePage1Item(id);
  //     if (result.success) {
  //       loadData();
  //     } else {
  //       alert("Error: " + result.error);
  //     }
  //   }
  // };

  // const handleDeleteUser = async (id: string) => {
  //   if (confirm("Are you sure you want to delete this user?")) {
  //     const result = await deleteUser(id);
  //     if (result.success) {
  //       loadData();
  //     } else {
  //       alert("Error: " + result.error);
  //     }
  //   }
  // };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-300">
            MongoDB CRUD Demo
          </h1>
          <p className="text-purple-200">Next.js + TypeScript + MongoDB</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab("page1")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === "page1"
                ? "bg-white text-purple-900 shadow-lg"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            Page1 Items
          </button>
          <button
            onClick={() => setActiveTab("users")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === "users"
                ? "bg-white text-purple-900 shadow-lg"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            Users
          </button>
        </div>

        {/* Page1 Items Tab */}
        {activeTab === "page1" && (
          <div className="space-y-6">
            {/* Create Form */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Create New Page1 Item
              </h2>
            </div>

            {/* Raw JSON */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Raw JSON Data
              </h2>
              <pre className="bg-black/30 text-green-300 p-4 rounded-lg overflow-auto max-h-96 text-sm">
                {JSON.stringify(page1Items, null, 2)}
              </pre>
            </div>
          </div>
        )}

        {/* Page1 Items Tab */}
        {activeTab === "users" && (
          <div className="space-y-6">
            {/* Create Form */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Create New Page1 Item
              </h2>
            </div>

            {/* Raw JSON */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Raw JSON Data
              </h2>
              <pre className="bg-black/30 text-green-300 p-4 rounded-lg overflow-auto max-h-96 text-sm">
                {JSON.stringify(users, null, 2)}
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
