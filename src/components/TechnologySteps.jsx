import { useEffect, useState } from "react";
import data from "../data.json";

const TechnologySteps = () => {
  const [technology, setTechnology] = useState(data["technology"]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTechnology, setActiveTechnology] = useState(
    technology[activeIndex]
  );

  const { name, images, description } = activeTechnology;

  useEffect(() => {
    setActiveTechnology(technology[activeIndex]);
  }, [activeIndex]);

  return (
    <div className="grid md:grid-cols-2 gap-4 md:gap-x-12 justify-center items-center mx-auto md:mt-12 max-w-5xl">
      {/* IMAGE */}
      <div className=" md:col-start-2 md:row-start-1 rounded-md ">
        <img
          src={images["landscape"]}
          alt={name}
          className=" h-52 md:h-80 w-full object-cover md:pl-0 md:mt-8 mx-auto rounded-md"
        />
      </div>

      {/* INFO */}
      <div className=" md:col-start-1 md:row-start-1  flex flex-col gap-3 items-center my-2 lg:mr-16 text-slate-300 text-center md:text-left md:flex-row ">
        <div>
          <ul className="flex gap-x-8 md:flex-col md:gap-y-16 md:mr-3 ">
            {technology.map((item, index) => {
              return (
                <li
                  key={index}
                  className={` grid place-items-center h-10 w-10 text-xl  border-1 border-slate-200 rounded-full cursor-pointer backdrop-blur-sm  hover:scale-125 transition duration-200 ${
                    index === activeIndex ? "bg-[rgba(66,73,128,0.5)] " : null
                  }`}
                  onClick={() => {
                    setActiveIndex(index);
                  }}
                >
                  {index + 1}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col gap-y-4">
          <h3 className="text-2xl uppercase tracking-wider">{name}</h3>
          <p className="mx-2 md:mx-0 text-sm md:text-base leading-6 md:leading-7">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechnologySteps;
