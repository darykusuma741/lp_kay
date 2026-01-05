const HomeHeader: React.FC = () => {
  return (
    <div className="shrink-0 w-screen h-screen snap-start bg-linear-to-bl from-sky-800 to-black flex items-center justify-center overflow-hidden relative">
      <p
        className="
        absolute
      select-none
      pointer-events-none
      text-[2.5rem]
      font-light
      tracking-tight
      bg-linear-to-r from-sky-50/4 to-sky-50/70
      bg-clip-text
      text-transparent
      sm:text-[5rem]
    "
      >
        <span className="font-extrabold">DEPOK </span>
        is the Best
      </p>
    </div>
  );
};

export default HomeHeader;
