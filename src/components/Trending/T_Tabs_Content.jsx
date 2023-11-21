import { Ethereum, Immutable, Polygon, Tezos } from "../svg";
import { T_Main_Tab, T_Tabs_Item } from ".";

export const T_Tabs_Content = () => {
  return (
    <div className="flex flex-col w-[375px] py-[60px] px-4 gap-4 mt-10 md:flex-row md:w-full md:justify-between md:items-start md:content-start xl:pt-0 bg-white">
      {/* Main Tab */}
      <T_Main_Tab />
      <div className="gap-4 flex flex-col md:flex md:flex-row">
        {/* Second Tab */}
        <T_Tabs_Item content1="1H" content2="1D" content3="7D" content4="30D" />
        {/* Third Tab */}
        <T_Tabs_Item
          content1={<Ethereum />}
          content2={<Polygon />}
          content3={<Tezos />}
          content4={<Immutable />}
        />
      </div>
    </div>
  );
};
