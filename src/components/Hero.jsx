import React from "react";
import SponsorCoding from "@/components/sponsor";
const Hero = () => {
  return (
    <div id="bg" className="flex flex-col">
      <div className="border border-teal-400 grid sm:grid-cols-2 px-5 pt-5 pb-5">
        <div data-aos="fade-right" className="">
          <div className="sm:pb-3 flex flex-col">
            <h1 className="font-bold text-teal-300 text-center sm:text-start sm:text-5xl text-2xl ">
              browiwit.dev
            </h1>
            <h4 className="pt-2 text-center text-md sm:text-left">
              Perkenalkan nama saya{" "}
              <span className="text-teal-400 font-semibold">
                Wiwit Tulus Subangkit
              </span>{" "}
              saya adalah seorang{" "}
              <i className="text-semibold ">"Fullstack Website developer"</i>
            </h4>
            <br />
            <div className="flex sm:justify-start justify-center">
              <button className="border hover:bg-slate-500 border-teal-300 p-2 rounded-lg">
                check out
              </button>
            </div>
          </div>
        </div>

        <div data-aos="fade-left" className="">
          <div className="flex flex-col justify-center items-center gap-3 my-3">
            <img
              className="rounded-lg  hover:cursor-pointer hover:rotate-12"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH8lQo4QOoE-HqQ5ZdyWey25r66DnHXxuD9g&s"
              alt=""
            />
            <h4 className="text-sm text-left ">
              <span className="font">
                "Semakin meningkatnya perkembangan teknologi "{" "}
              </span>
              dan tantangan terhadap kebutuhan seorang{" "}
              <span className="text-teal-400 text-lg">
                Website Developer handal
              </span>
              .
            </h4>
          </div>
        </div>
      </div>
      <div data-aos="fade-down" className="pt-5">
        <h1 className="text-center font-semibold">
          {" "}
          Bahasa Pemrograman dan Tools yg saya{" "}
          <span className="text-teal-400">kuasai</span>{" "}
        </h1>
        <div data-aos="fade-left">
          <SponsorCoding />
        </div>
      </div>
    </div>
  );
};

export default Hero;
