import React from "react";

const Portofolio = () => {
  return (
    <div className="md:mx-10 md:p-5 my-5">
      <h1 data-aos="zoom-out" className="flex justify-center text-5xl sm:py-5 text-teal-300">
        Portofolio
      </h1>
      <div className="grid lg:grid-cols-6 sm:grid-cols-4 gap-5 pt-5 m-5">
        <div data-aos="flip-left" className="flex flex-col gap-5 col-span-2 border rounded-xl">
          <div className="w-full">
            <img
              width={300}                            
              className="flex justify-center"
              src="./assets/image1.png"
              alt=""
            />
          </div>
          <div>
            <h1 className="text-3xl text-teal-300 pb-3">Music Player</h1>
            <div>Pembuatan Music Player sederhana meggunakan Reactjs</div>
          </div>
          <div className="p-3">
               <button className="bg-transparent border border-teal-300 rounded-md p-2"><a href="https://browiwit-music-player.vercel.app/">Lihat</a></button>
          </div>

        </div>

        <div data-aos="flip-right" className="flex flex-col gap-10 col-span-2 border rounded-xl">
          <div className="w-full">
            <img  
              width={300}                       
              className="flex justify-center p-2"
              src="./assets/image.png"
              alt=""
            />
          </div>
          <div>
            <h1 className="text-3xl text-teal-300 pb-3">Calculator</h1>
            <div>Pembuatan Calculator sederhana meggunakan Reactjs</div>
          </div>
          <div className="p-3">
               <button className="bg-transparent border border-teal-300 rounded-md p-2"><a href="https://browiwitapps.vercel.app/">Lihat</a></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
