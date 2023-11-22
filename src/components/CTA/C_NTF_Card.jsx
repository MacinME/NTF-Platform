import { C_Details, C_Picture } from "./";

export const C_NTF_Card = ({ url, index }) => {
  return (
    <div
      className="flex w-[270px] h-[384px] flex-col items-start shrink-0 transition-transform ease-in-out duration-500 rounded-2xl border-[0.7px] md:w-[325px] border-light-surface-stroke bg-white"
      style={{ transform: `translateX(-${index * 100}%)` }}
    >
      <C_Picture url={url} />

      <C_Details />
    </div>
  );
};
