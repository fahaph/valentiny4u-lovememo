"use client";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function NextPageButton() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const page = searchParams.get("page");

  const handleNextPage = () => {
    if (page) {
      const next = parseInt(page) + 1;
      router.push(`${pathname}?page=${next}`);
    }
  };

  return (
    <button className="bg-white text-black" onClick={handleNextPage}>
      {"next ->"}
    </button>
  );
}
