import { ArrowRight } from "../svg/ArrowRight";
import { BorderBox } from "./BorderBox";
import { Button } from "./Button";
import { CheckBoxContainer } from "./CheckBoxContainer";

export const HomePage = () => {
  return (
    <div className="relative">
      <div className="grid gap-14 px-4 pt-[60px] md:grid-cols-2 md:grid-rows-2 md:gap-12 md:h-[440px] md:pt-0 md:px-10 md:relative md:w-full xl:px-20 xl:h-[550px] overflow-x-hidden">
        <div className="row-span-2 self-center flex gap-14 flex-col">
          <h1 className="font-semibold not-italic text-light-element-primary text-[40px] max-w-[322px] tracking-[-1.5px] leading-[44px] md:max-w-full md:self-end xl:text-[64px] xl:leading-[70px] xl:tracking-[-3px]">
            Discover digital art and Collect NFTs
          </h1>

          <div className="flex flex-col gap-4 md:col-start-1 md:flex-row md:h-11 md:justify-between md:w-[346px]">
            <Button
              bgColor="bg-light-element-primary_button"
              textColor="text-white"
            >
              Create your own
              <ArrowRight currentColor="white" />
            </Button>
            <Button
              bgColor="bg-light-surface-secondary_button"
              textColor="text-light-element-primary"
            >
              Start exploring
              <ArrowRight currentColor="#252525" />
            </Button>
          </div>
        </div>

        {/* CheckBox Container */}
        <CheckBoxContainer />

        {/* Border */}
        <BorderBox right="xl:right-[550px]" other="xl:bottom-40" />
        <BorderBox right="xl:-right-12" other="xl:top-28" />
        {/* Background */}
        <div className="background-2 hidden rounded-[300px] absolute md:block md:w-[574px] md:h-[574px] md:-top-[300px] md:-right-[350px] xl:-top-[190px] xl:-right-[100px] z-10"></div>
      </div>
      <div className="background-1 hidden rounded-[300px] absolute md:block md:w-[332px] md:h-[332px] md:top-[200px] md:-left-[100px] xl:w-[496px] xl:h-[496px] xl:top-[132px] xl:-left-[120px] z-10"></div>
    </div>
  );
};
