import ProfilePicture from "../../assets/mobile/CA1.png";
import { Verify } from "../svg";

export const Profile = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex justify-center items-center rounded-xl w-[48px] h-[48px]">
        <img src={ProfilePicture} alt="Avatar" />
      </div>
      <div className="flex flex-col items-start gap-1">
        <p className="flex gap-2 items-center text-base font-semibold leading-6 tracking-[-0.2px] text-light-element-primary">
          Extraordinary Ape
          <span>
            <Verify />
          </span>
        </p>
        <p className="text-sm font-normal leading-5 tracking-[-0.2px text-light-element-secondary">
          40 ETH
        </p>
      </div>
    </div>
  );
};
