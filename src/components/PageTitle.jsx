import React from "react";

const PageTitle = ({ text }) => {
  return (
    <div className="pt-24 md:pt-32">
      <p className="text-center md:text-left  uppercase text-slate-200 text-lg md:text-xl tracking-wide mb-6  ">
        {text}
      </p>
    </div>
  );
};

export default PageTitle;
