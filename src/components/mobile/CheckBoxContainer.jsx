import Hero1 from "../../assets/mobile/HI1.png";
import Hero2 from "../../assets/mobile/HI2.png";
import Hero3 from "../../assets/mobile/HI3.png";
import Hero4 from "../../assets/mobile/HI4.png";
import { CheckBoxItem } from "./CheckBoxItem";

export const CheckBoxContainer = () => {
  return (
    <section className="flex justify-center gap-2 md:self-center md:absolute md:-right-[75px] xl:right-[180px]">
      <div className="mt-[26px] flex flex-col gap-2">
        <CheckBoxItem url={Hero1} />
        <CheckBoxItem url={Hero4} />
      </div>
      <div className="flex flex-col gap-1">
        <CheckBoxItem url={Hero2} />
        <CheckBoxItem url={Hero3} />
      </div>
    </section>
  );
};
