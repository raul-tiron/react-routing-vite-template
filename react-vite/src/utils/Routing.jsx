import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import About from '../pages/About/About';
import Blog from '../pages/Blog/Blog';
import Contact from '../pages/Contact/Contact';
import Home from '../pages/Home/Home';
import Services from '../pages/Services/Services';

// Here, the Header and the Footer will stay the same on every page.
// We then have the routes, the path prop shows the path of the page,
// and the element is the page itself.

// The Home element is first because it is the main page,
// and the rest are put in alphabetical order.
const Routing = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default Routing;
