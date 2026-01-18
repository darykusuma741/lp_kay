import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Product from './pages/product/Product';
import Services from './pages/services/Services';
import Contact from './pages/contact/Contact';
import Team from './pages/team/Team';
import Indonesia from './pages/indonesia/Indonesia';
import { LayoutMain } from './layout/Layout.Main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/product" element={<Product />} />
        </Route>
        <Route path="/indonesia" element={<Indonesia />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
