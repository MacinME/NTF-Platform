import { CardBody, CardFooter, Profile } from "./";
import CA1 from "../../assets/mobile/CA1.png";

export const Card = () => {
  return (
    <section className="flex flex-col items-start gap-6 p-4 rounded-xl border-[0.5px] border-light-surface-stroke bg-white w-[345px]">
      <Profile type="40 ETH" url={CA1} username="GoddesEirene" />
      <div className="flex flex-col items-center gap-4 w-full">
        <CardBody />
        <CardFooter floorChange={41} floorPrice={5} type="ETH" />
      </div>
    </section>
  );
};
