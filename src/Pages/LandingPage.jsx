import React from 'react'
import { Banner } from '../Components/Banner'
import { AboutSection } from '../Components/How_Order'
import { ProductSlider } from '../Components/Product_Slider'
import { WeOffer } from '../Components/We_Offer'
import { Covid19 } from '../Components/Covid19'



export const LandingPage = () => {
  return (
    <div>
  
      <Banner />
      <ProductSlider/>
      <Covid19/>
      <AboutSection />
      <WeOffer />

    </div>
  )
}
