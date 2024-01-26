import React from "react";
import { NavLink } from "react-router-dom";

const DestinationsLinks = ({ destinations, setIndex, activeIndex }) => {
  return (
    <ul className="flex gap-3">
      {destinations.map((destination, index) => {
        return (
          <li
            key={index}
            className={`cursor-pointer text-slate-200 uppercase pb-2 ${
              index === activeIndex && "border-b-2 border-red-800 "
            }`}
            onClick={() => {
              setIndex(index);
              console.log("set index");
            }}
          >
            {destination.name}
          </li>
        );
      })}
    </ul>
  );
};

export default DestinationsLinks;
