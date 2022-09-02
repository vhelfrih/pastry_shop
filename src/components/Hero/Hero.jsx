import React from 'react'
import { HeroContainer, ProductImg } from './HeroElements'
import mainImg01 from '../../assets/choco_01.webp'
import mainImg02 from '../../assets/baby_01.webp'
import mainImg03 from '../../assets/heart_01.webp'
import { Button } from '../../globalStyles'

const Hero = () => {
  return (
    <HeroContainer>
      <ProductImg src={mainImg02} alt="baby_cake" />
      <Button>Summer Selections</Button>
      <ProductImg src={mainImg01} alt="choco_cake" />
      <ProductImg src={mainImg03} alt="heart_cake" />
    </HeroContainer>
  )
}

export default Hero