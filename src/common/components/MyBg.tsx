import { motion } from 'framer-motion';
import bg from '../../assets/bg.svg';

interface MyBgProps {
  className?: string;
  children?: React.ReactNode;
}

const MyBg: React.FC<MyBgProps> = ({ className, children }) => {
  return (
    <motion.div
      className={className}
      style={{ backgroundImage: `url(${bg})` }}
      animate={{
        backgroundColor: [
          'rgba(6, 6, 10, 0)', // transparan
          'rgba(6, 6, 10, 1)', // full color
          'rgba(6, 6, 10, 0)'
        ]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    >
      {children}
    </motion.div>
  );
};

export default MyBg;
