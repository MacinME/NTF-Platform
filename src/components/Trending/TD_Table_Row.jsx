import { TM_Card_Footer, T_Profile } from ".";

export const TD_Table_Row = ({
  id,
  username,
  url_min_size,
  type,
  foor_Price,
  floor_change,
}) => {
  return (
    <div className="md:grid md:grid-cols-[60px_minmax(100px,_1fr)_200px] md:items-center md:col-span-3 h-[72px]">
      <div className="md:flex md:w-[60px] md:items-start md:gap-2.5">
        <p className="md:text-xs md:font-semibold md:leading-5 md:tracking-[-0.2px] md:text-light-element-secondary md:flex md:justify-center md:items-center md:gap-2.5 md:w-[32px] h-[32px] md:flex-col p-2.5 shrink-0 bg-light-surface-soft rounded-2xl">
          {id}
        </p>
      </div>
      <T_Profile url={url_min_size} username={username} />
      <TM_Card_Footer
        floorChange={floor_change}
        floorPrice={foor_Price}
        type={type}
      />
    </div>
  );
};
