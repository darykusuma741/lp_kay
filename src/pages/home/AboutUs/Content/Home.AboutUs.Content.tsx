import aboutUsItem1 from '../../../../assets/about-us-item-1.png';
import { motion } from 'framer-motion';

const HomeAboutUsContent: React.FC = () => {
  return (
    <div className="flex-col lg:flex-row flex justify-between lg:gap-31 gap-10 items-center">
      <motion.img
        whileHover={{
          scale: 1.09
        }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        initial={{ opacity: 0, x: -90, scale: 0.9 }}
        transition={{ duration: 0.5, type: 'tween' }}
        src={aboutUsItem1}
        className="w-100"
      />
      <motion.p
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 90 }}
        transition={{ duration: 0.6, type: 'tween' }}
        className="text-white lg:text-[.9rem] text-[.8rem] leading-loose"
      >
        Kay Digital Studio is a company engaged in information technology and interior development.
        We provide website development, mobile application development, and other digital solutions
        to support business growth in the modern era. In addition, Kay Digital Studio offers
        interior development services ranging from design to construction stages, focusing on
        aesthetics, functionality, and quality workmanship. In addition, Kay Digital Studio offers
        interior development services ranging from design to construction stages, focusing on
        aesthetics, functionality, and quality workmanship.
      </motion.p>
    </div>
  );
};

export default HomeAboutUsContent;
