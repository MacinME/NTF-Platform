export const CardFooter = () => {
  return (
    <div className="flex justify-center items-center bg-light-surface-soft rounded-[10px] h-[41px] w-full">
      <p className="flex justify-center items-center gap-2 grow font-medium not-italic leading-6 text-base tracking-[-0.2px] shrink-0 basis-0">
        4.6
        <span className="text-xs font-normal leading-4 text-light-element-secondary">
          ETH
        </span>
      </p>
      <div className="w-[1px] h-full border border-light-surface-stroke grow-0"></div>
      <p className="flex justify-center items-center gap-2 grow text-base font-medium leading-6 tracking-[-0.2px] text-light-element-green shrink-0 basis-0">
        -2%
      </p>
    </div>
  );
};
