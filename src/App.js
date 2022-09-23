import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Locations from "./pages/Locations";
import Contact from "./pages/Contact";
import Footer from "./components/Footer/Footer";
import Carousel from "./components/Carousel/Carousel";

import { images } from "./components/Carousel/CarouselData";
import Hero from "./components/Hero/Hero";
import HeroImage from "./components/HeroImage/HeroImage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/menu" exact element={<Menu />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/locations" exact element={<Locations />} />
      </Routes>
      <Carousel images={images} />
      <Hero />
      <HeroImage />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
