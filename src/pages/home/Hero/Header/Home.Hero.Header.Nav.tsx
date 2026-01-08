import Logo from '../../../../assets/logo.png';

const HomeHeroHeaderNav: React.FC = () => {
  return (
    <div className="flex justify-center items-center text-white text-[1rem] gap-17">
      <div className="flex items-center gap-2 text-[1.25rem] font-light font-ibm header-logo">
        <img src={Logo} className="w-[2.3rem] header-logo-image" />
        <span className="font-bold">KAY</span> Digital Studio
      </div>
      <ul className="m2:flex hidden space-x-17">
        <li className="hover:text-gray-200 cursor-pointer">Home</li>
        <li className="hover:text-gray-200 cursor-pointer">About</li>
        <li className="hover:text-gray-200 cursor-pointer">Services</li>
        <li className="hover:text-gray-200 cursor-pointer">Contact</li>
      </ul>
    </div>
  );
};

export default HomeHeroHeaderNav;
