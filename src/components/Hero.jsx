import React from "react";
import SponsorCoding from "@/components/sponsor";
const Hero = () => {
  return (
    <div id="bg">
      <div className="sm:grid grid-cols-6  grid-flow-col gap-20 px-5 pt-5 pb-10">
        <div className="sm:my-auto lg:col-start-1 lg:col-span-3 sm:col-span-3">
          <div className="sm:pb-3 flex flex-col">
            <h1 data-aos="fade-up" className="font-bold text-teal-300 text-center sm:text-start sm:text-5xl text-2xl ">
              browiwit.dev
            </h1>
            <h4 data-aos="fade-right" className="pt-2 text-center text-md sm:text-left">
              Perkenalkan nama saya <span className="text-teal-400 font-semibold">Wiwit Tulus Subangkit</span> , saya adalah seorang <i className="text-semibold ">"Fullstack Website 
              developer"</i>

            </h4>
            <br />
            <div data-aos="fade-out "className="flex sm:justify-start justify-center">
            <button className="border hover:bg-slate-500 border-teal-300 p-2 rounded-lg">
              check out
            </button>
            </div>
          </div>
        </div>

        <div className="lg:col-start-5 sm:col-span-3 ">
          <div data-aos="fade-left" className="flex flex-col justify-center items-center gap-3 my-3">
            <img data-aos="fade-left"
              className="rounded-lg  hover:cursor-pointer hover:rotate-12"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH8lQo4QOoE-HqQ5ZdyWey25r66DnHXxuD9g&s"
              alt=""
            />
            <h4 data-aos="fade-left" className="text-sm text-left ">
              <span className="font">"Semakin meningkatnya perkembangan teknologi " </span>dan tantangan terhadap kebutuhan seorang <span className="text-teal-400 text-lg">Website Developer handal</span>.
            </h4>
          </div>
        </div>
      </div>
      <div data-aos="fade-down">
        <h1 data-aos="zoom-out" className="text-center font-semibold"> Bahasa Pemerograman dan Tools yg saya <span className="text-teal-400">kuasai</span> </h1>
        <div data-aos="fade-left"><SponsorCoding/></div>
      </div>
      
    </div>
  );
};

export default Hero;
