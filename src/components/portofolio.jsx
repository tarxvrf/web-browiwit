import React from "react";

const Portofolio = () => {
  return (
    <div className="px-5 py-20">
      <h1
        data-aos="zoom-in"
        className="md:text-5xl text-center text-3xl text-teal-400"
      >
        Portofolio
      </h1>
      <div className="grid md:grid-cols-4 gap-5 mt-10 ">
        <div
          data-aos="flip-right"
          className="flex flex-col gap-3 border rounded-lg py-3 px-3 "
        >
          <div className="flex justify-center">
            <img src="./assets/image.png" alt="" />
          </div>
          <h4>
            Ini merupakan aplikasi calculator sederhana degan menggunakan
            Reactjs
          </h4>
          <button className="w-1/2 btn btn-outline btn-warning ">klik</button>
        </div>
        <div
          data-aos="flip-right"
          className="flex flex-col gap-3 border rounded-lg py-3 px-3 "
        >
          <div className="flex justify-center">
            <img src="./assets/image1.png" alt="" />
          </div>
          <h4>
            Ini merupakan aplikasi music player sederhana degan menggunakan
            Reactjs
          </h4>
          <button className="w-1/2 btn btn-outline btn-warning ">klik</button>
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
