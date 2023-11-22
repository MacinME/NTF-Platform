export const C_Picture = ({ url }) => {
  return (
    <div className="p-2 grow shrink-0 basis-0 self-stretch rounded-xl md:overflow-hidden">
      <img
        src={url}
        alt="NTF Card Image"
        className="rounded-xl w-full h-full md:object-cover"
      />
    </div>
  );
};
