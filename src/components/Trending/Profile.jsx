import { Verify } from "../svg/Verify";

export const Profile = ({ url, username, type }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex justify-center items-center rounded-xl w-[48px] h-[48px]">
        <img src={url} alt="Avatar" className="rounded-xl" />
      </div>
      <div className="flex flex-col items-start gap-1">
        <p className="flex gap-2 items-center text-base font-semibold leading-6 tracking-[-0.2px] text-light-element-primary">
          {username}
          <span className="md:hidden">
            <Verify />
          </span>
        </p>
        <p className="text-sm font-normal leading-5 tracking-[-0.2px text-light-element-secondary md:hidden">
          {type}
        </p>
      </div>
    </div>
  );
};
