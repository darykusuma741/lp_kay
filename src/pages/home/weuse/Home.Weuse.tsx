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
import getxLogo from '../../../assets/brand/getx.png';
import viteLogo from '../../../assets/brand/vite.png';
import prismaLogo from '../../../assets/brand/prisma.png';
import nginxLogo from '../../../assets/brand/nginx.png';
import { animate, motion, useMotionValue } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface WeuseItems {
  src: string;
  link: string;
}

const HomeWeuse: React.FC = () => {
  const items: WeuseItems[] = [
    { src: blenderLogo, link: 'https://www.blender.org/' },
    { src: sketchupLogo, link: 'https://sketchup.trimble.com/' },
    { src: figmaLogo, link: 'https://figma.com/' },
    { src: flutterLogo, link: 'https://flutter.dev/' },
    { src: nestjsLogo, link: 'https://nestjs.com/' },
    { src: reactjsLogo, link: 'https://react.dev/' },
    { src: vscodeLogo, link: 'https://code.visualstudio.com/' },
    { src: postgreLogo, link: 'https://www.postgresql.org/' },
    { src: dockerLogo, link: 'https://www.docker.com/' },
    { src: tailwindLogo, link: 'https://tailwindcss.com/' },
    { src: viteLogo, link: 'https://vite.dev/' },
    { src: getxLogo, link: 'https://getx.site/' },
    { src: prismaLogo, link: 'https://www.prisma.io/' },
    { src: nginxLogo, link: 'https://nginx.org/' }
  ];

  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const totalWidth = container.scrollWidth / 2 + 10; // scrollWidth total dibagi 2 karena duplikat
    const duration = 12; // sesuaikan kecepatan

    const controls = animate(x, -totalWidth, {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'loop'
    });

    return controls.stop;
  }, [x]);

  return (
    <div className="bg-white sm:py-10 py-5 overflow-hidden">
      <motion.div
        className="flex left-0 gap-5"
        ref={containerRef}
        style={{ x, willChange: 'transform' }}
      >
        {[...items, ...items].map((item, idx) => (
          <img
            key={idx}
            src={item.src}
            className="sm:h-15 h-8 shrink-0 hover:scale-110 transition-all cursor-pointer"
            onClick={() => window.open(item.link, '_blank')}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default HomeWeuse;
