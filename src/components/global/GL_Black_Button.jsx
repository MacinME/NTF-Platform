import { ArrowRight } from "../svg";

export const GL_Black_Button = ({ content }) => {
  return (
    <button className="w-full flex items-center justify-center gap-2 text-sm not-italic font-normal leading-5 h-11 py-3 px-5 rounded-xl tracking-[-0.2px] bg-light-element-primary_button text-white">
      {content}
      <ArrowRight currentColor="white" />
    </button>
  );
};
