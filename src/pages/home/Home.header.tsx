const HomeHeader: React.FC = () => {
  return (
    <div className="shrink-0 w-screen h-screen snap-start bg-linear-to-bl from-sky-400 to-blue-950 flex items-center justify-center overflow-hidden relative">
      <p
        className="
        absolute

      select-none
      pointer-events-none
      text-[5rem]
      font-light
      uppercase
      tracking-tight
      bg-linear-to-r from-white/60 to-white/4
      bg-clip-text
      text-transparent
      sm:text-[10rem]
    "
      >
        <span className="font-extrabold">KAY</span>
        CORE
      </p>
      <div className="absolute top-6 left-6">
        <p className="text-[1rem] font-extralight tracking-wide text-white">
          <span className="font-extrabold">KAY</span> Digital Studio ©
        </p>
      </div>
    </div>
    // <div className="shrink-0 w-screen h-screen snap-start bg-linear-to-bl from-sky-500 to-black flex items-center justify-center relative">
    //   <div className="absolute top-6 left-6 text-white">
    //     <h1 className="text-[1rem] font-extralight tracking-wide">
    //       <span className="font-bold">KAY</span> Digital Studio
    //     </h1>
    //   </div>
    // </div>
  );
};

export default HomeHeader;
