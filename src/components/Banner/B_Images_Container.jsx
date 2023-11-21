import { B_Images_Item } from "./";
import Hero1 from "../../assets/mobile/HI1.png";
import Hero2 from "../../assets/mobile/HI2.png";
import Hero3 from "../../assets/mobile/HI3.png";
import Hero4 from "../../assets/mobile/HI4.png";

export const B_Images_Container = () => {
  return (
    <section className="flex justify-center gap-1 md:self-center md:absolute md:-right-[75px] xl:right-[180px] xl:gap-2">
      <div className="flex flex-col gap-1 mt-[26px] xl:gap-2">
        <B_Images_Item url={Hero1} />
        <B_Images_Item url={Hero4} />
      </div>
      <div className="flex flex-col gap-1 xl:gap-2">
        <B_Images_Item url={Hero2} />
        <B_Images_Item url={Hero3} />
      </div>
    </section>
  );
};
