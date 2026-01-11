import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Layout from './layout/Layout';
import Product from './pages/product/Product';
import Services from './pages/services/Services';
import Contact from './pages/contact/Contact';
import Team from './pages/team/Team';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
      </Route>
    </Routes>
  );
}

export default App;
