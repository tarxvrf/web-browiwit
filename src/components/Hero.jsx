import React from "react";
import SponsorCoding from "@/components/sponsor";
const Hero = () => {
  return (
    <div id="bg">
      <div className="sm:grid grid-cols-6  grid-flow-col gap-20 px-5 pt-5 pb-10">
        <div className="sm:my-auto lg:col-start-2 lg:col-span-2 sm:col-span-3">
          <div className="sm:pb-3 flex flex-col">
            <h1 className="font-bold text-teal-300 text-center sm:text-start sm:text-5xl ">
              Judul
            </h1>
            <h4 className="pt-2 text-center text-md sm:text-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
              ipsa nemo facere, magni rem explicabo? Sapiente, aspernatur et
              blanditiis minus perferendis quibusdam optio sint maxime odit
              eveniet ratione quam aperiam.
            </h4>
            <br />
            <div className="flex sm:justify-start justify-center">
            <button className="border hover:bg-slate-500 border-teal-300 p-2 rounded-lg">
              check out
            </button>
            </div>
          </div>
        </div>

        <div className="lg:col-start-5 sm:col-span-3 ">
          <div className="flex flex-col justify-center items-center gap-3 my-3">
            <img
              className="rounded-lg  hover:cursor-pointer hover:rotate-12"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH8lQo4QOoE-HqQ5ZdyWey25r66DnHXxuD9g&s"
              alt=""
            />
            <h4 className="text-sm text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              quae quam iste voluptatum sapiente provident.
            </h4>
          </div>
        </div>
      </div>
      <SponsorCoding/>
    </div>
  );
};

export default Hero;
