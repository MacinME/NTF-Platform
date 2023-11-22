import { ArrowRight } from "../svg";

export const GL_White_Button = ({ content }) => {
  return (
    <button className="w-full flex items-center justify-center gap-2 text-sm not-italic font-normal leading-5 h-11 py-3 px-5 rounded-xl tracking-[-0.2px] bg-light-surface-secondary_button text-light-element-primary">
      {content}
      <ArrowRight currentColor="#252525" />
    </button>
  );
};
