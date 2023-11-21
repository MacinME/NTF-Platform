import { TM_Card_Body, TM_Card_Footer, T_Profile } from "./";
import CA1 from "../../assets/mobile/CA1.png";

export const TM_Card = () => {
  return (
    <section className="flex flex-col items-start gap-6 p-4 rounded-xl border-[0.5px] border-light-surface-stroke bg-white w-[345px]">
      <T_Profile type="40 ETH" url={CA1} username="GoddesEirene" />
      <div className="flex flex-col items-center gap-4 w-full">
        <TM_Card_Body />
        <TM_Card_Footer floorChange="+41%" floorPrice={5} type="ETH" />
      </div>
    </section>
  );
};
