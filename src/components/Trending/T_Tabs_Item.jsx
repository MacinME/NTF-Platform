import { T_Tabs_Inactive } from ".";

export const T_Tabs_Item = ({ content1, content2, content3, content4 }) => {
  return (
    <div className="flex p-1 items-start gap-px w-full rounded-2xl h-[44px] bg-light-surface-soft">
      <button className="flex py-2 px-3 justify-center items-center gap-2.5 rounded-xl text-sm font-medium leading-5 tracking-[-0.2px] shadow-sm grow h-[36px] bg-white text-light-element-primary">
        {content1}
      </button>
      <T_Tabs_Inactive tabText={content2} />
      <T_Tabs_Inactive tabText={content3} />
      <T_Tabs_Inactive tabText={content4} />
    </div>
  );
};
