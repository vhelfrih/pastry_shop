import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Locations from "./pages/Locations";
import Contact from "./pages/Contact";
import Footer from "./components/Footer/Footer";
import Carousel from "./components/Carousel/Carousel";
import img1 from './assets/heart_01.webp'
import img2 from './assets/choco_01.webp'
import img3 from './assets/baby_01.webp'
import img4 from './assets/baby_01.webp'

function App() {
  const images = [{img: img1, text: "1Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod sed sint fugit quisquam aut voluptatibus nostrum exercitationem numquam est facilis?"},
  {img: img2, text: "2Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod sed sint fugit quisquam aut voluptatibus nostrum exercitationem numquam est facilis?"},
  {img: img3, text: "3Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod sed sint fugit quisquam aut voluptatibus nostrum exercitationem numquam est facilis?"},{img: img4, text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod sed sint fugit quisquam aut voluptatibus nostrum exercitationem numquam est facilis?"}
]

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/menu" exact element={<Menu />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/locations" exact element={<Locations />} />
      </Routes>
      <Carousel images={images}/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
