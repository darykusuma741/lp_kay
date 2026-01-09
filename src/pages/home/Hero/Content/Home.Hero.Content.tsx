import { motion, useScroll, useTransform } from 'framer-motion';
import photo from '../../../../assets/photo.png';

const HomeHeroContent: React.FC = () => {
  // ambil scroll position
  const { scrollY } = useScroll();

  // transform scroll ke translateY untuk parallax
  const y = useTransform(scrollY, [0, 700], [0, -100], { clamp: true });

  return (
    <motion.div
      style={{ y }}
      className="mt-25 sm:mb-35 mb-10 hero-container-content w-screen flex justify-center items-center m2:px-37.5 md:px-20 px-10 gap-20"
    >
      <div className="flex flex-col gap-6 sm:w-140 w-full hero-container-content-1">
        <h1 className="text-white font-ibm font-normal text-[4rem] hero-content-title">
          Founder of <span className="font-extrabold">KAY Digital Studio</span>
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
      <div className="lg:block sm:hidden block  w-90 items-center hero-container-photo">
        <img src={photo} />
      </div>
    </motion.div>
  );
};

export default HomeHeroContent;
