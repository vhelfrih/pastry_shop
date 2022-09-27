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
          <>
            <ProductImg src={images[currentIndex].url} />
            <CarouselTitle>{images[currentIndex].title}</CarouselTitle>
            <CarouselText>{images[currentIndex].text}</CarouselText>
          </>
        <RightIcon onClick={nextImage} size="38" />
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
  );
};

export default Carousel;
