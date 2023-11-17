export const HeaderTable = () => {
  return (
    <>
      <div className="hidden md:flex md:w-[60px] md:gap-2.5">
        <p className="md:flex md:justify-center md:items-center md:gap-2.5 md:shrink-0 md:w-[32px] md:text-xs font-normal leading-4 uppercase text-light-element-secondary">
          #
        </p>
      </div>
      <div className="flex items-start gap-2.5 grow basis-0 shrink-0">
        <p className="text-xs font-normal leading-4 uppercase text-light-element-secondary">
          Collection
        </p>
      </div>
      <div className="flex items-center w-[200px]">
        <div className="md:flex justify-center items-center gap-2.5 grow w-[100px]">
          <p className="text-xs font-normal leading-4 uppercase text-light-element-secondary">
            floor price
          </p>
        </div>
        <div className="md:flex justify-center items-center gap-2.5 w-[100px]">
          <p className="text-xs font-normal leading-4 uppercase text-light-element-secondary">
            Floor change
          </p>
        </div>
      </div>
    </>
  );
};
