import React from "react";

const Portofolio = () => {
  return (
    <div className="p-10">
      <div data-aos="zoom-out" className="flex justify-center ">
        <h1 className="text-5xl py-5 text-teal-300">Portofolio</h1>
      </div>
      <div className="sm:flex gap-5">
        <div
          data-aos="flip-left"
          className="flex flex-col gap-5 mb-5 border rounded-xl"
        >
          <div className="w-full">
            <img
              width={300}
              className="flex justify-center p-2"
              src="./assets/image1.png"
              alt=""
            />
          </div>
          <div>
            <h1 className="text-3xl text-teal-300 pb-3">Music Player</h1>
            <div>Pembuatan Music Player sederhana meggunakan Reactjs</div>
          </div>
          <div className="p-3">
            <button className="bg-transparent border border-teal-300 rounded-md p-2">
              <a href="https://browiwit-music-player.vercel.app/">Lihat</a>
            </button>
          </div>
        </div>

        <div
          data-aos="flip-right"
          className="flex flex-col gap-5 border rounded-xl"
        >
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
            <button className="bg-transparent border border-teal-300 rounded-md p-2">
              <a href="https://browiwitapps.vercel.app/">Lihat</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
