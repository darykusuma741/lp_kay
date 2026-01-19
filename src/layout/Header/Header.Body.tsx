import clsx from 'clsx';
import { useEffect, useState } from 'react';

interface HeaderBodyProps {
  children?: React.ReactNode;
  showNavbar: boolean;
}

const HeaderBody: React.FC<HeaderBodyProps> = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // scroll > 50px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={clsx(
        `fixed z-998 w-screen flex justify-between items-center m2:px-37.5 md:px-20 px-10 transition-all duration-300 text-white navbar`,
        { 'bg-midnight shadow-lg h-16': scrolled, 'bg-transparent h-25': !scrolled }
      )}
    >
      {children}
    </div>
  );
};

export default HeaderBody;
