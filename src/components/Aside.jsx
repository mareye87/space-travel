import closeIcon from "../assets/shared/icon-close.svg";
import AsideLinks from "./AsideLinks";
import MenuLinks from "./MenuLinks";

const Aside = ({ setOpenAside, openAside }) => {
  return (
    <div
      className={`absolute left-0 -top-4 md:-top-10 w-full z-[1] h-screen bg-slate-900 text-fuchsia-300 transition duration-300 ${
        openAside ? " translate-x-0" : "-translate-x-full"
      } `}
    >
      <div className="flex justify-end p-7">
        <div
          onClick={() => {
            setOpenAside(!openAside);
          }}
        >
          <img
            src={closeIcon}
            alt="closeAside"
            className="h6 w-6 hover:rotate-90 active:rotate-90 transition duration-300"
          />
        </div>
      </div>
      <AsideLinks openAside={openAside} setOpenAside={setOpenAside} />
    </div>
  );
};

export default Aside;
