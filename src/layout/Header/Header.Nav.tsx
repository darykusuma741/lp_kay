import { NavLink } from 'react-router-dom';
import MyLogo from '../../common/components/MyLogo';

const HeaderNav: React.FC = () => {
  return (
    <div className="flex justify-center items-center text-white text-[1rem] gap-17">
      <MyLogo />
      <ul className="m2:flex hidden space-x-17">
        <li className="hover:text-gray-200 cursor-pointer">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? `custom-link-active` : `custom-link`)}
          >
            Home
          </NavLink>
        </li>
        <li className="hover:text-gray-200 cursor-pointer">
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? `custom-link-active` : `custom-link`)}
          >
            Product
          </NavLink>
        </li>
        <li className="hover:text-gray-200 cursor-pointer">
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? `custom-link-active` : `custom-link`)}
          >
            Services
          </NavLink>
        </li>
        <li className="hover:text-gray-200 cursor-pointer">
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? `custom-link-active` : `custom-link`)}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default HeaderNav;
