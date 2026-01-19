import MyPerson from '../../../../common/components/MyPerson';

const HomeHeroContent: React.FC = () => {
  return (
    <div className="sm:mt-35 mt-10 sm:mb-35 mb-0 hero-container-content w-screen flex justify-center items-center m2:px-37.5 md:px-20 px-10 gap-20">
      <div className="flex flex-col gap-6 sm:w-140 w-full hero-container-content-1">
        <h1 className="text-white font-ibm font-normal sm:text-[4rem] text-[2rem]">
          Founder of{' '}
          <span className="font-extrabold">
            <span className="bg-linear-to-r from-cyan-500 to-purple-700 bg-clip-text text-transparent">
              KAY{' '}
            </span>
            Digital Studio
          </span>
        </h1>
        <p className="text-stone text-[1rem] italic hero-content leading-loose">
          “Kay Digital Studio was born from a belief that every idea, no matter how small, can grow
          into something meaningful when combined with creativity and dedication. Our mission is not
          only to build digital products and interior spaces, but also to help our clients turn
          their visions into reality.”
        </p>
        <div>
          <button className="btn-search flex items-center group text-[0.9rem] text-stone transition-colors hover:text-midnight gap-5 btn-gradient cursor-pointer font-normal px-5 py-2 rounded-full">
            Try Home Interiors, Software etc.
            <div className="px-4 py-[0.2rem] bg-white transition-colors group-hover:bg-midnight group-hover:text-white rounded-full text-midnight">
              Find Product
            </div>
          </button>
        </div>
      </div>
      <MyPerson className="xl:block sm:hidden block items-center md:order-2 order-1" />
      {/* <div className="lg:block sm:hidden block w-90 items-center hero-container-photo">
        <img src={photo} />
      </div> */}
    </div>
  );
};

export default HomeHeroContent;
