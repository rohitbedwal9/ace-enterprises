export const PageHead = (props) => {
  return (
    <div className="header w-full px-10 gap-2 h-52  flex flex-col items-center justify-center">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black w-max">
        {props.heading}
      </h1>
      <h3 className=" md:text-xl">{props.subheading}</h3>
      <div className="w-20 pt-2 border-b-4 border-yellow-300"></div>
    </div>
  );
};
