import FooterContent from './Content/Footer.Content';
import FooterNav from './Nav/Footer.Nav';

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col lg:px-36 px-10 lg:py-36 py-20 bg-white gap-10">
      <FooterContent />
      <hr className="md:block hidden border-t border-mist" />
      <FooterNav />
    </div>
  );
};

export default Footer;
