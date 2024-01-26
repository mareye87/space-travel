import { Link } from "react-router-dom";

const AsideLinks = ({ setOpenAside, openAside }) => {
  const links = [
    { text: "home", url: "/" },
    { text: "destination", url: "/destination" },
    { text: "crew", url: "/crew" },
    { text: "technology", url: "/technology" },
  ];

  return (
    <ul className="flex flex-col  gap-6 pl-3 text-slate-100  ">
      {links.map((link) => {
        const { text, url } = link;
        return (
          <li key={url}>
            <Link
              to={url}
              className="mx-2  uppercase  transition-all duration-200 hover:pl-4 active:pl-4 "
              onClick={() => {
                setOpenAside(!openAside);
              }}
            >
              {text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default AsideLinks;
