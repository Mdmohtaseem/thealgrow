"use client"
import React, { useMemo, useRef, useState } from 'react'
import Home5Footer from '@/components/Footer/Home5Footer'
import Header3 from '@/components/header/Header3'
import Home3PartnerSection from '@/components/partner-sections/Home3PartnerSection'
import Home5AboutSection from '@/components/about/Home5AboutSection'
import Home3NewTestimonial from '@/components/testimonial-section/Home3NewTestimonial'
import Home1processSection from '@/components/process-sections/Home1processSection'
import Home5AwardSection from '@/components/about/Home5AwardSection'

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Autoplay,
    EffectFade,
    Navigation,
    Pagination,
} from "swiper";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Counter from '@/components/common/Counter'
import Link from 'next/link'
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);
const AboutPage = () => {
    const [isOpenimg, setOpenimg] = useState({
        openingState: false,
        openingIndex: 0,
    });
    const ref3 = useRef(null)
    const bannerSettings = useMemo(() => {
        return {
            spaceBetween: 24,
            autoplay: {
                delay: 2000, // Autoplay duration in milliseconds
                disableOnInteraction: false,
            },
            breakpoints: {
                280: {
                    slidesPerView: 1,
                },
                350: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                576: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
                768: {
                    slidesPerView: 4,
                },
                992: {
                    slidesPerView: 5,
                },
                1200: {
                    slidesPerView: 6,
                    spaceBetween: 15,
                },
                1400: {
                    slidesPerView: 6,
                },
            },
        };
    }, []);


    return (
        <>
            <Header3 />
            <div className="breadcrumb-section mb-130">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-8">
                            <div className="banner-content">
                                <h1>Building Scalable <br />Digital Systems</h1>
                                <ul className="breadcrumb-list">
                                    <li><a href="/">Home</a></li>
                                    <li>
                                        <svg width={25} height={6} viewBox="0 0 25 6" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM20 3.5L25 5.88675V0.113249L20 2.5V3.5ZM4.5 3.5H20.5V2.5H4.5V3.5Z" />
                                        </svg>
                                        About
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-page-banner-section mb-130">
                <div className="slider-area mb-70">
                    <Swiper {...bannerSettings} className="swiper about-page-banner-slider">
                        <div className="swiper-wrapper">
                            <SwiperSlide className="swiper-slide">
                                <div className="single-img">
                                    <img src="assets/img/innerpages/Untitled design (31).svg" alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="vector">
                                    <img src="assets/img/innerpages/about-page-banner-vector1.png" alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="single-img two">
                                    <img src="assets/img/innerpages/Untitled design (32).svg" alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="single-img three">
                                    <img src="assets/img/innerpages/Untitled design (33).svg" alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="vector">
                                    <img src="assets/img/innerpages/about-page-banner-vector2.png" alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="single-img two">
                                    <img src="assets/img/innerpages/Untitled design (34).svg" alt="" />
                                </div>
                            </SwiperSlide>
                        </div>
                    </Swiper>
                </div>
                <div className="banner-content-wrap">
                    <div className="container">
                        <div className="row gy-4 justify-content-between">
                            <div className="col-xl-5 col-lg-6">
                                <div className="title-area">
                                    <h2>A Growth-Focused Digital Agency.</h2>
                                    <span>“ we engineer scalable growth systems for modern businesses.”</span>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6">
                                <div className="banner-content">
                                    <p>At TheAlgrow, our expertise spans <span>Web Platforms</span>, <span>Brand Strategy</span>, <span>Marketing Systems</span>, and <span>AI Solutions</span>, enabling us to build complete digital growth infrastructures. From ambitious startups to scaling enterprises, we create tailored solutions designed to support sustainable growth, <span>no matter your industry or business stage.</span></p>

                                    <p>We work closely with our clients to understand their vision, challenges, and growth opportunities, ensuring every solution is built to deliver measurable impact. By combining scalable technology, strategic marketing, and intelligent automation, we help businesses not only compete in the digital landscape but <span>grow faster and scale smarter.</span></p>
                                    <Link href="/contact" className="primary-btn3 transparent three btn-hover">
                                        Start The Journey
                                        <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                        <span />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-page-counter-section">
                <div className="container">
                    <div className="counter-wrapper">
                        <div className="row gy-md-5 gy-4">
                            <div className="col-lg-3 col-sm-6 d-flex justify-content-lg-start justify-content-sm-center divider">
                                <div className="single-counter">
                                    <h2><Counter
                                        start={0}
                                        end={100}
                                        speed={7}
                                        forwardedRef={ref3}
                                        as="span"
                                        className="counter"
                                    /></h2>
                                    <p>Businesses Supported</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 d-flex justify-content-sm-center divider">
                                <div className="single-counter">
                                    <h2><Counter
                                        start={0}
                                        end={300}
                                        speed={5}
                                        forwardedRef={ref3}
                                        as="span"
                                        className="counter"
                                    />+</h2>
                                    <p>Projects Delivered</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 d-flex justify-content-sm-center divider">
                                <div className="single-counter">
                                    <h2><Counter
                                        start={0}
                                        end={20}
                                        speed={10}
                                        forwardedRef={ref3}
                                        as="span"
                                        className="counter"
                                    />+</h2>
                                    <p>Growth Experts</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 d-flex justify-content-lg-end justify-content-sm-center">
                                <div className="single-counter">
                                    <h2><Counter
                                        start={0}
                                        end={10}
                                        speed={100}
                                        forwardedRef={ref3}
                                        as="span"
                                        className="counter"
                                    />+</h2>
                                    <p>Industries Served</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-page-feature-section mb-130">
                <div className="container">
                    <div className="row justify-content-center mb-70 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="col-xl-6 col-lg-8">
                            <div className="section-title2">
                                <div className="shape-and-title-area">
                                    <svg width={88} height={64} viewBox="0 0 88 64" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M88 0V64H0L88 0Z" />
                                        <path d="M60 8L10 44V8H60Z" />
                                    </svg>
                                    <h2>Built for Business Growth</h2>
                                </div>
                                <p>We combine strategy, technology, and automation to build digital systems that scale with your business.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4 mb-50">
                        <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="single-feature">
                                <h4>Strategic<br></br>Expertise</h4>
                                <ul>
                                    <li>+ Digital Growth Strategy</li>
                                    <li>+ High-Performance Web Platforms</li>
                                    <li>+ Brand Positioning & Identity</li>
                                    <li>+ Conversion-Focused Design</li>
                                </ul>
                                <p>
                                    <svg width={22} height={22} viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M13.5263 8.297C10.5619 6.97028 8.38276 4.27662 7.77418 1C7.16559 4.27662 4.98647 6.97028 2.02207 8.297C1.45275 8.55833 0 8.96037 0 8.96037C0 8.96037 1.43312 9.36241 2.02207 9.62373C4.98647 10.9505 7.16559 13.6642 7.77418 16.9207C8.38276 13.6441 10.5619 10.9505 13.5263 9.62373C14.0956 9.36241 15.5484 8.96037 15.5484 8.96037C15.5484 8.96037 14.1152 8.55833 13.5263 8.297Z" />
                                            <path d="M20.8023 15.9137C19.0355 15.1297 17.7594 13.5216 17.3864 11.5918C17.033 13.5216 15.7373 15.1297 13.9705 15.9137C13.6367 16.0745 12.7729 16.2957 12.7729 16.2957C12.7729 16.2957 13.6171 16.5369 13.9705 16.6776C15.7373 17.4616 17.0134 19.0697 17.3864 20.9995C17.7594 19.0898 19.0355 17.4817 20.8023 16.6977C21.1361 16.5369 21.9999 16.3158 21.9999 16.3158C21.9999 16.3158 21.1361 16.0745 20.8023 15.9137Z" />
                                        </g>
                                    </svg>
                                    We start with strategy to ensure every digital asset contributes to business growth and revenue generation.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="single-feature">
                                <h4>Scalable<br></br> Technology</h4>
                                <ul>
                                    <li>+ Custom Web Development</li>
                                    <li>+ Marketing Automation Systems</li>
                                    <li>+ CRM & Workflow Integration</li>
                                    <li>+ AI-Powered Business Tools</li>

                                </ul>
                                <p>
                                    <svg width={22} height={22} viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M13.5263 8.297C10.5619 6.97028 8.38276 4.27662 7.77418 1C7.16559 4.27662 4.98647 6.97028 2.02207 8.297C1.45275 8.55833 0 8.96037 0 8.96037C0 8.96037 1.43312 9.36241 2.02207 9.62373C4.98647 10.9505 7.16559 13.6642 7.77418 16.9207C8.38276 13.6441 10.5619 10.9505 13.5263 9.62373C14.0956 9.36241 15.5484 8.96037 15.5484 8.96037C15.5484 8.96037 14.1152 8.55833 13.5263 8.297Z" />
                                            <path d="M20.8023 15.9137C19.0355 15.1297 17.7594 13.5216 17.3864 11.5918C17.033 13.5216 15.7373 15.1297 13.9705 15.9137C13.6367 16.0745 12.7729 16.2957 12.7729 16.2957C12.7729 16.2957 13.6171 16.5369 13.9705 16.6776C15.7373 17.4616 17.0134 19.0697 17.3864 20.9995C17.7594 19.0898 19.0355 17.4817 20.8023 16.6977C21.1361 16.5369 21.9999 16.3158 21.9999 16.3158C21.9999 16.3158 21.1361 16.0745 20.8023 15.9137Z" />
                                        </g>
                                    </svg>
                                    Our solutions are built for scalability, efficiency, and long-term digital transformation.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="single-feature">
                                <h4>Reliable<br></br>Execution</h4>
                                <ul>
                                    <li>+ Agile Development Process</li>
                                    <li>+ Performance Optimization</li>
                                    <li>+ Data-Driven Marketing</li>
                                    <li>+ Continuous Growth Optimization</li>
                                </ul>
                                <p>
                                    <svg width={22} height={22} viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M13.5263 8.297C10.5619 6.97028 8.38276 4.27662 7.77418 1C7.16559 4.27662 4.98647 6.97028 2.02207 8.297C1.45275 8.55833 0 8.96037 0 8.96037C0 8.96037 1.43312 9.36241 2.02207 9.62373C4.98647 10.9505 7.16559 13.6642 7.77418 16.9207C8.38276 13.6441 10.5619 10.9505 13.5263 9.62373C14.0956 9.36241 15.5484 8.96037 15.5484 8.96037C15.5484 8.96037 14.1152 8.55833 13.5263 8.297Z" />
                                            <path d="M20.8023 15.9137C19.0355 15.1297 17.7594 13.5216 17.3864 11.5918C17.033 13.5216 15.7373 15.1297 13.9705 15.9137C13.6367 16.0745 12.7729 16.2957 12.7729 16.2957C12.7729 16.2957 13.6171 16.5369 13.9705 16.6776C15.7373 17.4616 17.0134 19.0697 17.3864 20.9995C17.7594 19.0898 19.0355 17.4817 20.8023 16.6977C21.1361 16.5369 21.9999 16.3158 21.9999 16.3158C21.9999 16.3158 21.1361 16.0745 20.8023 15.9137Z" />
                                        </g>
                                    </svg>
                                    We focus on consistent improvement and measurable results.Delivering performance that drives real growth.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="col-xl-8 col-lg-10">
                            <div className="contact-btn-area two">
                                <h6>To Make Sure to Best Service Provide Our Clients.</h6>
                                <Link href="/contact" className="primary-btn3 two btn-hover">
                                    Start The Journey
                                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                    <span />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Home1processSection />
            <Home5AboutSection />
            <Home3PartnerSection />
            <Home5AwardSection />

            <Home5Footer />
        </>
    )
}

export default AboutPage
