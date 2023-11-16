export const Tabs = ({ content1, content2, content3, content4 }) => {
  return (
    <div className="flex p-1 items-start gap-px bg-light-surface-soft w-full rounded-2xl h-[44px]">
      <button className="flex py-2 px-3 justify-center items-center gap-2.5 rounded-xl text-sm font-medium leading-5 tracking-[-0.2px] bg-white shadow-sm grow text-light-element-primary">
        {content1}
      </button>
      <button className="flex py-2 px-3 justify-center items-center gap-2.5 rounded-xl text-sm font-normal leading-5 tracking-[-0.2px] grow text-light-element-secondary">
        {content2}
      </button>
      <button className="flex py-2 px-3 justify-center items-center gap-2.5 rounded-xl text-sm font-normal leading-5 tracking-[-0.2px] grow text-light-element-secondary">
        {content3}
      </button>
      <button className="flex py-2 px-3 justify-center items-center gap-2.5 rounded-xl text-sm font-normal leading-5 tracking-[-0.2px] grow text-light-element-secondary">
        {content4}
      </button>
    </div>
  );
};
