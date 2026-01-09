import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';

interface HomeAboutUsFactItemsProps {
  title: string;
  subtitle: string;
  subtitle2: string;
  value: number;
}

const HomeAboutUsFactItems: React.FC<HomeAboutUsFactItemsProps> = ({
  title,
  subtitle,
  subtitle2,
  value
}) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  // target elemen buat deteksi in-view
  const ref = useRef<HTMLDivElement | null>(null);

  // true kalau elemen terlihat di layar
  const isInView = useInView(ref, {
    once: true, // animasi hanya sekali
    margin: '-150px' // mulai sedikit sebelum benar-benar ketemu
  });

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, value, {
      duration: 3,
      ease: 'easeInOut'
    });

    return () => controls.stop();
  }, [isInView, value, count]);

  return (
    <div ref={ref} className="flex flex-col text-white font-ibm text-center">
      <motion.pre className="text-[2.25rem] mb-1.5">
        <motion.span>{rounded}</motion.span>
        {title}
      </motion.pre>
      <label className="text-stone mb-[0.3rem]">{subtitle}</label>
      <label className="text-[0.8rem] text-stone font-thin">{subtitle2}</label>
    </div>
  );
};

export default HomeAboutUsFactItems;
