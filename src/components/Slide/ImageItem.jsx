export const ImageItem = ({ url, title, text }) => {
  return (
    <div
      className={`${url} bg-no-repeat bg-cover bg-top p-4 rounded-2xl flex flex-col justify-end items-start gap-1 min-w-[311px] min-h-[320px] xl:min-w-[311px] xl:min-h-[320px] md:min-w-[191px] md:min-h-[204px]`}
    >
      <h3 className="text-base font-semibold not-italic leading-6 text-white tracking-[-0.2px]">
        {title}
      </h3>
      <p className="text-sm not-italic font-normal leading-4 uppercase text-white">
        {text}
      </p>
    </div>
  );
};
