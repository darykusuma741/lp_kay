import person from '../../assets/person.png';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';

interface MyPersonProps {
  className?: string;
}

const MyPerson: React.FC<MyPersonProps> = ({ className }) => {
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    const end = '+=200';

    gsap.to(imageRef.current, {
      scale: 0.8,
      // y: 2,
      // ease: 'none',
      // yPercent: 35,
      scrollTrigger: {
        // pin: '.content',
        // trigger: '.box-image',
        start: 'top top',
        end: end,
        scrub: true
      }
    });
  });

  return (
    <div className={`relative group ${className} box-image`}>
      <div className="absolute sm:w-90 w-50 sm:h-90 h-50 liner-gradient rounded-full bottom-0"></div>
      <div className="relative sm:w-90 w-50 sm:h-105 h-60 rounded-full overflow-hidden border-2 border-transparent">
        <img
          ref={imageRef}
          src={person}
          className="scale-90 absolute bottom-0 rounded-full -translate-x-2 sm:translate-y-20 translate-y-9"
        />
      </div>
    </div>
  );
};

export default MyPerson;
