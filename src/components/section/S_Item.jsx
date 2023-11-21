import { S_H4, S_P } from "./";

export const S_Item = ({ collectedN, collectedT, artistsN, artistsT }) => {
  return (
    <div className="flex items-start self-stretch md:self-start md:gap-6">
      <div className="flex flex-col gap-1 grow items-start shrink-0 basis-0 md:w-[180px]">
        <S_H4 headerNumber={collectedN} />
        <S_P headerText={collectedT} />
      </div>
      <div className="flex flex-col gap-1 grow items-start shrink-0 basis-0 md:w-[180px]">
        <S_H4 headerNumber={artistsN} />
        <S_P headerText={artistsT} />
      </div>
    </div>
  );
};
