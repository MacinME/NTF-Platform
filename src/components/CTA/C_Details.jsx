import { Verify } from "../svg";

export const C_Details = () => {
  return (
    <div className="flex flex-col pt-1 px-4 pb-3 gap-3">
      <p className="flex items-center gap-1 text-xs font-normal leading-4 text-light-element-secondary">
        <Verify />
        Winter Madagascar
      </p>
      <h4 className="text-base font-medium leading-6 tracking-[-0.2px] text-light-element-primary">
        Clown Ape
      </h4>
      <p className="text-sm font-normal leading-5 tracking-[-0.2px] text-light-element-primary">
        0.002 ETH
      </p>
    </div>
  );
};
