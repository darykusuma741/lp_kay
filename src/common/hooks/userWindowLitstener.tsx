import { useEffect, useState } from 'react';

interface WindowSize {
  width: number;
  height: number;
}

type Callback = (size: WindowSize) => void;

const useWindowSizeListener = (callback?: Callback) => {
  const [size, setSize] = useState<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      const newSize = {
        width: window.innerWidth,
        height: window.innerHeight
      };
      setSize(newSize);

      // panggil callback jika ada
      if (callback) callback(newSize);
    };

    window.addEventListener('resize', handleResize);

    // jalankan sekali saat mount
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [callback]);

  return size;
};

export default useWindowSizeListener;
