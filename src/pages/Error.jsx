import { Link, useRouteError } from "react-router-dom";

import img from "../assets/space-error-img.gif";

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <div className=" h-screen  grid place-items-center">
        <img src={img} alt="error" className="w-full object-cover h-screen" />
        <button className="bg-slate-500 text-slate-100 px-3 py-1 rounded-md absolute top-10 mx-auto capitalize">
          <Link to="/">back home</Link>
        </button>
      </div>
    );

    return (
      <div className=" h-screen grid place-items-center">
        <h1 className="text-5xl">Sorry, there was an error...</h1>
        <button className="bg-slate-500 text-slate-100 px-3 py-1 rounded-md absolute top-10 mx-auto capitalize">
          <Link to="/">back home</Link>
        </button>
      </div>
    );
  }
};
export default Error;
