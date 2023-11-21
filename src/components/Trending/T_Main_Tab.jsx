export const T_Main_Tab = () => {
  return (
    <div className="flex gap p-1 rounded-2xl w-full h-[44px] md:w-[212px] bg-light-surface-soft">
      <button className="flex py-2 px-3 justify-center items-center gap-2.5 rounded-xl text-sm not-italic font-medium leading-5 tracking-[-0.2px] grow-[2] shadow-sm bg-white text-light-element-primary">
        Trending
      </button>
      <button className="flex py-2 px-3 justify-center items-center gap-2.5 text-sm not-italic leading-5 tracking-[-0.2px] grow text-light-element-secondary">
        Top collections
      </button>
    </div>
  );
};
