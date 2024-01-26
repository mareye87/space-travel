import { Navbar } from "../components";

const Home = () => {
  return (
    <section className=" home-background-mobile md:home-background grid md:grid-cols-2 md:items-end md:pb-12 md:pl-24">
      {/* text */}
      <div className="px-6 pt-32">
        <div className="md:mb-12">
          <p className="text-center md:text-left uppercase text-slate-200 text-lg tracking-wide ">
            so, you want to travel to
          </p>
          <h1 className="text-7xl md:text-8xl text-center md:text-left uppercase font-semibold mt-6 text-slate-200 tracking-wider">
            space
          </h1>
          <p className="text-slate-200 text-center md:text-left mt-6 leading-7  ">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience! Explore
          </p>
        </div>
      </div>
      {/* image */}
      <div className=" w-36 h-36 md:w-52 md:h-52 grid place-items-center my-4 md:mb-12 rounded-full bg-slate-50 mx-auto hover:scale-125 shadow-2xl transition-all duration-1000">
        <h1 className="text-2xl md:text-3xl uppercase font-semibold ">
          explore
        </h1>
      </div>
    </section>
  );
};

export default Home;
