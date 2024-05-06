import React from 'react'
import { NavBar } from '../Components/NavBar'
import { Banner } from '../Components/Banner'
import { Footer } from '../Components/Footer'
import { AboutSection } from '../Components/AboutSection'
import { MySlider } from '../Components/Slider'
import { Catagories } from '../Components/SectionTwo'
import { StripeForm } from '../Components/StripeForm'
import { FeedbackSection } from '../Components/FeedbackCustomer'


export const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Catagories />
      <MySlider />
      <AboutSection />
      <StripeForm />
      <FeedbackSection/>
      <Footer />

    </div>
  )
}
