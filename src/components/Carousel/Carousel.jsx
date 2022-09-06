import React, { useState } from "react";
import {
  CarouselBottom,
  CarouselContainer,
  ImgContainer,
  ProductImg,
} from "./CarouselElements";
import { Button } from "../../globalStyles";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { BsDot } from "react-icons/bs";
import img1 from '../../assets/baby_01.webp'

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = images.length;
  
  const nextImage = () => {
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
  };

  const prevImage = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
  };

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  return (
    <CarouselContainer>
      <ImgContainer>
        <FaArrowAltCircleLeft onClick={prevImage}
          style={{ marginRight: "5em", fontSize: "2.2em", cursor: "pointer" }}
        />
        <ProductImg
          src={images.map((img) => img)}
        />
        <FaArrowAltCircleRight onClick={nextImage}
          style={{ marginLeft: "5em", fontSize: "2.2em", cursor: "pointer" }}
        />
        {/* <ProductImg src={mainImg03} alt="baby_cake" />
        <Button>Summer Selections</Button>
        <ProductImg src={mainImg01} alt="choco_cake" />
        <ProductImg src={mainImg02} alt="heart_cake" /> */}
      </ImgContainer>
      <CarouselBottom>
      {images.map((images, currentIndex) => (
        <BsDot key={currentIndex}
        onClick={() => nextImage(currentIndex)} style={{ fontSize: "3em", marginRight: "4px", cursor: "pointer" }}/>))}
      </CarouselBottom>
      <hr style={{ "border-top": "2px solid #D01416" }} />
    </CarouselContainer>


    // <CarouselContainer>
    //   <ImgContainer>
    //     <ProductImg src={mainImg03} alt="baby_cake" />
    //     <Button>Summer Selections</Button>
    //     <ProductImg src={mainImg01} alt="choco_cake" />
    //     <ProductImg src={mainImg02} alt="heart_cake" />
    //   </ImgContainer>
    //   <CarouselBottom>dots</CarouselBottom>
    //   <hr style={{"border-top":"2px solid #D01416" }}/>
    // </CarouselContainer>
  );
};

export default Carousel;