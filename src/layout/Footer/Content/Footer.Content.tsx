const FooterContent: React.FC = () => {
  return (
    <div className="flex flex-row justify-between">
      <div className="sm:w-60 w-full">
        <h1 className="sm:text-[1.8rem] text-[1.5rem] font-ibm">Your Vision, Our Creation.</h1>
      </div>
      <div>
        <button className="sm:block hidden border border-midnight rounded-full text-white hover:text-black bg-midnight hover:bg-white hover:cursor-pointer transition-colors py-2.5 px-6 text-[.8rem]">
          Contact us
        </button>
      </div>
    </div>
  );
};

export default FooterContent;
