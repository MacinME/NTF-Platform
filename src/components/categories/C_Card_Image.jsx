import { ArrowUpRight } from "../svg";

export const C_Card_Image = ({ url }) => {
  return (
    <div
      className={`${url} bg-no-repeat bg-cover bg-center flex w-[279px] h-[200px] p-6 flex-col justify-between rounded-3xl border border-light-surface-stroke items-end`}
    >
      <div className="p-2.5 rounded-[23px] bg-white">
        <ArrowUpRight />
      </div>
      <p className="text-lg font-medium leading-6 tracking-[-0.2px] text-white self-start">
        Art
      </p>
    </div>
  );
};
