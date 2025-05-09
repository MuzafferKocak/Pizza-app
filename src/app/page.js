import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Home from "@/components/Home";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <>
      <Header />

      <div className="min-h-screen pt-24 sm:pt-26 p-8 pb-20 gap-16 sm:p-20">
        <Home />
        <Contact />
      </div>
      <Footer />
    </>
  );
}
