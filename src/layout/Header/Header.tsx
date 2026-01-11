import { useEffect, useState } from 'react';
import HeaderBody from './Header.Body';
import HeaderNavBtn from './Header.Btn';
import HeaderNav from './Header.Nav';
import HeaderNavMobile from './Header.Nav.Mobile';

const Header: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleNavClick = () => {
    const show = !showNavbar;
    setShowNavbar(show);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024 && showNavbar) setShowNavbar(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <HeaderBody showNavbar={showNavbar}>
        <HeaderNav />
        <HeaderNavBtn onClick={handleNavClick} showNavbar={showNavbar} />
      </HeaderBody>
      <HeaderNavMobile onClick={handleNavClick} showNavbar={showNavbar} />
    </>
  );
};

export default Header;
