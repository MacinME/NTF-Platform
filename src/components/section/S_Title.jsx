import { S_H3, S_Item } from "./";

export const S_Title = () => {
  return (
    <div className="flex flex-col items-start gap-6 grow md:gap-12 md:w-[490px] xl:w-[920px] xl:grow xl:shrink-0 xl:basis-0">
      <S_H3 headerTitle="NFT marketplace for curated crypto art." />
      <div className="w-full flex flex-col items-start gap-6 self-stretch xl:flex-row">
        <S_Item
          collectedN="40,000"
          collectedT="Artworks collected"
          artistsN="$520m"
          artistsT="Earned by Artists"
        />
        <S_Item
          collectedN="$14m"
          collectedT="In Artist Royalties"
          artistsN="$800m"
          artistsT="NFT Art Market Cap"
        />
      </div>
    </div>
  );
};
