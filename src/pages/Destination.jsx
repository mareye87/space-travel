import { Destinations, PageTitle } from "../components";

const Destination = () => {
  return (
    <main className="destination-background-mobile md:destination-background px-3 md:pl-28 ">
      <PageTitle text="pick your destination" />
      <Destinations />
    </main>
  );
};

export default Destination;
