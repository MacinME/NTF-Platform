import { Ethereum, Immutable, Polygon, Tezos } from "../svg";
import { MainTab, Tabs } from "./";

export const Trending = () => {
  return (
    <div className="flex flex-col w-[375px] pt-[60px] px-4 gap-4 mt-10 md:flex-row md:w-full md:justify-between md:items-start md:content-start">
      {/* Main Tab */}
      <MainTab />
      <div className="gap-4 flex flex-col md:flex md:flex-row">
        {/* Second Tab */}
        <Tabs content1="1H" content2="1D" content3="7D" content4="30D" />
        {/* Third Tab */}
        <Tabs
          content1={<Ethereum />}
          content2={<Polygon />}
          content3={<Tezos />}
          content4={<Immutable />}
        />
      </div>
    </div>
  );
};
