import { useEffect, useState } from 'react';
import HeaderNavBtn from './Header.Btn';
import HeaderNav from './Header.Nav';

const Header: React.FC = () => {
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
      className={`fixed z-50 w-screen flex justify-between items-center m2:px-37.5 md:px-20 px-10 transition-all duration-300 ${
        scrolled ? 'bg-midnight shadow-lg h-16' : 'bg-transparent h-25'
      }`}
    >
      <HeaderNav />
      <HeaderNavBtn />
    </div>
  );
};

export default Header;
