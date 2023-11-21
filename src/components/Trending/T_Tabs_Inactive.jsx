export const T_Tabs_Inactive = ({ tabText }) => {
  return (
    <button className="flex py-2 px-3 justify-center items-center gap-2.5 rounded-xl text-sm font-normal leading-5 tracking-[-0.2px] grow text-light-element-secondary h-[36px]">
      {tabText}
    </button>
  );
};
