import { useEffect, useState } from "react";
import data from "../data.json";

const CrewMembers = () => {
  const [crew, setCrew] = useState(data["crew"]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCrewMember, setActiveCrewMember] = useState(crew[activeIndex]);

  const { name, bio, images, role } = activeCrewMember;

  useEffect(() => {
    setActiveCrewMember(crew[activeIndex]);
  }, [activeIndex]);

  return (
    <div className="grid md:grid-cols-2 gap-4 md:gap-x-12 justify-center mx-auto md:mt-12 max-w-5xl">
      {/* IMAGE */}
      <div className="border-b border-slate-500 md:col-start-2 md:row-start-1 ">
        <img
          src={images["png"]}
          alt={name}
          className=" h-52 md:h-80 md:pl-0 md:mt-8 mx-auto"
        />
      </div>

      {/* INFO */}
      <div className=" md:col-start-1 md:row-start-1  flex flex-col gap-3 items-center md:items-start  my-2 lg:mr-16 text-slate-300 text-center md:text-left md:flex-col-reverse md:justify-between">
        <div>
          <ul className="flex gap-x-8">
            {crew.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`h-2 w-2  bg-slate-400 rounded-full cursor-pointer hover:scale-150 transition duration-200 ${
                    index === activeIndex ? "bg-blue-700 scale-150" : null
                  }`}
                  onClick={() => {
                    setActiveIndex(index);
                  }}
                ></li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col gap-y-4">
          <h3 className="text-lg uppercase tracking-wide">{role}</h3>
          <h3 className="text-2xl uppercase tracking-wider">{name}</h3>
          <p className="mx-2 md:mx-0 text-sm md:text-base leading-6 md:leading-7">
            {bio}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CrewMembers;
