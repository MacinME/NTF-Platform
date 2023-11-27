import { B_Content } from "./components/Banner";
import { C_Content } from "./components/CTA";
import {
  TD_Table_Content,
  TM_Card,
  T_Tabs_Content,
} from "./components/Trending";
import { S_Content } from "./components/section";

const App = () => {
  return (
    <div className="w-screen h-full flex justify-center pt-10">
      <div className="max-w-[1440px] mx-auto max-xl:overflow-hidden bg-white rounded-2xl grid place-content-center md:place-content-stretch">
        {/* <S_Content /> */}
        {/* <B_Content /> */}
        {/* <T_Tabs_Content /> */}
        {/* <TM_Card /> */}
        {/* <TD_Table_Content /> */}
        <h1 className="font-semibold text-2xl">Reat Project - NTFS</h1>
        <hr />
        {/* <B_Content />  */}
        <C_Content />
      </div>
    </div>
  );
};

export default App;
