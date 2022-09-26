import React, { useState } from "react";
import {
  CarouselTitle,
  CarouselText,
  CarouselBottom,
  CarouselContainer,
  ImgContainer,
  ProductImg,
  LeftIcon,
  RightIcon,
} from "./CarouselElements";
import { BsDot } from "react-icons/bs";

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
          <LeftIcon onClick={prevImage} size="38" />
        {images.map((img, idx) => (
          <>
            <ProductImg src={img.url} />
            <CarouselTitle>{img.title}</CarouselTitle>
            <CarouselText>{img.text}</CarouselText>
          </>
        ))}
        <RightIcon onClick={nextImage} size="38" />
        
        {/* <ProductImg src={mainImg03} alt="baby_cake" />
        <Button>Summer Selections</Button>
        <ProductImg src={mainImg01} alt="choco_cake" />
        <ProductImg src={mainImg02} alt="heart_cake" /> */}
      </ImgContainer>
      <CarouselBottom>
        {images.map((images, currentIndex) => (
          <BsDot
            key={currentIndex}
            onClick={() => nextImage(currentIndex)}
            style={{ fontSize: "3em", marginRight: "4px", cursor: "pointer" }}
          />
        ))}
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
