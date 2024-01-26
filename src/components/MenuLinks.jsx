import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const MenuLinks = () => {
  const links = [
    { text: "home", url: "/" },
    { text: "destination", url: "/destination" },
    { text: "crew", url: "/crew" },
    { text: "technology", url: "/technology" },
  ];

  return (
    <div className="hidden md:block w-3/4 lg:w-1/2 text-sm tracking-wider">
      <ul className="flex justify-center gap-4 text-slate-100 bg-[rgba(126,166,222,0.3)] py-7 backdrop-blur-sm transition-all duration-300  ">
        {links.map((link) => {
          const { text, url } = link;
          return (
            <li key={url}>
              <NavLink
                to={url}
                className="mx-2 py-7 uppercase transition-all duration-150   "
                style={({ isActive }) => ({
                  borderBottom: isActive ? "2px solid lightgray " : "",
                })}
              >
                {text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MenuLinks;
