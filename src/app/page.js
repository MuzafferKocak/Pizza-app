import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />

    <div className="min-h-screen pt-24 sm:pt-26 p-8 pb-20 gap-16 sm:p-20">
      <Menu />
    </div>
      <Footer />
    </>
  );
}
