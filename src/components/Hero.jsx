import React from "react";
import SponsorCoding from "@/components/sponsor";
import { useTypewriter,Cursor } from "react-simple-typewriter";
const Hero = () => {
  const skill={
    string:[ 'Welcome browiwit.dev','I am fullstack Website Developer',' I want to share my portofolio','come join me','to collaborate' ]
  }
  const [text] = useTypewriter({
    words:skill.string,
    loop:true,
    delaySpeed:1500,
    deleteSpeed:100
  })

  return (
    <div className="flex flex-col">
      <div className="sm:flex px-5 lg:pl-36 pt-5 pb-5">
        <div data-aos="fade-right" className="">
          <div className="sm:pb-3 flex flex-col">
         <h1 className="text-3xl"><i>Hello,</i></h1> 
            <h1 className="font-light text-yellow-300 text-center sm:text-start lg:text-5xl text-2xl ">
              {text}
             <span className="text-red-500" ><Cursor/></span>
            </h1> <br />
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
              <span className="font sm:text-xl">
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
        <div data-aos="fade-right">
          <SponsorCoding />
        </div>
      </div>
    </div>
  );
};

export default Hero;
