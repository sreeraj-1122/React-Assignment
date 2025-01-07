import React from 'react'
import Hero from '../../components/Hero/Hero'
import Banner from '../../components/Banner/Banner'
import Features from '../../components/Features/Features'
import Testinomial from '../../components/Testinomial/Testinomial'
import FaqSection from '../../components/FAQ section/FaqSection'
import BlogPage from '../../components/Blog section/BlogPage'
import CtaPage from '../../components/CTA section/CtaPage'

const Home = () => {
  return (
    <>
        <Hero/>
        <Banner/>
        <Features/>
        <Testinomial/>
        <FaqSection/>
        <BlogPage/>
        <CtaPage/>

    </>
  )
}

export default Home