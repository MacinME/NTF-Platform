import { S_Title } from ".";
import { B_Images_Item } from "../banner";
import Hero1 from "../../assets/mobile/SP1.png";
import Hero2 from "../../assets/mobile/SP2.png";
import Hero3 from "../../assets/mobile/SP3.png";
import Hero4 from "../../assets/mobile/SP4.png";

export const S_Content = () => {
  return (
    <section className="max-w-[375px] flex py-10 px-4 items-center content-center flex-col gap-10 grow flex-wrap md:flex-row md:max-w-full md:h-[320px] md:overflow-hidden md:px-10 bg-light-surface-blue xl:p-20 xl:gap-2.5">
      <S_Title />
      <div className="max-w-full max-h-[388px] flex gap-2.5 sm:min-w-[350px]">
        <div className="flex flex-col gap-1 mt-[11px] xl:gap-2.5 ">
          <div className="max-w-[170px] max-h-[197px] rounded-2xl">
            <B_Images_Item url={Hero1} />
          </div>
          <div className="max-w-[170px] max-h-[170px] rounded-2xl">
            <B_Images_Item url={Hero3} />
          </div>
        </div>
        <div className="flex flex-col gap-1 xl:gap-2 max-w-full">
          <div className="max-w-[170px] max-h-[170px] rounded-2xl">
            <B_Images_Item url={Hero2} />
          </div>
          <div className="max-w-[170px] max-h-[208px] rounded-2xl">
            <B_Images_Item url={Hero4} />
          </div>
        </div>
      </div>
    </section>
  );
};
