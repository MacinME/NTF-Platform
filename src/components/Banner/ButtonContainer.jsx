import { ArrowRight } from "../svg";
import { Button } from "./";

export const ButtonContainer = () => {
  return (
    <div className="flex flex-col gap-4 md:col-start-1 md:flex-row md:h-11 md:justify-between md:w-[346px]">
      <Button bgColor="bg-light-element-primary_button" textColor="text-white">
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
  );
};
