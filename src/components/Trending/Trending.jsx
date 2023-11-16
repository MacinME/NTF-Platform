import { Ethereum, Immutable, Polygon, Tezos } from "../svg";
import { MainTab } from "./MainTab";
import { Tabs } from "./Tabs";

export const Trending = () => {
  return (
    <div className="flex flex-col w-[375px] pt-[60px] px-4 gap-4 border-2 border-gray-600 mt-10">
      {/* Main Tab */}
      <MainTab />
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
  );
};
