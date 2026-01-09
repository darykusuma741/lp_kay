import { motion } from 'framer-motion';

interface HomeFeaturesItemsProps {
  src: string;
  title: string;
  content: string;
}

const HomeFeaturesItems: React.FC<HomeFeaturesItemsProps> = ({ src, title, content }) => {
  return (
    <motion.div
      className="flex flex-col gap-4"
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      initial={{ opacity: 0, y: -120, scale: 1.3 }}
      transition={{ duration: 0.8, type: 'tween' }}
    >
      <div className="mb-4">
        <img src={src} className="h-8" alt="" />
      </div>
      <div className="font-ibm font-bold text-[1.125rem]">{title}</div>
      <p className="text-[1rem] font-Inter font-light">{content}</p>
    </motion.div>
  );
};

export default HomeFeaturesItems;
