import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const LayoutMain: React.FC = () => {
  return (
    <div className="relative min-h-screen min-w-screen flex flex-co">
      <Header />
      <main>
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};

export { LayoutMain };
