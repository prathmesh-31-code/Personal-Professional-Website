import React from "react";
import HeroImg from "../images/hero.jpeg";
import Projects from "../components/sections/Projects";
import Experience from "../components/sections/Experience";
import { Link } from "react-router-dom";



const Home = () => {
  return (
    <main className="px-24 mt-12 max-sm:px-5">
      {/* HERO */}
      <section className="flex justify-between gap-16 items-center max-md:flex-col">
        <div className="flex flex-col gap-8 w-full max-w-3xl">
          <h1 className="text-2xl md:text-4xl font-serif text-gray-900">
            Hey there, I’m{" "}
            <a
              href="https://www.linkedin.com/in/prathmesh-balsurkar-2397092a7/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline decoration-2 underline-offset-4 hover:text-gray-600 transition"
            >
              Prathmesh Balsurkar
            </a>{" "}
            👋
          </h1>

          
          <p className="text-2xl leading-relaxed font-serif text-gray-400">
            I’m a Computer Science student at 
            <Link 
              to="/posts"
              className="relative text-gray-900 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gray-900 after:transition-all hover:after:w-full"> MIT WPU, Pune
            </Link>.
            My passion for technology fuels my curiosity and love for learning.
          </p>

          <p className="text-2xl leading-relaxed font-serif text-gray-400">
            I enjoy building things on the web and exploring
            <span className="text-gray-900 font-medium">
              {" "}Artificial Intelligence, Web Development, and Cloud Computing
            </span>.
          </p>

          <p className="text-2xl leading-relaxed font-serif text-gray-400">
            Beyond technology, I pursue a parallel passion as a 
            <span className="text-gray-900 font-medium"> professional cricket player</span>, 
            finding balance, discipline, and focus through the synergy of 
            <span className="text-gray-900 font-medium"> sports and technology</span>.
          </p>

        </div>

        <div className="flex justify-center max-md:hidden">
          <img
            src={HeroImg}
            className="rounded-full"
            alt="Prathmesh"
            width="420"
          />
        </div>
      </section>

    <Projects/>
    <Experience/>
      
    </main>
    
  );
};

export default Home;
