import Link from 'next/link'
import React from 'react'

const Home5ServiceSection = () => {
    return (
        <div className="home5-service-section mb-130">
            <div className="container">
                <div className="row g-4 justify-content-between align-items-center mb-60 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <div className="col-md-7">
                        <div className="section-title four">
                            <span>Industries We Specialize In</span>
                        </div>
                    </div>
                    <div className="col-md-5 d-flex justify-content-md-end justify-content-start">
                        <Link href="/service" className="view-btn dashed-outline">
                            Get a Growth Plan
                            <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="service-wrapper">

                    {/* Industry 1: Healthcare & Fitness */}
                    <div className="single-service mb-40">
                        <div className="row justify-content-between">
                            <div className="col-xl-5 col-lg-6">
                                <div className="service-content">
                                    <h2 className="mb-4">1. Healthcare &amp; Fitness</h2>
                                    <p className="mb-4" style={{ fontSize: '16px', color: '#888', lineHeight: '1.6' }}>We help healthcare providers, clinics, and fitness brands build trust-driven digital platforms that increase bookings, memberships, and long-term client engagement.</p>
                                    <ul>
                                        <li>
                                            <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5.65353 11.6968L7.56353 14.463C8.74893 12.7506 14.0179 4.386 17.0475 0.5C13.9099 6.4268 11.1823 12.6098 8.72913 18.823C8.37712 19.7142 7.12192 19.7294 6.75232 18.8454C5.58372 16.0514 4.32732 13.2748 2.95312 10.577C3.94112 10.3794 4.99472 10.7088 5.65332 11.6968H5.65353Z" />
                                            </svg>
                                            High-converting websites
                                        </li>
                                        <li>
                                            <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5.65353 11.6968L7.56353 14.463C8.74893 12.7506 14.0179 4.386 17.0475 0.5C13.9099 6.4268 11.1823 12.6098 8.72913 18.823C8.37712 19.7142 7.12192 19.7294 6.75232 18.8454C5.58372 16.0514 4.32732 13.2748 2.95312 10.577C3.94112 10.3794 4.99472 10.7088 5.65332 11.6968H5.65353Z" />
                                            </svg>
                                            Appointment &amp; booking systems
                                        </li>
                                        <li>
                                            <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5.65353 11.6968L7.56353 14.463C8.74893 12.7506 14.0179 4.386 17.0475 0.5C13.9099 6.4268 11.1823 12.6098 8.72913 18.823C8.37712 19.7142 7.12192 19.7294 6.75232 18.8454C5.58372 16.0514 4.32732 13.2748 2.95312 10.577C3.94112 10.3794 4.99472 10.7088 5.65332 11.6968H5.65353Z" />
                                            </svg>
                                            Lead generation funnels
                                        </li>
                                        <li>
                                            <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5.65353 11.6968L7.56353 14.463C8.74893 12.7506 14.0179 4.386 17.0475 0.5C13.9099 6.4268 11.1823 12.6098 8.72913 18.823C8.37712 19.7142 7.12192 19.7294 6.75232 18.8454C5.58372 16.0514 4.32732 13.2748 2.95312 10.577C3.94112 10.3794 4.99472 10.7088 5.65332 11.6968H5.65353Z" />
                                            </svg>
                                            Patient/member retention automation
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6 d-lg-block d-none">
                                <div className="service-img">
                                    <img src="/assets/img/home3/Pharmacy.png" alt="Healthcare & Fitness Digital Platforms" />
                                </div>
                            </div>
                        </div>
                        <svg className="vector" width={750} height={421} viewBox="0 0 750 421" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path d="M0 -10C18.5 -8.5 44.5 5.5 58 32C75.482 66.3166 76.5 192 220.5 262C360.839 330.22 673 255.5 760 421" />
                                <path d="M35 -26C53.5 -24.5 79.5 -10.5 93 16C110.482 50.3166 111.5 176 255.5 246C395.839 314.22 708 239.5 795 405" />
                                <path d="M70 -42C88.5 -40.5 114.5 -26.5 128 0C145.482 34.3166 146.5 160 290.5 230C430.839 298.22 743 223.5 830 389" />
                                <path d="M105 -58C123.5 -56.5 149.5 -42.5 163 -16C180.482 18.3166 181.5 144 325.5 214C465.839 282.22 778 207.5 865 373" />
                                <path d="M140 -74C158.5 -72.5 184.5 -58.5 198 -32C215.482 2.31659 216.5 128 360.5 198C500.839 266.22 813 191.5 900 357" />
                            </g>
                        </svg>
                    </div>

                    {/* Industry 2: eCommerce & DTC */}
                    <div className="single-service mb-40">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-xl-6 col-lg-6">
                                <div className="service-content">
                                    <h2 className="mb-4">2. eCommerce &amp; DTC Brands</h2>
                                    <p className="mb-4" style={{ fontSize: '16px', color: '#888', lineHeight: '1.6' }}>We work with online stores and product brands to scale revenue through optimized storefronts, performance marketing, and data-driven growth strategies.</p>
                                    <ul>
                                        <li>
                                            <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5.65353 11.6968L7.56353 14.463C8.74893 12.7506 14.0179 4.386 17.0475 0.5C13.9099 6.4268 11.1823 12.6098 8.72913 18.823C8.37712 19.7142 7.12192 19.7294 6.75232 18.8454C5.58372 16.0514 4.32732 13.2748 2.95312 10.577C3.94112 10.3794 4.99472 10.7088 5.65332 11.6968H5.65353Z" />
                                            </svg>
                                            Shopify &amp; WooCommerce development
                                        </li>
                                        <li>
                                            <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5.65353 11.6968L7.56353 14.463C8.74893 12.7506 14.0179 4.386 17.0475 0.5C13.9099 6.4268 11.1823 12.6098 8.72913 18.823C8.37712 19.7142 7.12192 19.7294 6.75232 18.8454C5.58372 16.0514 4.32732 13.2748 2.95312 10.577C3.94112 10.3794 4.99472 10.7088 5.65332 11.6968H5.65353Z" />
                                            </svg>
                                            Conversion optimization
                                        </li>
                                        <li>
                                            <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5.65353 11.6968L7.56353 14.463C8.74893 12.7506 14.0179 4.386 17.0475 0.5C13.9099 6.4268 11.1823 12.6098 8.72913 18.823C8.37712 19.7142 7.12192 19.7294 6.75232 18.8454C5.58372 16.0514 4.32732 13.2748 2.95312 10.577C3.94112 10.3794 4.99472 10.7088 5.65332 11.6968H5.65353Z" />
                                            </svg>
                                            Paid ads scaling
                                        </li>
                                        <li>
                                            <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5.65353 11.6968L7.56353 14.463C8.74893 12.7506 14.0179 4.386 17.0475 0.5C13.9099 6.4268 11.1823 12.6098 8.72913 18.823C8.37712 19.7142 7.12192 19.7294 6.75232 18.8454C5.58372 16.0514 4.32732 13.2748 2.95312 10.577C3.94112 10.3794 4.99472 10.7088 5.65332 11.6968H5.65353Z" />
                                            </svg>
                                            Customer lifecycle automation
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 d-lg-block d-none">
                                <div className="service-img">
                                    <div className="service-img">
                                        <img src="/assets/img/home3/Buying goods via the internet.png" alt="Consulting & Service Businesses" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <svg className="vector" width={561} height={504} viewBox="0 0 561 504" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path d="M0 505L51 165.5L181.5 218.5L258 0L389 115L567.5 137.5" />
                                <path d="M13 505L59 191L189.5 244L266 25.5L397 140.5L563 161" />
                                <path d="M27 533L72 225L202.5 278L279 59.5L410 174.5L564.5 194.5" />
                                <path d="M40 567L85 259L215.5 312L292 93.5L423 208.5L570.5 228" />
                                <path d="M53 601L98 293L228.5 346L305 127.5L436 242.5L583.5 262" />
                                <path d="M66 635L111 327L241.5 380L318 161.5L449 276.5L596.5 296" />
                                <path d="M79 669L124 361L254.5 414L331 195.5L462 310.5L609.5 330" />
                            </g>
                        </svg>
                    </div>

                    {/* Industry 3: Consulting & Service */}
                    <div className="single-service mb-40">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-xl-6 col-lg-6">
                                <div className="service-content">
                                    <h2 className="mb-4">3. Consulting &amp; Service Businesses</h2>
                                    <p className="mb-4" style={{ fontSize: '16px', color: '#888', lineHeight: '1.6' }}>We help consultants, coaches, and service providers establish authority and generate consistent qualified leads through strategic digital systems.</p>
                                    <ul>
                                        <li>
                                            <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5.65353 11.6968L7.56353 14.463C8.74893 12.7506 14.0179 4.386 17.0475 0.5C13.9099 6.4268 11.1823 12.6098 8.72913 18.823C8.37712 19.7142 7.12192 19.7294 6.75232 18.8454C5.58372 16.0514 4.32732 13.2748 2.95312 10.577C3.94112 10.3794 4.99472 10.7088 5.65332 11.6968H5.65353Z" />
                                            </svg>
                                            Authority-driven websites
                                        </li>
                                        <li>
                                            <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5.65353 11.6968L7.56353 14.463C8.74893 12.7506 14.0179 4.386 17.0475 0.5C13.9099 6.4268 11.1823 12.6098 8.72913 18.823C8.37712 19.7142 7.12192 19.7294 6.75232 18.8454C5.58372 16.0514 4.32732 13.2748 2.95312 10.577C3.94112 10.3794 4.99472 10.7088 5.65332 11.6968H5.65353Z" />
                                            </svg>
                                            Funnel &amp; landing page design
                                        </li>
                                        <li>
                                            <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5.65353 11.6968L7.56353 14.463C8.74893 12.7506 14.0179 4.386 17.0475 0.5C13.9099 6.4268 11.1823 12.6098 8.72913 18.823C8.37712 19.7142 7.12192 19.7294 6.75232 18.8454C5.58372 16.0514 4.32732 13.2748 2.95312 10.577C3.94112 10.3794 4.99472 10.7088 5.65332 11.6968H5.65353Z" />
                                            </svg>
                                            Lead generation campaigns
                                        </li>
                                        <li>
                                            <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5.65353 11.6968L7.56353 14.463C8.74893 12.7506 14.0179 4.386 17.0475 0.5C13.9099 6.4268 11.1823 12.6098 8.72913 18.823C8.37712 19.7142 7.12192 19.7294 6.75232 18.8454C5.58372 16.0514 4.32732 13.2748 2.95312 10.577C3.94112 10.3794 4.99472 10.7088 5.65332 11.6968H5.65353Z" />
                                            </svg>
                                            CRM &amp; automation setup
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 d-lg-block d-none">
                                <div className="service-img">
                                    <img src="/assets/img/home3/Business 1.png" alt="Consulting & Service Businesses" />
                                </div>
                            </div>
                        </div>
                        <svg className="vector" width={750} height={421} viewBox="0 0 750 421" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path d="M0 -10C18.5 -8.5 44.5 5.5 58 32C75.482 66.3166 76.5 192 220.5 262C360.839 330.22 673 255.5 760 421" />
                                <path d="M35 -26C53.5 -24.5 79.5 -10.5 93 16C110.482 50.3166 111.5 176 255.5 246C395.839 314.22 708 239.5 795 405" />
                                <path d="M70 -42C88.5 -40.5 114.5 -26.5 128 0C145.482 34.3166 146.5 160 290.5 230C430.839 298.22 743 223.5 830 389" />
                                <path d="M105 -58C123.5 -56.5 149.5 -42.5 163 -16C180.482 18.3166 181.5 144 325.5 214C465.839 282.22 778 207.5 865 373" />
                                <path d="M140 -74C158.5 -72.5 184.5 -58.5 198 -32C215.482 2.31659 216.5 128 360.5 198C500.839 266.22 813 191.5 900 357" />
                            </g>
                        </svg>
                    </div>

                    {/* Industry 4: Startups & Tech */}
                    <div className="single-service">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-xl-6 col-lg-6">
                                <div className="service-content">
                                    <h2 className="mb-4">4. Startups &amp; Tech Companies</h2>
                                    <p className="mb-4" style={{ fontSize: '16px', color: '#888', lineHeight: '1.6' }}>We partner with growing startups to build scalable digital infrastructure, strong brand positioning, and customer acquisition systems.</p>
                                    <ul>
                                        <li>
                                            <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5.65353 11.6968L7.56353 14.463C8.74893 12.7506 14.0179 4.386 17.0475 0.5C13.9099 6.4268 11.1823 12.6098 8.72913 18.823C8.37712 19.7142 7.12192 19.7294 6.75232 18.8454C5.58372 16.0514 4.32732 13.2748 2.95312 10.577C3.94112 10.3794 4.99472 10.7088 5.65332 11.6968H5.65353Z" />
                                            </svg>
                                            Web &amp; app development
                                        </li>
                                        <li>
                                            <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5.65353 11.6968L7.56353 14.463C8.74893 12.7506 14.0179 4.386 17.0475 0.5C13.9099 6.4268 11.1823 12.6098 8.72913 18.823C8.37712 19.7142 7.12192 19.7294 6.75232 18.8454C5.58372 16.0514 4.32732 13.2748 2.95312 10.577C3.94112 10.3794 4.99472 10.7088 5.65332 11.6968H5.65353Z" />
                                            </svg>
                                            MVP launches
                                        </li>
                                        <li>
                                            <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5.65353 11.6968L7.56353 14.463C8.74893 12.7506 14.0179 4.386 17.0475 0.5C13.9099 6.4268 11.1823 12.6098 8.72913 18.823C8.37712 19.7142 7.12192 19.7294 6.75232 18.8454C5.58372 16.0514 4.32732 13.2748 2.95312 10.577C3.94112 10.3794 4.99472 10.7088 5.65332 11.6968H5.65353Z" />
                                            </svg>
                                            Growth marketing
                                        </li>
                                        <li>
                                            <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5.65353 11.6968L7.56353 14.463C8.74893 12.7506 14.0179 4.386 17.0475 0.5C13.9099 6.4268 11.1823 12.6098 8.72913 18.823C8.37712 19.7142 7.12192 19.7294 6.75232 18.8454C5.58372 16.0514 4.32732 13.2748 2.95312 10.577C3.94112 10.3794 4.99472 10.7088 5.65332 11.6968H5.65353Z" />
                                            </svg>
                                            AI automation systems
                                        </li>
                                    </ul>
                                    <Link className="primary-btn5 white-bg" href="/service/details">
                                        Get a Growth Plan
                                        <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 d-lg-block d-none">
                                <div className="service-img">
                                    <img src="/assets/img/home3/Analyzing financial growth.png" alt="Startups & Tech Companies" />
                                </div>
                            </div>
                        </div>
                        <svg className="vector" width={561} height={504} viewBox="0 0 561 504" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path d="M167 507L1 262.5L244 268L214.5 77L361 109.5L564 21.5" />
                                <path d="M196 506L37 270.689L260.67 275.745L233.517 100.173L368.364 130.048L565 47" />
                                <path d="M216.5 505L73 296.689L296.67 301.745L269.517 126.173L404.364 156.048L566.5 89" />
                                <path d="M248.449 524L109 322.689L332.67 327.745L305.517 152.173L440.364 182.048L595 120" />
                                <path d="M284.449 550L145 348.689L368.67 353.745L341.517 178.173L476.364 208.048L631 146" />
                                <path d="M320.449 576L181 374.689L404.67 379.745L377.517 204.173L512.364 234.048L667 172" />
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home5ServiceSection
