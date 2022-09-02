import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Locations from "./pages/Locations";
import Contact from "./pages/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";

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
      <Hero/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
