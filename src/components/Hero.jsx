import React from "react";
import SponsorCoding from "@/components/sponsor";
import { useTypewriter, Cursor } from "react-simple-typewriter";
const Hero = () => {
  const skill = {
    string: [
      "Welcome browiwit.dev",
      "I am fullstack Website Developer",
      " I want to share my portofolio",
      "come join me to collaborate",
    ],
  };
  const [text] = useTypewriter({
    words: skill.string,
    loop: true,
    delaySpeed: 1500,
    deleteSpeed: 100,
  });

  return (
    <div>
      <div className="hero md:h-96 w-full py-10">
        <div className="hero-content text-center">
          <div className="md:max-w-lg max-w-md">
            <span className="md:text-3xl text-xl font-bold text-yellow-400">
              {" "}
              {text}
            </span>{" "}
            <span className="text-red-500 text-2xl font-bold">
              <Cursor />
            </span>
            <p className="py-6 text-lg">
              I am a fullstack developer with a passion for creating innovative
              and user-friendly websites.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      <div data-aos="zoom-in">
        <h1 className="text-center font-semibold">
          {" "}
          Bahasa Pemrograman dan Tools yg saya{" "}
          <span className="text-teal-400">kuasai</span>{" "}
        </h1>
        <div data-aos="fade-right">
          <SponsorCoding />
        </div>
      </div>
    </div>
  );
};

export default Hero;
