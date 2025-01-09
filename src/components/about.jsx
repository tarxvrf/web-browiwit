import React from "react";

const About = () => {
  const skilfe = ["reactjs", "api", "tailwindcss", "nextjs"];
  const skilbe = ["django", "restfulapi", "sql"];

  return (
    <div className="about pt-5">
      <h1 className="text-center text-5xl text-teal-300">About Us</h1>
      <div className="grid grid-cols-6 gap-5 container mx-auto p-10">
        <div className="sm:col-span-3 col-span-6 ">
          <div className="w-full h-full flex lg:justify-end sm:justify-center">
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
            <h1 className="font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              exercitationem.
            </h1>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Praesentium, atque earum. Impedit eligendi exercitationem numquam.
            </p>
            <div className="flex flex-wrap gap-5 pt-3">
              <div>
                <h1 className="text-lg text-teal-300 font-thin">FrontEnd</h1>
                <ul>
                  {skilfe.map((item, index) => (
                    <li key={index}>* {item}</li>
                  ))}
                </ul>
              </div>

              <div>
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
