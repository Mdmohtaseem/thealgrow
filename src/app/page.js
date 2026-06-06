"use client"
import Home3aboutSection from '@/components/about/Home3aboutSection'
import Home3Banner from '@/components/banner/Home3Banner'
import Home3BlogSection from '@/components/blog-section/Home3BlogSection'
import Home5Footer from '@/components/Footer/Home5Footer'
import Header3 from '@/components/header/Header3'
import Home5ServiceSection from '@/components/service-section/Home5ServiceSection'
import Home4ContactSection from '@/components/contact-section/Home4ContactSection'
import Home1ServiceSection from "@/components/service-section/Home1ServiceSection";
import Home3SolutionsSection from '@/components/service-section/Home3SolutionsSection';
import Home5ProcessSection from '@/components/process-sections/Home5ProcessSection'
import Home3PartnerSection from '@/components/partner-sections/Home3PartnerSection'
import Home6IntegrationSection from '@/components/integration-section/Home6IntegrationSection'
import Home5BlogSection from '@/components/blog-section/Home5BlogSection'
// import Home3PortfolioSection from '@/components/portfolio-section/Home3PortfolioSection'
import Home3CreativePortfolioSection from '@/components/portfolio-section/Home3CreativePortfolioSection'
import Home3NewTestimonial from '@/components/testimonial-section/Home3NewTestimonial'
import React, { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    document.body.classList.add("digital-agency");
  }, [])

  return (
    <>
      <Header3 />
      <Home3Banner />
      <Home3PartnerSection />
      <Home3aboutSection />
      {/* <Home3PortfolioSection /> */}
      <Home3CreativePortfolioSection />
      <Home3SolutionsSection />
      <Home5ServiceSection />
      <Home6IntegrationSection />
      <Home5ProcessSection />
      <Home3NewTestimonial />
      <Home4ContactSection />
      <Home5Footer />
    </>
  )
}
