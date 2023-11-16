import { CardBody, CardFooter, Profile } from "./";

export const Card = () => {
  return (
    <section className="flex flex-col items-start gap-6 p-4 rounded-xl border-[0.5px] border-light-surface-stroke bg-white w-[345px]">
      {/* Profile */}
      <Profile />
      <div className="flex flex-col items-center gap-4 w-full">
        {/* Card Body */}
        <CardBody />
        {/* Card Footer */}
        <CardFooter />
      </div>
    </section>
  );
};
