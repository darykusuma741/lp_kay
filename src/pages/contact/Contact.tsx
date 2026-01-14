import { useRef } from 'react';
import galery1 from '../../assets/galery/galery1.png';
import galery2 from '../../assets/galery/galery2.png';
import galery3 from '../../assets/galery/galery3.png';
import galery4 from '../../assets/galery/galery4.png';

interface GaleryData {
  src: string;
  author: string;
}

function Contact() {
  const fakeList: GaleryData[] = [
    { src: galery1, author: 'Bedroom Design' },
    { src: galery2, author: 'Dining Room' },
    { src: galery3, author: 'Kitchen' },
    { src: galery4, author: 'Sitting Room' }
  ];
  const fakeList2: GaleryData[] = [
    { src: galery2, author: 'Dining Room' },
    { src: galery3, author: 'Kitchen' },
    { src: galery4, author: 'Sitting Room' },
    { src: galery1, author: 'Bedroom Design' }
  ];

  const nextRef = useRef<HTMLButtonElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const glrRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const thumbnailRef = useRef<HTMLDivElement>(null);

  const nextHandle = () => {
    showSlider('next');
  };

  const prevHandle = () => {
    showSlider('prev');
  };

  function showSlider(type: string) {
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
    // glrRef?.current?.classList.remove('prev');
    // glrRef?.current?.classList.remove('next');
  }

  return (
    <div className="overflow-hidden w-screen h-screen bg-midnight">
      <div ref={glrRef} className={'glr'}>
        <div ref={listRef} className="glr-list">
          {fakeList.map((item, idx) => (
            <div key={idx} className="glr-item">
              <img src={item.src} />
              <div className="glr-content">
                <div className="glr-author">{item.author}</div>
                <div className="glr-topic">Bedroom</div>
                <div className="glr-title">Design</div>
                <div className="glr-des">
                  ransform your bedroom into a cozy and aesthetic space with a modern and functional
                  interior design. Located in the Cinere area of Depok, Indonesia, our design
                  combines beauty, comfort, and space efficiency, making every corner of your
                  bedroom warm and inviting. From furniture selection to optimal lighting, every
                  detail is crafted to provide the perfect sleeping experience.
                </div>
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
                <div className="glr-des">Description</div>
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
}

export default Contact;
