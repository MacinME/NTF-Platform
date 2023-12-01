import { C_Content } from "./components/categories/";

const App = () => {
  return (
    <div className="w-screen h-full flex justify-center pt-10">
      <div className="max-w-[1440px] mx-auto max-xl:overflow-hidden bg-white rounded-2xl grid place-content-center md:place-content-stretch overflow-hidden">
        <h1 className="font-semibold text-2xl">Reat Project - NTFS</h1>
        <hr />
        <C_Content />
      </div>
    </div>
  );
};

export default App;
