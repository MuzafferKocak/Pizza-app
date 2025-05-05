import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
