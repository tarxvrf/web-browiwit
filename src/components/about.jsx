import React from "react";

const About = () => {
  const skilfe = ["reactjs", "api", "tailwindcss", "nextjs"];
  const skilbe = ["django", "restfulapi", "sql"];

  return (
    <div className=" pt-5">
      <h1 data-aos="zoom-in-down" className="text-center text-5xl text-teal-300">About Us</h1>
      <div className="grid grid-cols-6 gap-5 p-10">
        <div className="sm:col-span-3 col-span-6 ">
          <div data-aos="zoom-in-up" delay="50" className="w-full h-full flex lg:justify-end sm:justify-center">
            <img
              height={300}
              width={300}
              className="rounded-lg border"
              src="https://images.ctfassets.net/23aumh6u8s0i/6pjUKboBuFLvCKkE3esaFA/5f2101d6d2add5c615db5e98a553fc44/nextjs.jpeg"
              alt=""
            />
          </div>
        </div>
        <div className="sm:col-span-3 col-span-6 lg:col-span-2">
          <div className="w-full sm:h-[250px]">            
            <div data-aos="zoom-in">
            <h1 className="font-semibold">
              <i className="text-xl">Saya</i> menguasai beberapa teknologi seperti <span className="text-teal-400">frontend</span> dan <span className="text-teal-400">backend.</span> 
            </h1>
            <br />
              Berikut ini Teknologi yg saya gunakan beserta tools dan librarynya.
            </div>
            <div   className="flex flex-wrap gap-5 pt-3">
              <div data-aos="flip-right">
                <h1 className="text-lg text-teal-300 font-thin">FrontEnd</h1>
                <ul>
                  {skilfe.map((item, index) => (
                    <li key={index}>* {item}</li>
                  ))}
                </ul>
              </div>

              <div data-aos="flip-right">
                <h1 className="text-lg text-teal-300">BackEnd</h1>
                <ul>
                  {skilbe.map((item, index) => (
                    <li key={index}>* {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
