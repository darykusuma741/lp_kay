import { useEffect, useRef, useState } from 'react';
import resizeIcon from '../../../assets/resize.png';
import clsx from 'clsx';

interface ProductHeroProps {
  handleOnClick: () => void;
}

const ProductHero: React.FC<ProductHeroProps> = ({ handleOnClick }) => {
  const [hidden, setHidden] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (divRef.current) {
  //       const scrollTop = divRef.current.scrollTop;
  //       setHidden(scrollTop === 0); // true kalau scroll di atas
  //       console.log('sadsad');
  //     }
  //   };

  //   const div = divRef.current;
  //   if (div) {
  //     div.addEventListener('scroll', handleScroll);
  //   }

  //   // return () => {
  //   //   if (div) div.removeEventListener('scroll', handleScroll);
  //   // };
  // }, [divRef]);

  return (
    <div
      ref={divRef}
      className={clsx('relative w-screen h-screen overflow-hidden', {
        'bg-amber-50': hidden,
        'bg-midnight': !hidden
      })}
    >
      <iframe
        className="absolute sm:scale-125 scale-120"
        src="https://my.spline.design/untitled-iLjWHNIqTEGc54dSw1GsBQjb/"
        width="100%"
        height="100%"
      />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="card-gd w-40 h-10 text-white" onClick={handleOnClick}>
          <div className="card-gd-item text-center flex justify-center items-center gap-1">
            <img src={resizeIcon} alt="" className="h-4" />
            ist Product
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHero;
