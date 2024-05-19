import React from 'react'
import { Banner } from '../Components/Banner'
import { AboutSection } from '../Components/How_Order'
import { ProductSlider } from '../Components/Product_Slider'
import { WeOffer } from '../Components/We_Offer'
import { Covid19 } from '../Components/Covid19'
import { FeedBack } from '../Components/Feed_Back'





export const LandingPage = () => {
  return (
    <div>

      <Banner />
      <WeOffer />
      <ProductSlider />
      <AboutSection />
      <Covid19 />
      <FeedBack />

    </div>
  )
}
