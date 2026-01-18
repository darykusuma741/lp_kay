import { useEffect, useState } from 'react';
import resizeIcon from '../../../assets/resize.png';
import clsx from 'clsx';

interface ProductHeroProps {
  handleOnClick: () => void;
}

const ProductHero: React.FC<ProductHeroProps> = ({ handleOnClick }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={clsx('relative w-screen h-screen overflow-hidden bg-midnight')}>
      <iframe
        className="absolute sm:scale-125 scale-120"
        src="https://my.spline.design/untitled-iLjWHNIqTEGc54dSw1GsBQjb/"
        width="100%"
        height="100%"
      />
      <div
        className={clsx('absolute w-screen h-screen flex', {
          block: scrollY !== 0,
          hidden: scrollY === 0
        })}
      ></div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="card-gd w-40 h-10 text-white" onClick={handleOnClick}>
          <div className="card-gd-item text-center flex justify-center items-center gap-1">
            <img src={resizeIcon} alt="" className="h-4" />
            List Product
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHero;
