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

  const config = {
    '--width-crsl': '120px',
    '--height-crsl': '50px',
    '--count-crsl': items.length
  } as any;

  return (
    <div className="bg-white">
      <div className="crsl" style={config}>
        <div className="crsl-list">
          {[...items].map((item) => (
            <img
              src={item.src}
              // className="sm:h-15 h-8 shrink-0 hover:scale-110 transition-all cursor-pointer"
              className="hover:scale-110 transition-all cursor-pointer"
              onClick={() => window.open(item.link, '_blank')}
            />
          ))}
          {[...items].map((item) => (
            <img
              src={item.src}
              // className="sm:h-15 h-8 shrink-0 hover:scale-110 transition-all cursor-pointer"
              className="hover:scale-110 transition-all cursor-pointer"
              onClick={() => window.open(item.link, '_blank')}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeWeuse;
