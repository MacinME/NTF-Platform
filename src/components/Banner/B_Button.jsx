export const B_Button = (props) => {
  const { bgColor, textColor, children } = props;
  return (
    <button
      className={`flex items-center justify-center gap-2 text-sm not-italic font-normal leading-5 h-11 py-3 px-5 rounded-xl tracking-[-0.2px] ${bgColor} ${textColor}`}
    >
      {children}
    </button>
  );
};
