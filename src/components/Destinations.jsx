import { useEffect, useState } from "react";
import data from "../data.json";

import DestinationsLinks from "./DestinationsLinks";
const Destinations = () => {
  const [destinations, setDestinations] = useState(data["destinations"]);

  const [index, setIndex] = useState(0);
  const [activeDestination, setActiveDestination] = useState(
    destinations[index]
  );

  useEffect(() => {
    setActiveDestination(destinations[index]);
  }, [index]);

  return (
    <div className="grid md:grid-cols-2 gap-4 md:gap-x-12 justify-center mx-auto max-w-4xl  ">
      {/* ---IMAGE--- */}
      <img
        src={activeDestination.images["png"]}
        alt={activeDestination.name}
        className="px-16 md:pl-0 md:mt-8 mx-auto"
      />
      {/* ---INFO--- */}
      <div className="flex flex-col items-center md:items-start mt-2 lg:mr-16 ">
        {/* links */}
        <DestinationsLinks
          destinations={destinations}
          setIndex={setIndex}
          activeIndex={index}
        />
        {/* info */}
        <div className="flex flex-col items-center md:items-start md:gap-y-6 mt-4 lg:mt-12 text-slate-200 ">
          <h1 className="text-5xl md:text-6xl lg:text-7xl uppercase">
            {activeDestination.name}
          </h1>
          <p className="text-sm md:text-md text-center md:text-left px-2 pb-3 mt-2 leading-6 border-b border-slate-600">
            {activeDestination.description}
          </p>
          <div className=" flex gap-x-8 uppercase tracking-wider text-center">
            <div>
              <p className="text-xs mt-2 ">Avg. distance</p>
              <h3 className="text-2xl font-semibold pb-3 ">
                {activeDestination.distance}
              </h3>
            </div>
            <div className="hidden sm:block">
              <p className="text-xs mt-2 ">Travel Time</p>
              <h3 className="text-2xl font-semibold pb-3 ">
                {activeDestination.travel}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
