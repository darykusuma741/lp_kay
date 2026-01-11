import clsx from 'clsx';
import navButton from '../../assets/nav-button.png';
import MyLogo from '../../common/components/MyLogo';

interface HeaderNavMobileProps {
  onClick: () => void;
  showNavbar: boolean;
}

const HeaderNavMobile: React.FC<HeaderNavMobileProps> = ({ onClick, showNavbar }) => {
  return (
    <nav
      className={clsx(
        'fixed top-0 left-0 py-3 h-full w-full bg-midnight text-white z-50 transform transition-transform duration-300 m2:px-37.5 md:px-20 px-10',
        { 'translate-x-0': showNavbar, '-translate-x-full': !showNavbar }
      )}
    >
      <div className={clsx('flex flex-row justify-between items-center')}>
        <MyLogo />
        <button
          onClick={onClick}
          className={clsx(
            `block cursor-pointer rounded-full hover:bg-amber-50/25 p-2 transition-all`,
            {
              'rotate-180': showNavbar,
              'rotate-0': !showNavbar
            }
          )}
        >
          <img src={navButton} className="h-6 w-6 object-contain" />
        </button>
      </div>
    </nav>
  );
};

export default HeaderNavMobile;
