import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-8">
      <main className="max-w-4xl w-full">
        <Link href={"template1/695a2143da2a7f8c10a986f2"}>
          <button>Test page</button>
        </Link>
      </main>
    </div>
  );
}
