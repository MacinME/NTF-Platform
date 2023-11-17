import { Table } from "./components/Trending";

const App = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center px-5">
      <div className="w-[1440px] mx-auto max-xl:overflow-x-hidden">
        <Table />
      </div>
    </div>
  );
};

export default App;
