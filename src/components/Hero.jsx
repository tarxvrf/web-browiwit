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
   
      <div className="hero h-96 w-full py-10">
        <div className="hero-content text-center">
          <div className="max-w-lg ">
            <span className="text-3xl font-bold text-yellow-400">
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

     
    
  );
};

export default Hero;
