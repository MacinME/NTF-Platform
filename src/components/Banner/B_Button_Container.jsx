import { GL_Black_Button, GL_White_Button } from "../global";

export const B_Button_Container = () => {
  return (
    <div className="flex flex-col gap-4 md:col-start-1 md:flex-row md:h-11 md:justify-between md:w-[346px]">
      <div className="md:w-[171px]">
        <GL_Black_Button content="Create your own" />
      </div>
      <div className="md:w-[159px]">
        <GL_White_Button content="Start exploring" />
      </div>
    </div>
  );
};
