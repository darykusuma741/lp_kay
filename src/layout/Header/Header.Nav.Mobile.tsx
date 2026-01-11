import clsx from 'clsx';
import navButton from '../../assets/nav-button.png';
import MyLogo from '../../common/components/MyLogo';
import { NavLink } from 'react-router-dom';
import homeIcon from '../../assets/icon/home.png';
import homeOnIcon from '../../assets/icon/home-active.png';
import productIcon from '../../assets/icon/product.png';
import productOnIcon from '../../assets/icon/product-active.png';
import serviceIcon from '../../assets/icon/service.png';
import serviceOnIcon from '../../assets/icon/service-active.png';
import contactIcon from '../../assets/icon/contact.png';
import contactOnIcon from '../../assets/icon/contact-active.png';
import teamIcon from '../../assets/icon/team.png';
import teamOnIcon from '../../assets/icon/team-active.png';
import searchIcon from '../../assets/icon/search.png';
import MyIconHover from '../../common/components/MyIconHover';

interface HeaderNavMobileProps {
  onClick: () => void;
  showNavbar: boolean;
}

interface NavItem {
  label: string;
  path: string;
  img: string;
  imgHover: string;
}

const HeaderNavMobile: React.FC<HeaderNavMobileProps> = ({ onClick, showNavbar }) => {
  const navItems: NavItem[] = [
    { label: 'Home', path: '/', img: homeIcon, imgHover: homeOnIcon },
    { label: 'Product', path: '/product', img: productIcon, imgHover: productOnIcon },
    { label: 'Services', path: '/services', img: serviceIcon, imgHover: serviceOnIcon },
    { label: 'Contact', path: '/contact', img: contactIcon, imgHover: contactOnIcon },
    { label: 'Team', path: '/team', img: teamIcon, imgHover: teamOnIcon }
  ];

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
          className={clsx(`btn-navbar-mobile`, {
            'rotate-180': showNavbar,
            'rotate-0': !showNavbar
          })}
        >
          <img src={navButton} className="h-6 w-6 object-contain" />
        </button>
      </div>
      <div className="flex flex-col mt-10 text-lg gap-5">
        <div className="relative w-full ">
          <img
            src={searchIcon}
            className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
            alt="search icon"
          />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-11 flex items-center justify-center text-sm pr-4 py-3 rounded-xl border border-gray focus:border-white focus:outline-none transition-all duration-300"
          />
        </div>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={onClick}
            className={({ isActive }) =>
              clsx(
                'flex items-center gap-1 group w-full bg-midnigh py-2.5 rounded-xl transition-all cursor-pointer',
                'hover:px-5 hover:bg-onyx bg-pos-0 hover:bg-pos-100',
                {
                  'hover:bg-linear-to-l/oklch': isActive,
                  'font-medium px-4 bg-linear-to-r/oklch from-sky to-indigo': isActive
                }
              )
            }
          >
            {({ isActive }: { isActive: boolean }) => (
              <>
                <MyIconHover
                  img={item.img}
                  imgHover={isActive ? item.imgHover : item.img}
                  className="w-6 h-6 bg-center bg-contain bg-no-repeat"
                />
                <span
                  className={clsx('text-sm group-hover:text-white', {
                    'text-midnight font-medium': isActive
                  })}
                >
                  {item.label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default HeaderNavMobile;
