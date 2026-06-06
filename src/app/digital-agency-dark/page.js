"use client"
import Home3aboutSection from '@/components/about/Home3aboutSection'
import Home3Banner from '@/components/banner/Home3Banner'
import Home3BlogSection from '@/components/blog-section/Home3BlogSection'
import Home5Footer from '@/components/Footer/Home5Footer'
import Header3 from '@/components/header/Header3'
import Home3PartnerSection from '@/components/partner-sections/Home3PartnerSection'
import Home3PortfolioSection from '@/components/portfolio-section/Home3PortfolioSection'
import Home3ProcessSection from '@/components/process-sections/Home3ProcessSection'
import Home3SolutionsSection from '@/components/service-section/Home3SolutionsSection'
import Home3NewTestimonial from '@/components/testimonial-section/Home3NewTestimonial'
import React, { useEffect } from 'react'

const DigitalAgencyPage = () => {
    useEffect(() => {
        document.body.classList.add("digital-agency");
        document.body.classList.add("dark");
    })
    return (
        <>
            <Header3 />
            <Home3Banner />
            <Home3PartnerSection />
            <Home3aboutSection />
            <Home3PortfolioSection />
            <Home3SolutionsSection />
            <Home3ProcessSection />
            <Home3BlogSection />
            <Home3NewTestimonial />
            <Home5Footer />
        </>
    )
}

export default DigitalAgencyPage
