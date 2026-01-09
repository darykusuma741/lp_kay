import FooterNavAbout from './About/Footer.Nav.About';
import FooterNavWidget from './Widget/Footer.Nav.Widget';

const FooterNav: React.FC = () => {
  return (
    <div className="flex flex-row gap-20">
      <FooterNavAbout />
      <FooterNavWidget />
    </div>
  );
};

export default FooterNav;
