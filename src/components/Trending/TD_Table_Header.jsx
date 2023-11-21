import { TD_Table_P } from ".";

export const TD_Table_Header = () => {
  return (
    <>
      <div className="hidden md:flex md:w-[60px] md:gap-2.5">
        <p className="md:flex md:justify-center md:items-center md:gap-2.5 md:shrink-0 md:w-[32px] md:text-xs font-normal leading-4 uppercase text-light-element-secondary">
          #
        </p>
      </div>
      <div className="flex items-start gap-2.5 grow basis-0 shrink-0">
        <TD_Table_P text="Collection" />
      </div>
      <div className="flex items-center w-[200px]">
        <div className="md:flex justify-center items-center gap-2.5 grow w-[100px]">
          <TD_Table_P text="floor price" />
        </div>
        <div className="md:flex justify-center items-center gap-2.5 w-[100px]">
          <TD_Table_P text="Floor change" />
        </div>
      </div>
    </>
  );
};
