import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import { useRef } from 'react';

interface HomeFeaturesItemsProps {
  src: string;
  title: string;
  content: string;
}

const HomeFeaturesItems: React.FC<HomeFeaturesItemsProps> = ({ src, title, content }) => {
  const desRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const splittitle = SplitText.create(titleRef.current, { type: 'chars' });
    gsap.from(splittitle.chars, {
      opacity: 0,
      // x: -100,
      stagger: 0.1,
      filter: 'blur(10px)',
      scrollTrigger: {
        // pin: '.content',
        trigger: titleRef.current,
        start: 'top bottom',
        end: () => `+=10%`,
        scrub: true
      }
    });
    const splitdes = SplitText.create(desRef.current, { type: 'chars' });
    gsap.from(splitdes.chars, {
      opacity: 0,
      x: 70,
      stagger: 0.1,
      filter: 'blur(10px)',
      scrollTrigger: {
        trigger: desRef.current,
        start: 'top bottom-=5%',
        end: () => `+=40%`,
        scrub: true
      }
    });
  });
  return (
    <div className="flex flex-col gap-4">
      <div className="mb-4">
        <img src={src} className="h-8" alt="" />
      </div>
      <h1
        ref={titleRef}
        className="font-ibm font-bold text-[1.125rem]"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
      >
        {title}
      </h1>
      <p
        ref={desRef}
        className="text-[1rem] font-Inter font-light"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
      >
        {content}
      </p>
    </div>
  );
};

export default HomeFeaturesItems;
