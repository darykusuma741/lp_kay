import Logo from '../../assets/logo.png';

interface MyLogoProps {
  className?: string;
}

const MyLogo: React.FC<MyLogoProps> = ({ className }) => {
  return (
    <div
      className={`flex items-center gap-2 text-[1.25rem] font-light font-ibm header-logo ${
        className ?? ''
      }`}
    >
      <img src={Logo} className="w-[2.3rem] header-logo-image" />
      <span className="font-bold">KAY</span> Digital Studio
    </div>
  );
};

export default MyLogo;
