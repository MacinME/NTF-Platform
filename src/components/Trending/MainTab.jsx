export const MainTab = () => {
  return (
    <div className="flex gap p-1 rounded-2xl bg-light-surface-soft w-full h-[44px]">
      <button className="flex py-2 px-3 justify-center items-center gap-2.5 bg-white rounded-xl text-sm not-italic font-medium leading-5 tracking-[-0.2px] text-light-element-primary grow-[2] shadow-sm">
        Trending
      </button>
      <button className="flex py-2 px-3 justify-center items-center gap-2.5 text-sm not-italic leading-5 tracking-[-0.2px] text-light-element-secondary grow">
        Top collections
      </button>
    </div>
  );
};
