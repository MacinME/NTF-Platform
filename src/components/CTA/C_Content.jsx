import { useState } from "react";
import { GL_Black_Button } from "../global";
import { C_Arrow, C_H3, C_NTF_Card, C_P } from "./";
import NTF2 from "../../assets/desktop/NTF2.jpeg";

export const C_Content = () => {
  const [indexSlider, setIndexSlider] = useState(0);

  const onNext = () => setIndexSlider((n) => n + 1);
  const onPrev = () => setIndexSlider((n) => n - 1);

  return (
    <section className="min-w-full sm:w-[341px] flex flex-col py-10 px-6 gap-8 content-center md:py-16 md:pr-0 md:pl-10 md:flex-row rounded-3xl md:w-full md:h-[440px] xl:w-[1280px] xl:h-[530px] xl:py-16 xl:pl-16 xl:pr-0 bg-light-surface-purple">
      <div className="flex flex-col items-start gap-8 self-stretch md:w-[267px] md:h-[200px] md:self-center md:gap-10">
        <div className="md:flex md:flex-col md:gap-3" onClick={onNext}>
          <C_H3 />
          <C_P />
        </div>
        <div className="w-full md:w-[113px]">
          <GL_Black_Button content="Explore" />
        </div>
      </div>
      <div className="md:relative md:self-center md:w-[541px] md:h-[402px] xl:w-[917px]">
        <div className="scrollbar-none flex gap-3 overflow-x-auto overscroll-none md:overflow-hidden md:grow md:shrink-0 md:basis-0">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <C_NTF_Card key={`item${index}`} url={NTF2} index={indexSlider} />
          ))}
        </div>
        <button
          onClick={onNext}
          className="hidden md:absolute md:-left-5 md:bottom-44 md:z-10 md:block"
        >
          <C_Arrow direction="left" />
        </button>
        <button
          onClick={onPrev}
          className="hidden md:absolute md:right-8 md:bottom-[188px] md:z-10 xl:block"
        >
          <C_Arrow direction="right" />
        </button>
      </div>
    </section>
  );
};
