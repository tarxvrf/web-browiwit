import React from "react";
import SponsorCoding from "@/components/sponsor";
import { useTypewriter, Cursor } from "react-simple-typewriter";
const Hero = () => {
  const skill = {
    string: [
      "Welcome browiwit.dev",
      "I am fullstack Website Developer",
      " I want to share my portofolio",
      "come join me",
      "to collaborate",
    ],
  };
  const [text] = useTypewriter({
    words: skill.string,
    loop: true,
    delaySpeed: 1500,
    deleteSpeed: 100,
  });

  return (
    <div id="bg" className="flex flex-col pt-5 pb-5">
      <div className="grid grid-cols-12 border gap-10">
        <div className="border col-start-2 col-span-5">
          <span className="text-5xl">Hello</span>,<span className="text-yellow-300">{text}{" "}</span> 
          <span className="text-yellow-300">
            <Cursor />
          </span>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Exercitationem fuga voluptate ullam perspiciatis repellendus ad
            pariatur rem recusandae, modi dolorem?
          </div>
        </div>
        <div className="flex flex-col px-5 border items-center col-span-5 gap-5">
          <div>
            <img width={100} className="rounded-full animate-bounce" src="./assets/ball.png" alt="" />
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
            ex.Saat ini saya bekerja sebagai fullstack developer
          </div>
        </div>
      </div>

      <div data-aos="zoom-in" className="pt-5">
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
