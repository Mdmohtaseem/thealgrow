"use client";
import React, { useMemo } from "react";
import Home5Footer from '@/components/Footer/Home5Footer'
import Header3 from '@/components/header/Header3'
import Link from 'next/link'
import portfolioData from '@/data/portfolio-data.json'
import PortfolioPagination from '@/components/portfolio-section/PortfolioPagination'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Autoplay,
    EffectFade,
    Navigation,
    Pagination,
} from "swiper";
import { notFound } from 'next/navigation'

SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const PortfolioDetailsPage = ({ params }) => {
    const { slug } = params;
    const data = portfolioData.find(item => item.slug === slug);

    if (!data) {
        notFound();
    }

    const details = data.details;

    const settings = useMemo(() => {
        return {
            slidesPerView: "auto",
            speed: 1500,
            spaceBetween: 30,
            loop: true,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".post-slider-next",
                prevEl: ".post-slider-prev",
            },
        };
    }, []);

    return (
        <>
            <Header3 />

            {/* Breadcrumb Section Start */}
            <div className="breadcrumb-section mb-130">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="banner-content">
                                <h1>Portfolio Details</h1>
                                <ul className="breadcrumb-list">
                                    <li><a href="/">Home</a></li>
                                    <li>
                                        <svg width={25} height={6} viewBox="0 0 25 6" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM20 3.5L25 5.88675V0.113249L20 2.5V3.5ZM4.5 3.5H20.5V2.5H4.5V3.5Z" />
                                        </svg>
                                        Portfolio Details
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Breadcrumb Section End */}
            {/* Portfolio Details Page Start */}
            <div className="portfolio-details-page mb-130">
                <div className="container">
                    <div className="details-content-wrap portfolio-details mb-130">
                        <div className="post-title-and-tag">
                            <h2>{data.detailsTitle}</h2>
                            <ul className="tag-list">
                                {details?.tags?.map((tag, idx) => (
                                    <li key={idx}><span>{tag}</span></li>
                                ))}
                            </ul>
                        </div>
                        <div className="post-thumb mb-70">
                            <Swiper {...settings} className="swiper service-details-post-slider">
                                <div className="swiper-wrapper">
                                    {details?.sliderImages?.map((img, idx) => (
                                        <SwiperSlide key={idx} className="swiper-slide">
                                            <img src={img} alt="" />
                                        </SwiperSlide>
                                    ))}
                                </div>
                            </Swiper>
                            <div className="row justify-content-center">
                                <div className="col-xl-8 col-lg-10">
                                    <div className="portfolio-details-info-area">
                                        <ul className="info-box">
                                            <li className="info-item"><strong>Industry:</strong> {details?.info?.industry}</li>
                                            <li className="info-item"><strong>Clients:</strong> {details?.info?.clients}</li>
                                            <li className="info-item"><strong>Solution:</strong> {details?.info?.solution}</li>
                                            <li className="info-item"><strong>Date:</strong> {details?.info?.date}</li>
                                        </ul>
                                        <div className="btn-area">
                                            <Link href={`https://${details?.info?.link}`} className="primary-btn3 btn-hover" target="_blank">
                                                {details?.info?.link}
                                                <span />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-btn-grp">
                                <div style={{ cursor: "pointer" }} className="slider-btn post-slider-prev">
                                    <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M11.002 13.0005C10.002 10.5005 5.00195 8.00049 2.00195 7.00049C5.00195 6.00049 9.50195 4.50049 11.002 1.00049" strokeWidth="1.5" strokeLinecap="round" />
                                        </g>
                                    </svg>
                                </div>
                                <div style={{ cursor: "pointer" }} className="slider-btn post-slider-next">
                                    <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M2.99805 13.0005C3.99805 10.5005 8.99805 8.00049 11.998 7.00049C8.99805 6.00049 4.49805 4.50049 2.99805 1.00049" strokeWidth="1.5" strokeLinecap="round" />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <h2>Projects Summary</h2>
                        <span className="line-break" />
                        <div className="row g-4 justify-content-between">
                            <div className="col-xl-5 col-lg-6">
                                <h5>Client Needs:</h5>
                                <span className="line-break two" />
                                <p>{details?.summary?.clientNeeds}</p>
                            </div>
                            <div className="col-xl-5 col-lg-6">
                                <h5>Our Approach:</h5>
                                <span className="line-break two" />
                                <p dangerouslySetInnerHTML={{ __html: details?.summary?.ourApproach?.replace(/complete website redesign/g, '<span>complete website redesign</span>')?.replace(/SEO optimization strategy./g, '<span>SEO optimization strategy.</span>') }} />
                            </div>
                        </div>
                        <span className="line-break" />
                        <span className="line-break" />
                        <span className="line-break" />
                        <div className="row gy-5 justify-content-between">
                            <div className="col-xl-5 col-lg-6">
                                <h2>Service Provide</h2>
                                <span className="line-break" />
                                <p>{details?.services?.description}</p>
                                <span className="line-break" />
                                <ul className="listing four">
                                    {details?.services?.points?.map((point, idx) => (
                                        <li key={idx}>
                                            <svg width={18} height={18} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                                                <g>
                                                    <path d="M15.75 1.125C16.0484 1.125 16.3345 1.24353 16.5455 1.4545C16.7565 1.66548 16.875 1.95163 16.875 2.25V15.75C16.875 16.0484 16.7565 16.3345 16.5455 16.5455C16.3345 16.7565 16.0484 16.875 15.75 16.875H2.25C1.95163 16.875 1.66548 16.7565 1.4545 16.5455C1.24353 16.3345 1.125 16.0484 1.125 15.75V2.25C1.125 1.95163 1.24353 1.66548 1.4545 1.4545C1.66548 1.24353 1.95163 1.125 2.25 1.125H15.75ZM2.25 0C1.65326 0 1.08097 0.237053 0.65901 0.65901C0.237053 1.08097 0 1.65326 0 2.25L0 15.75C0 16.3467 0.237053 16.919 0.65901 17.341C1.08097 17.7629 1.65326 18 2.25 18H15.75C16.3467 18 16.919 17.7629 17.341 17.341C17.7629 16.919 18 16.3467 18 15.75V2.25C18 1.65326 17.7629 1.08097 17.341 0.65901C16.919 0.237053 16.3467 0 15.75 0L2.25 0Z" />
                                                    <path d="M7.71176 5.22678C7.76414 5.27903 7.8057 5.3411 7.83406 5.40944C7.86242 5.47778 7.87701 5.55104 7.87701 5.62503C7.87701 5.69902 7.86242 5.77228 7.83406 5.84062C7.8057 5.90895 7.76414 5.97103 7.71176 6.02328L4.73388 9.00003L7.71176 11.9768C7.81738 12.0824 7.87672 12.2257 7.87672 12.375C7.87672 12.5244 7.81738 12.6677 7.71176 12.7733C7.60613 12.8789 7.46288 12.9382 7.31351 12.9382C7.16413 12.9382 7.02088 12.8789 6.91526 12.7733L3.54026 9.39828C3.48787 9.34603 3.44631 9.28395 3.41795 9.21562C3.3896 9.14728 3.375 9.07402 3.375 9.00003C3.375 8.92604 3.3896 8.85278 3.41795 8.78444C3.44631 8.7161 3.48787 8.65403 3.54026 8.60178L6.91526 5.22678C6.96751 5.17439 7.02958 5.13283 7.09792 5.10448C7.16626 5.07612 7.23952 5.06152 7.31351 5.06152C7.38749 5.06152 7.46076 5.07612 7.52909 5.10448C7.59743 5.13283 7.6595 5.17439 7.71176 5.22678ZM10.2903 5.22678C10.2379 5.27903 10.1963 5.3411 10.168 5.40944C10.1396 5.47778 10.125 5.55104 10.125 5.62503C10.125 5.69902 10.1396 5.77228 10.168 5.84062C10.1963 5.90895 10.2379 5.97103 10.2903 6.02328L13.2681 9.00003L10.2903 11.9768C10.1846 12.0824 10.1253 12.2257 10.1253 12.375C10.1253 12.5244 10.1846 12.6677 10.2903 12.7733C10.3959 12.8789 10.5391 12.9382 10.6885 12.9382C10.8379 12.9382 10.9811 12.8789 11.0868 12.7733L14.4618 9.39828C14.5141 9.34603 14.5557 9.28395 14.5841 9.21562C14.6124 9.14728 14.627 9.07402 14.627 9.00003C14.627 8.92604 14.6124 8.85278 14.5841 8.78444C14.5557 8.7161 14.5141 8.65403 14.4618 8.60178L11.0868 5.22678C11.0345 5.17439 10.9724 5.13283 10.9041 5.10448C10.8358 5.07612 10.7625 5.06152 10.6885 5.06152C10.6145 5.06152 10.5413 5.07612 10.4729 5.10448C10.4046 5.13283 10.3425 5.17439 10.2903 5.22678Z" />
                                                </g>
                                            </svg>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <span className="line-break" />
                        <span className="line-break" />
                        <span className="line-break" />
                        <div className="img-grp">
                            <div className="row g-lg-4 g-md-3 g-4">
                                {details?.galleryImages?.map((img, idx) => (
                                    <div key={idx} className={`col-lg-${idx === 1 ? '5' : idx === 0 ? '4' : '3'} col-md-${idx === 1 ? '5' : idx === 0 ? '4' : '3'}`}>
                                        <img src={img} alt="" />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <span className="line-break" />
                        <span className="line-break" />
                        <span className="line-break" />
                        <div className="row gy-5 justify-content-between">
                            <div className="col-xl-5 col-lg-6">
                                <h2>Results / Success Metrics</h2>
                                <span className="line-break" />
                                <p>Present measurable results achieved after the project launch. This section should be data-driven to show the impact of your work, such as:</p>
                                <span className="line-break" />
                                <ul className="listing two">
                                    {details?.results?.points?.map((point, idx) => (
                                        <li key={idx}>
                                            <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M4.5236 9.35783L6.0516 11.5708C6.99992 10.2009 11.2151 3.50919 13.6388 0.400391C11.1287 5.14183 8.94664 10.0882 6.98408 15.0588C6.70248 15.7717 5.69832 15.7839 5.40264 15.0767C4.46776 12.8415 3.46264 10.6202 2.36328 8.46199C3.15368 8.30391 3.99656 8.56743 4.52344 9.35783H4.5236Z" />
                                            </svg>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="col-xl-5 col-lg-6">
                                <div className="testimonial-area">
                                    <p>{details?.testimonial?.content}</p>
                                    <span>{details?.testimonial?.clientName}</span>
                                    <svg className="quote" width={106} height={96} viewBox="0 0 106 96" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M74.9098 0.333984C56.8573 0.333984 43.8239 15.1213 43.8239 37.0192C43.9369 68.8313 68.0426 91.3236 102.819 95.6415C106.041 96.0452 107.284 91.604 104.317 90.2974C90.9784 84.4094 84.2356 76.94 83.3652 69.5491C82.7152 64.0256 85.739 59.1862 89.5428 58.2778C99.3942 55.9282 105.996 43.754 105.996 31.176C105.996 22.9962 102.721 15.1514 96.8909 9.36741C91.0611 3.5834 83.1543 0.333984 74.9098 0.333984ZM7.08593 0.333984C-10.9665 0.333984 -24 15.1213 -24 37.0192C-23.887 68.8313 0.218765 91.3236 34.9954 95.6415C38.2171 96.0452 39.4605 91.604 36.4932 90.2974C23.1545 84.4094 16.4117 76.94 15.5413 69.5491C14.8913 64.0256 17.9151 59.1862 21.7189 58.2778C31.5703 55.9282 38.1719 43.754 38.1719 31.176C38.1719 22.9962 34.8968 15.1514 29.067 9.36741C23.2373 3.5834 15.3304 0.333984 7.08593 0.333984Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <span className="line-break" />
                        <span className="line-break" />
                        <span className="line-break" />
                        <img src={details?.finalImage} alt="" />
                        <span className="line-break" />
                        <span className="line-break" />
                        <div className="social-area">
                            <h6>Share:</h6>
                            <ul className="social-link">
                                <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                                <li><a href="https://www.linkedin.com/"><i className="bx bxl-linkedin" /></a></li>
                                <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a></li>
                            </ul>
                        </div>
                    </div>
                    <PortfolioPagination currentOrder={data.order} />
                </div>
            </div>
            {/* Portfolio Details Page End */}

            <Home5Footer />
        </>
    )
}

export default PortfolioDetailsPage
