import React from "react";

import HeroImg from "../images/hero.jpeg";
import Projects from "../components/sections/Projects"
import Experience from "../components/sections/Experience"
const Home = () => {
  return (
    <>
      <main className="px-24 mt-5 max-sm:px-5">
        <section className="hero flex justify-between gap-12 items-center max-md:flex-col">
  <div className="content flex flex-col gap-10 w-full max-w-3xl">
    <h1 className="text-2xl md:text-4xl font-serif text-gray-900">
      Hey there, I’m <span className="font-semibold">Prathmesh Balsurkar</span> 👋
    </h1>

    <p className="text-2xl leading-relaxed font-serif text-gray-400">
      I’m a Computer Science student at
      <span className="text-gray-900 font-medium"> MIT WPU, Pune</span>.
      My passion for technology fuels my curiosity and love for learning.
    </p>

    <p className="text-2xl leading-relaxed font-serif text-gray-400">
      I enjoy building things on the web and exploring
      <span className="text-gray-900 font-medium">
        {" "}Artificial Intelligence, Web Development, and Cloud Computing
      </span>.
      My journey has given me hands-on experience in
      <span className="text-gray-900 font-medium">
        {" "}Cloud Computing and IP Networking
      </span>,
      and I’m always looking to grow further.
    </p>

    <p className="text-2xl leading-relaxed font-serif text-gray-400">
      Outside of tech, I pursue another passion —
      <span className="text-gray-900 font-medium">
        {" "}professional cricket
      </span>,
      which keeps me disciplined, focused, and balanced.
    </p>
  </div>

  <div className="img flex justify-center max-md:hidden">
    <img
      src={HeroImg}
      className="rounded-full"
      alt="Prathmesh"
      width="420"
    />
  </div>
</section>
        {<Projects />}
        {<Experience />}
      </main>
    </>
  );
};

export default Home;
