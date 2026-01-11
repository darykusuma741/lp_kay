import { useState } from 'react';
import HeaderBody from './Header.Body';
import HeaderNavBtn from './Header.Btn';
import HeaderNav from './Header.Nav';
import HeaderNavMobile from './Header.Nav.Mobile';
import useWindowSizeListener from '../../common/hooks/userWindowLitstener';

const Header: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleNavClick = () => {
    const show = !showNavbar;
    setShowNavbar(show);
  };

  useWindowSizeListener(({ width }) => {
    if (width >= 1024 && showNavbar) {
      setShowNavbar(false);
    }
  });

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
