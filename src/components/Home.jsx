import React from "react";
import Menu from "./Menu";

const Home = () => {
  return (
    <div id="home" className="pt-8 sm:pt-2">
      <section
        className="bg-cover bg-center h-74 sm:h-84 md:h-[500px] rounded"
        style={{ backgroundImage: 'url("/pizzaofen.jpg")' }}
      >
        <div className="text-center text-white pt-20">
          <h1 className="text-5xl font-bold">Willkommen bei Pizza Time!</h1>
          <p className="mt-4 text-lg">Die beste Pizza in der Stadt.</p>
        </div>
      </section>
      <section id="menu">
        <Menu />
      </section>
    </div>
  );
};

export default Home;
