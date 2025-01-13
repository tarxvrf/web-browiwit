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
    <div id="bg" className="flex flex-col pt-5 pb-5">
      <div className="grid md:grid-cols-12 gap-14 pb-5">
        <div data-aos="fade-right" className="md:col-start-2 col-span-5 px-3">
          <h1>
            <span className="text-5xl">Hello</span> ,{" "}
          </h1>
          <span className="text-yellow-300 lg:text-lg md:text-sm text-sm">
            {text}{" "}
          </span>
          <span className="text-yellow-300">
            <Cursor />{" "}
          </span>

          <div className="text-center md:text-left pt-5">
            Kemajuan Website dalam beberapa tahun terakhir telah mengalami
            perkembangan yang sangat pesat, baik dari segi teknologi, desain,
            maupun fungsionalitas. Berikut adalah beberapa poin penting terkait
            kemajuan website. 
          </div>
        </div>
        <div data-aos="fade-left" className="gap-5 col-span-5">
          <div className="flex flex-col justify-center items-center">
            <img
              width={100}
              className="rounded-full animate-bounce"
              src="./assets/ball.png"
              alt=""
            />
          </div>
          <div className="text-left px-5 ">
          Seorang Fullstack Developer bertanggung jawab untuk
            membangun aplikasi secara keseluruhan, mulai dari antarmuka pengguna
            hingga server yang mengelola data dan proses
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
