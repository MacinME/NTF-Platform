import { Banner } from "./components/Banner";
import { Slide } from "./components/Slide/Slide";

const App = () => {
  return (
    <div className="max-w-[1440px] mx-auto max-xl:overflow-x-hidden">
      {/* Banner */}
      <Banner />

      {/* Slides */}
      <Slide />
    </div>
  );
};

export default App;
