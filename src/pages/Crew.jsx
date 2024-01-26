import React from "react";
import { CrewMembers, PageTitle } from "../components";

const Crew = () => {
  return (
    <section className="crew-background-mobile md:crew-background px-3 md:pl-28">
      <PageTitle text="meet your crew" />
      <CrewMembers />
    </section>
  );
};

export default Crew;
