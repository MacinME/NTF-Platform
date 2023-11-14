import { ImageItem } from "./ImageItem";

export const Slide = () => {
  return (
    <section className="flex gap-3 justify-center py-0 md:px-20 mt-[60px]">
      <ImageItem
        url="bg-[url('./assets/desktop/BP1.jpeg')]"
        title="Summer Grandma"
        text="floor : 0.03 ETH"
      />
      <ImageItem
        url="bg-[url('./assets/desktop/BP3.jpeg')]"
        title="Pixelvibe"
        text="floor : 0.03 ETH"
      />
      <ImageItem
        url="bg-[url('./assets/desktop/BP2.jpeg')]"
        title="Mother Miranda"
        text="floor : 0.03 ETH"
      />
      <ImageItem
        url="bg-[url('./assets/desktop/BP4.jpeg')]"
        title="Liquidman"
        text="floor : 0.03 ETH"
      />
    </section>
  );
};
