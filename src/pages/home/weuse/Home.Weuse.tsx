import blenderLogo from '../../../assets/brand/blender.png';
import figmaLogo from '../../../assets/brand/figma.png';
import flutterLogo from '../../../assets/brand/flutter.png';
import nestjsLogo from '../../../assets/brand/nestjs.png';
import reactjsLogo from '../../../assets/brand/reactjs.png';
import sketchupLogo from '../../../assets/brand/sketchup.png';
import vscodeLogo from '../../../assets/brand/vscode.png';
import postgreLogo from '../../../assets/brand/postgre.png';
import dockerLogo from '../../../assets/brand/docker.png';
import tailwindLogo from '../../../assets/brand/tailwind.png';
import { animate, motion, useMotionValue } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface WeuseItems {
  src: string;
}

const HomeWeuse: React.FC = () => {
  const items: WeuseItems[] = [
    { src: blenderLogo },
    { src: sketchupLogo },
    { src: figmaLogo },
    { src: flutterLogo },
    { src: nestjsLogo },
    { src: reactjsLogo },
    { src: vscodeLogo },
    { src: postgreLogo },
    { src: dockerLogo },
    { src: tailwindLogo }
  ];

  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const totalWidth = container.scrollWidth / 2 + 10; // scrollWidth total dibagi 2 karena duplikat
    const duration = 7; // sesuaikan kecepatan

    const controls = animate(x, -totalWidth, {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'loop'
    });

    return controls.stop;
  }, [x]);

  return (
    <div className="bg-white sm:py-10 py-5 ">
      <motion.div
        className="flex left-0 gap-5"
        ref={containerRef}
        style={{ x, willChange: 'transform' }}
      >
        {[...items, ...items].map((item, idx) => (
          <img key={idx} src={item.src} className="sm:h-15 h-8 shrink-0" />
        ))}
      </motion.div>
    </div>
  );
};

export default HomeWeuse;
