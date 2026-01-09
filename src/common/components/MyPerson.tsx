import { motion } from 'framer-motion';
import person from '../../assets/person.png';

interface MyPersonProps {
  className?: string;
}

const MyPerson: React.FC<MyPersonProps> = ({ className }) => {
  return (
    <div className={`relative group ${className}`}>
      <div className="absolute sm:w-90 w-50 sm:h-90 h-50 liner-gradient rounded-full bottom-0"></div>
      <div className="relative sm:w-90 w-50 sm:h-105 h-60 rounded-full overflow-hidden border-2 border-transparent">
        <motion.img
          src={person}
          whileInView={{ y: 0 }}
          initial={{ y: 40 }}
          transition={{
            type: 'tween', // pakai tween untuk linear
            duration: 0.05, // lama animasi
            ease: 'anticipate' // kecepatannya sama sepanjang jalan
          }}
          className="scale-90 absolute bottom-0 rounded-full transition-transform duration-300 -translate-x-2 sm:translate-y-20 translate-y-9"
        />
      </div>
    </div>
  );
};

export default MyPerson;
