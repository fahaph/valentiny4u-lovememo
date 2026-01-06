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
        await setVerifiedSession(id); // set cookie
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
    <div className="min-h-svh w-full p-3 bg-gray-100 flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-[400px] md:max-w-4xl h-auto bg-red-100 rounded-3xl shadow-xl grid grid-cols-1 md:grid-cols-2 border-2 border-red-300 overflow-hidden">
        {/* Image side (desktop only) */}
        <div className="hidden md:flex h-full items-center justify-center p-6">
          <div
            style={{ backgroundImage: `url("${user?.image?.[0]}")` }}
            className="h-full w-full bg-cover bg-center rounded-2xl"
          ></div>
        </div>

        {/* Numpad side */}
        <div className="h-full flex flex-col items-center justify-start md:justify-center p-3">
          <div className="w-full max-w-[240px] sm:max-w-[280px] md:max-w-[320px]">
            {/* Input */}
            <input
              type="text"
              value={inputValue}
              readOnly
              placeholder="Enter Access Key"
              className="w-full text-sm md:text-xl font-bold p-2 md:p-4 bg-red-400 rounded-full text-white text-center tracking-widest shadow-inner placeholder:text-red-200 focus:outline-none"
            />

            {/* Hint */}
            <div className="mt-2 mb-3 text-center text-gray-700 text-xs md:text-lg leading-tight hidden sm:block">
              <span className="font-bold">คำใบ้: </span>
              {user?.message}
            </div>

            {/* NUMPAD (แก้ปัญหาหลักอยู่ตรงนี้) */}
            <div className="grid grid-cols-3 gap-1 sm:gap-2 md:gap-4 mx-auto">
              {buttons.map((num) => (
                <button
                  key={num}
                  onClick={() => handlePress(num)}
                  className="aspect-square w-full text-[clamp(0.9rem,3vw,1.75rem)] md:text-3xl font-semibold bg-red-400 hover:bg-red-300 text-white rounded-full shadow-sm active:scale-90 transition-all flex items-center justify-center"
                >
                  {num}
                </button>
              ))}

              <button
                onClick={handleClear}
                className="aspect-square w-full text-[clamp(0.75rem,2.5vw,1.25rem)] md:text-xl font-bold bg-red-400 hover:bg-red-300 text-white rounded-full active:scale-90 transition-all flex items-center justify-center"
              >
                C
              </button>

              <button
                onClick={() => handlePress("0")}
                className="aspect-square w-full text-[clamp(0.9rem,3vw,1.75rem)] md:text-3xl font-semibold bg-red-400 hover:bg-red-300 text-white rounded-full shadow-sm active:scale-90 transition-all flex items-center justify-center"
              >
                0
              </button>

              <button
                onClick={handleDelete}
                className="aspect-square w-full bg-red-400 hover:bg-red-300 text-white rounded-full active:scale-90 transition-all flex items-center justify-center"
              >
                <Delete className="w-4 h-4 md:w-7 md:h-7" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
