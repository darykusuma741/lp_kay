import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import taniquSs1 from '../../../../assets/taniqu/taniqu-ss-1.png';
import playstoreImg from '../../../../assets/playstore.png';

const HomeOtherTaniqu: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const btnPlaystoreRef = useRef<HTMLButtonElement>(null);
  const point1Ref = useRef<HTMLParagraphElement>(null);
  const point2Ref = useRef<HTMLParagraphElement>(null);
  const point3Ref = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add('(min-width: 640px)', () => {
      const tmWrapper = gsap.timeline({
        scrollTrigger: {
          pin: textRef.current,
          trigger: wrapperRef.current,
          start: 'top center-=35%',
          end: '+=65%',
          scrub: true
        }
      });
      tmWrapper.from(btnPlaystoreRef.current, { opacity: 0, y: 100 }, 0.4);
      tmWrapper.from(point1Ref.current, { opacity: 0, y: 100, filter: 'blur(10px)' }, 0.05);
      tmWrapper.from(point2Ref.current, { opacity: 0, y: 100, filter: 'blur(10px)' }, 0.15);
      tmWrapper.from(point3Ref.current, { opacity: 0, y: 100, filter: 'blur(10px)' }, 0.25);
    });
  });

  return (
    <div ref={wrapperRef} className="w-screen bg-white px-6 py-10">
      <div className="flex flex-row justify-center sm:gap-20 gap-10">
        <img
          src={taniquSs1}
          alt=""
          className="sm:w-90 w-40 object-cover sm:rounded-4xl rounded-xl shadow-2xl"
        />
        <div
          ref={textRef}
          className="sm:text-5xl text-2xl font-ibm font-thin flex flex-col sm:gap-5 gap-2 max-w-120"
        >
          <h1>
            Welcome to <span className="font-medium">TANIQU App</span>
          </h1>
          <div className="font-poppins sm:text-sm text-[0.6rem] font-extralight text-gray-500 flex flex-col gap-3">
            <p>One of the applications we made.</p>
            <p>
              TaniQu is a digital agriculture platform designed to support millennial farmers by
              connecting them with landowners and farming groups. The app aims to make farming more
              collaborative, efficient, and data-driven through technology.
            </p>
            <p ref={point1Ref}>
              * Farmer–Landowner Connection: Helps farmers collaborate with landowners and farming
              communities.
            </p>
            <p ref={point2Ref}>
              * AI-Based Farming Progress: Farmers can record and monitor crop progress using AI
              features.
            </p>
            <p ref={point3Ref}>
              * Fertilizer Recommendations: The AI system suggests appropriate fertilizer usage
              based on the planted crops.
            </p>
          </div>
          <button
            onClick={() =>
              window.open(
                'https://play.google.com/store/apps/details?id=com.appcs.taniqu',
                '_blank'
              )
            }
            ref={btnPlaystoreRef}
            className="group flex justify-center items-center gap-2 text-center border hover:border-blue-400 border-blue-200 hover:bg-blue-400 bg-blue-50 cursor-pointer py-3 px-2.5 rounded-xl"
          >
            <img src={playstoreImg} className="sm:w-6 w-4" alt="" />
            <label className="sm:text-[1rem] text-[0.7rem] font-poppins font-normal group-hover:text-white text-midnight">
              Visit Google Play
            </label>
          </button>
        </div>
      </div>
    </div>
  );
};

export { HomeOtherTaniqu };
