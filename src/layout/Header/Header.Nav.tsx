import { Link } from 'react-router-dom';
import MyLogo from '../../common/components/MyLogo';

const HeaderNav: React.FC = () => {
  return (
    <div className="flex justify-center items-center text-white text-[1rem] gap-17">
      <MyLogo />
      <ul className="m2:flex hidden space-x-17">
        <li className="hover:text-gray-200 cursor-pointer">
          <Link to="/" className="custom-link">
            Home
          </Link>
        </li>
        <li className="hover:text-gray-200 cursor-pointer">
          <Link to="/Profile" className="custom-link">
            Profile
          </Link>
        </li>
        <li className="hover:text-gray-200 cursor-pointer">
          <Link to="/services" className="custom-link">
            Services
          </Link>
        </li>
        <li className="hover:text-gray-200 cursor-pointer">
          <Link to="/contact" className="custom-link">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HeaderNav;
