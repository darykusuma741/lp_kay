import { useEffect, useRef, useState } from 'react';
import blt1 from '../../assets/blt1.png';
import blt2 from '../../assets/blt2.png';
import { motion, useScroll, useTransform } from 'framer-motion';

interface MyBg2Props {
  className?: string;
  children?: React.ReactNode;
}

const MyBg2: React.FC<MyBg2Props> = ({ className, children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.offsetHeight);
    }
  }, []);

  const { scrollYProgress } = useScroll({ target: containerRef });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -containerHeight * 0.17]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, containerHeight * 0.17 - 100]);

  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -20]);

  return (
    <div ref={containerRef} className={`${className} relative overflow-hidden`}>
      <motion.img
        style={{ y: y1, rotate: rotate1 }}
        className="absolute opacity-50 sm:top-[-26%]  top-[-9%] left-[-15%] sm:w-[60vw] w-90 -z-10"
        src={blt1}
        alt="parallax"
      />
      <motion.img
        style={{ y: y2, rotate: rotate2 }}
        className="absolute opacity-50 sm:bottom-[-26%] bottom-[-5%] right-[-20%] sm:w-[60vw] w-200 -z-10"
        src={blt2}
        alt="parallax"
      />
      {children}
    </div>
  );
};

export { MyBg2 };
