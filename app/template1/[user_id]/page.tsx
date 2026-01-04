import Main from "@/components/template1/main";
import Page1 from "@/components/template1/page1";
import Page2 from "@/components/template1/page2";
import Page3 from "@/components/template1/page3";
import Page4 from "@/components/template1/page4";
import Page5 from "@/components/template1/page5";

type PageProps = {
  params: Promise<{ user_id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Template1({ params, searchParams }: PageProps) {
  const { user_id } = await params;
  const sParams = await searchParams;
  const currentPage = sParams.page as string;

  // ใช้เทคนิค Render-on-demand จะดีกว่าการสร้าง Object ทิ้งไว้ทั้งหมดครับ
  const renderPage = () => {
    switch (currentPage) {
      case "1": return <Page1 />;
      case "2": return <Page2 />;
      case "3": return <Page3 />;
      case "4": return <Page4 />;
      case "5": return <Page5 />;
      default: return <Main id={user_id} />;
    }
  };

  return (
    <div className="min-h-screen">
      {renderPage()}
    </div>
  );
}
