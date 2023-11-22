import { ArrowRight, ArrowLeft } from "../svg";

export const C_Arrow = ({ direction }) => {
  return (
    <div className="inline-flex p-2.5 gap-2.5 rounded-3xl bg-white">
      {direction === "left" ? (
        <ArrowLeft />
      ) : (
        <ArrowRight currentColor="#252525" />
      )}
    </div>
  );
};
