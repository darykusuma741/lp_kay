import clsx from 'clsx';
import navButton from '../../assets/nav-button.png';

interface HeaderNavBtnProps {
  onClick: () => void;
  showNavbar: boolean;
}

const HeaderNavBtn: React.FC<HeaderNavBtnProps> = ({ onClick, showNavbar }) => {
  return (
    <>
      {/* <button className="lg:block hidden header-logo-cu btn-gradient rounded-full hover:text-midnight transition-colors cursor-pointer text-white py-2 px-6">
        Contact us
      </button> */}
      <button
        onClick={onClick}
        className={clsx(`btn-navbar-mobile`, {
          'rotate-180': showNavbar,
          'rotate-0': !showNavbar
        })}
      >
        <img src={navButton} className="h-6 w-6 object-contain" />
      </button>
    </>
  );
};

export default HeaderNavBtn;
