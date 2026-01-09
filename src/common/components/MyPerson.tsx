import { motion, useScroll, useTransform } from 'framer-motion';
import person from '../../assets/person.png';

interface MyPersonProps {
  className?: string;
}

const MyPerson: React.FC<MyPersonProps> = ({ className }) => {
  // ambil scroll position
  const { scrollY } = useScroll();

  // transform scroll ke translateY untuk parallax
  const y = useTransform(scrollY, [0, 700], [0, 100], { clamp: true });

  return (
    <div className={`relative group ${className}`}>
      <div className="absolute sm:w-90 w-50 sm:h-90 h-50 liner-gradient bg-blue-500/80 rounded-full bottom-0"></div>
      <div className="relative sm:w-90 w-50 sm:h-105 h-60 rounded-full overflow-hidden border border-transparent">
        <motion.img
          src={person}
          style={{ y }}
          className="scale-90 absolute bottom-0 rounded-full transition-transform duration-300 -translate-x-2 translate-y-20"
        />
      </div>
    </div>
  );
};

export default MyPerson;
