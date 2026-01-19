import { useEffect, useRef, useState } from 'react';
import galery1 from '../../../assets/galery/galery1.png';
import galery2 from '../../../assets/galery/galery2.png';
import galery3 from '../../../assets/galery/galery3.png';
import galery4 from '../../../assets/galery/galery4.png';

interface GaleryData {
  src: string;
  author: string;
  des: string;
}
interface ProductContetntProps {
  ref: React.RefObject<HTMLDivElement | null>;
}
const ProductContetnt: React.FC<ProductContetntProps> = ({ ref }) => {
  const fakeList: GaleryData[] = [
    {
      src: galery1,
      author: 'Bedroom',
      des: 'Transform your bedroom into a cozy and aesthetic space with a modern and functional interior design. Located in the Cinere area of Depok, Indonesia, our design combines beauty, comfort, and space efficiency, making every corner of your bedroom warm and inviting. From furniture selection to optimal lighting, every detail is crafted to provide the perfect sleeping experience.'
    },
    {
      src: galery2,
      author: 'Dining Room',
      des: 'Transform your dining room into an elegant and welcoming space with a modern and functional interior design. Located in the Cinere area of Depok, Indonesia, our design emphasizes harmony, comfort, and togetherness, making every meal feel special. From the arrangement of the dining table to warm lighting, every detail is crafted to create an unforgettable dining experience.'
    },
    {
      src: galery3,
      author: 'Kitchen',
      des: 'Transform your kitchen into a stylish and highly efficient space with a modern and functional interior design. Located in the Cinere area of Depok, Indonesia, our design blends aesthetics with practicality, making cooking activities more enjoyable and organized. From smart storage solutions to ergonomic layouts, every detail is crafted to support a smooth and inspiring culinary experience.'
    },
    {
      src: galery4,
      author: 'Sitting Room',
      des: 'Transform your sitting room into a cozy and aesthetically pleasing gathering space with a modern and functional interior design. Located in the Cinere area of Depok, Indonesia, our design highlights comfort, beauty, and relaxation, making every moment spent with family more meaningful. From the choice of sofa to ambient lighting, every detail is crafted to create a warm and inviting atmosphere.'
    }
  ];
  const fakeList2: GaleryData[] = [
    { src: galery2, author: 'Dining Room', des: '' },
    { src: galery3, author: 'Kitchen', des: '' },
    { src: galery4, author: 'Sitting Room', des: '' },
    { src: galery1, author: 'Bedroom', des: '' }
  ];

  const nextRef = useRef<HTMLButtonElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const glrRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const thumbnailRef = useRef<HTMLDivElement>(null);

  const nextHandle = () => {
    showSlider('next');
    resetInterval();
  };
  const prevHandle = () => {
    showSlider('prev');
    resetInterval();
  };
  const [onAnimation, setOnAnimation] = useState(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null); // untuk simpan interval

  useEffect(() => {
    // mulai interval pertama kali
    intervalRef.current = setInterval(() => showSlider('next'), 5000);

    return () => {
      // bersihkan interval saat unmount
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);
  function showSlider(type: string) {
    if (onAnimation) return;
    setOnAnimation(true);

    let itemSlider = document.querySelectorAll('.glr .glr-list .glr-item');
    let itemThumbneil = document.querySelectorAll('.glr .glr-thumbnail .glr-item');

    if (type === 'next') {
      listRef?.current?.appendChild(itemSlider[0]);
      thumbnailRef?.current?.appendChild(itemThumbneil[0]);
      glrRef?.current?.classList.add('next');
    } else {
      let positionLastItem = itemSlider.length - 1;
      listRef?.current?.prepend(itemSlider[positionLastItem]);
      thumbnailRef?.current?.prepend(itemThumbneil[positionLastItem]);
      glrRef?.current?.classList.add('prev');
    }
    setTimeout(() => {
      glrRef?.current?.classList.remove('next');
      glrRef?.current?.classList.remove('prev');
      setOnAnimation(false);
    }, 3000);
  }

  // fungsi untuk reset interval
  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => showSlider('next'), 5000);
  };

  return (
    <div ref={ref} className="overflow-hidden w-screen h-screen bg-midnight">
      <div ref={glrRef} className={'glr'}>
        <div ref={listRef} className="glr-list">
          {fakeList.map((item, idx) => (
            <div key={idx} className="glr-item">
              <img src={item.src} />
              <div className="glr-content">
                <div className="glr-author">{item.author}</div>
                <div className="glr-topic">{item.author}</div>
                <div className="glr-title">Design</div>
                <div className="glr-des">{item.des}</div>
                <div className="glr-buttons">
                  <button>Detail</button>
                  <button>Contact</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div ref={thumbnailRef} className="glr-thumbnail">
          {fakeList2.map((item, idx) => (
            <div key={idx} className="glr-item">
              <img src={item.src} />
              <div className="glr-content">
                <div className="glr-title">{item.author}</div>
                <div className="glr-des">{item.author} Design</div>
              </div>
            </div>
          ))}
        </div>
        <div className="glr-arrows">
          <button ref={prevRef} onClick={prevHandle} id="glr-prev">
            {'<'}
          </button>
          <button ref={nextRef} onClick={nextHandle} id="glr-next">
            {'>'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductContetnt;
