"use client";
import { useState, useEffect } from "react";
import { Delete } from "lucide-react";
import { getUserById } from "@/actions/user.actions";
import { IUserResponse } from "@/types/user.type";
import { PulseLoader } from "react-spinners";
import { useRouter, usePathname } from "next/navigation";
import { setVerifiedSession } from "@/actions/auth.actions";

export default function Main({ id }: { id: string }) {
  const [inputValue, setInputValue] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();
  const [user, setUser] = useState<IUserResponse>();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
  if (user?.access_key && inputValue === user.access_key) {
    (async () => {
      await setVerifiedSession(id);   // set cookie
      router.push(`${pathname}?page=1`);
    })();
  }
}, [inputValue, user, id, pathname, router]);

  useEffect(() => {
    loadData();
  }, [id]);

  const loadData = async () => {
    setLoading(true);
    try {
      const result = await getUserById(id);
      if (result.success && result.data) {
        setUser(result.data);
      }
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const handlePress = (num: string) => setInputValue((prev) => prev + num);
  const handleDelete = () => setInputValue((prev) => prev.slice(0, -1));
  const handleClear = () => setInputValue("");

  const buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  if (loading) {
    return (
      <div className="h-screen w-full flex justify-center items-center bg-black/10">
        <PulseLoader color="#3b82f6" />
      </div>
    );
  }

  return (
    <div className="h-screen w-full p-4 md:p-20 bg-gray-100">
      <div className="h-full w-full bg-white rounded-xl shadow-xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* ฝั่งซ้าย: แสดงข้อมูล (Debug/Info) */}
        <div className="p-10 bg-gray-50 border-r hidden md:block">
          <h2 className="text-xl font-bold mb-4 text-gray-800">User Profile</h2>
          <pre className="text-xs bg-gray-900 text-green-400 p-4 rounded-lg overflow-auto max-h-[400px]">
            {JSON.stringify(user, null, 2)}
          </pre>
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>

        {/* ฝั่งขวา: Numpad */}
        <div className="h-full p-6 flex items-center justify-center bg-white">
          <div className="w-full max-w-[320px]">
            <div className="w-full mb-8">
              <input
                type="text" // เปลี่ยนเป็น password เพื่อความปลอดภัย
                value={inputValue}
                readOnly
                placeholder="Enter Access Key"
                className="w-full text-4xl font-bold p-5 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:outline-none text-gray-800 text-center tracking-widest shadow-inner"
              />
            </div>

            <div className="grid grid-cols-3 gap-4 w-full">
              {buttons.map((num) => (
                <button
                  key={num}
                  onClick={() => handlePress(num)}
                  className="h-20 w-20 text-3xl font-semibold bg-white hover:bg-blue-50 text-gray-700 rounded-full shadow-sm border border-gray-100 active:scale-90 transition-all mx-auto flex items-center justify-center"
                >
                  {num}
                </button>
              ))}

              <button
                onClick={handleClear}
                className="h-20 w-20 text-xl font-bold bg-red-50 hover:bg-red-100 text-red-600 rounded-full active:scale-90 transition-all mx-auto flex items-center justify-center"
              >
                C
              </button>

              <button
                onClick={() => handlePress("0")}
                className="h-20 w-20 text-3xl font-semibold bg-white hover:bg-blue-50 text-gray-700 rounded-full shadow-sm border border-gray-100 active:scale-90 transition-all mx-auto flex items-center justify-center"
              >
                0
              </button>

              <button
                onClick={handleDelete}
                className="h-20 w-20 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full active:scale-90 transition-all mx-auto"
              >
                <Delete size={28} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
