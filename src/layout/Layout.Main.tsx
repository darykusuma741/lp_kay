import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { LayoutSplashScreen } from './Splashscreen/Layout.Splashscreen';

const LayoutMain: React.FC = () => {
  return (
    <LayoutSplashScreen>
      <div className="relative min-h-screen min-w-screen flex flex-col container">
        <Header />
        <div className="content">
          <main>
            <Outlet />
            <Footer />
          </main>
        </div>
      </div>
    </LayoutSplashScreen>
  );
};

export { LayoutMain };
