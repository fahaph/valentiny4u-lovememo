import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center">
      <main className="h-screen w-full flex items-center justify-center">
        <Link href={"template1/695a2143da2a7f8c10a986f2"}>
          <button className="bg-white text-black rounded px-2 cursor-pointer">Test page</button>
        </Link>
      </main>
    </div>
  );
}
