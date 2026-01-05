import Main from "@/components/template1/main";
import Page1 from "@/components/template1/page1";
import Page2 from "@/components/template1/page2";
import Page3 from "@/components/template1/page3";
import Page4 from "@/components/template1/page4";
import Page5 from "@/components/template1/page5";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


type PageProps = {
  params: Promise<{ user_id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Template1({ params, searchParams }: PageProps) {
  const { user_id } = await params;
  const sParams = await searchParams;
  const currentPage = sParams.page as string;
  const cookieStore = await cookies()

  const sessionCookie = cookieStore.get("valentiny4uSession")?.value;
  const session = sessionCookie ? JSON.parse(sessionCookie) : null;

  const isVerified = session?.verified === true;
  const isOwner = session?.userId === user_id;

  const renderPage = () => {
    switch (currentPage) {
      case "1":
        return <Page1 />;
      case "2":
        return <Page2 />;
      case "3":
        return <Page3 />;
      case "4":
        return <Page4 />;
      case "5":
        return <Page5 />;
      default:
        return <Main id={user_id} />;
    }
  };

  if (!isVerified || !isOwner) {
    // ยังไม่ผ่าน → ให้เข้า Main ใส่ key
    if (currentPage) redirect(`/template1/${user_id}`);
  }

  return <div className="min-h-screen">{renderPage()}</div>;
}
