"use client";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function PrevPageButton() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const page = searchParams.get("page");

  const handlePrevPage = () => {
    if (page) {
      if (page === '1') {
        router.push(`${pathname}`);
      } else {
        const previous = parseInt(page) - 1;
        router.push(`${pathname}?page=${previous}`);
      }
    }
  };

  return (
    <button className="bg-white text-black" onClick={handlePrevPage}>
      {"<- previous"}
    </button>
  );
}