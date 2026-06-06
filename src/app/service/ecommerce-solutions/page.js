"use client"
import React from 'react'
import Home5Footer from '@/components/Footer/Home5Footer'
import Header3 from '@/components/header/Header3'
import Link from 'next/link'

const ECommerceDetailsPage = () => {
    return (
        <div>
            <Header3 />

            {/* Breadcrumb Section Start */}
            <div className="breadcrumb-section mb-130">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10">
                            <div className="banner-content">
                                <h1>E-Commerce Solutions</h1>
                                <ul className="breadcrumb-list">
                                    <li><a href="/">Home</a></li>
                                    <li>
                                        <svg width={25} height={6} viewBox="0 0 25 6" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM20 3.5L25 5.88675V0.113249L20 2.5V3.5ZM4.5 3.5H20.5V2.5H4.5V3.5Z" />
                                        </svg>
                                        E-Commerce Solutions
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Breadcrumb Section End */}
            {/* Service Details Page Start */}
            <div className="service-details-page mb-130">
                <div className="container">
                    <div className="details-content-wrap mb-130">
                        <div className="post-thumb mb-70">
                            <img src="/assets/img/innerpages/service-details-thumb-img1.jpg" alt="" />
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-xl-8 col-lg-10">
                                <div className="post-title-and-tag">
                                    <h2>E-Commerce Solutions</h2>
                                    <ul className="tag-list">
                                        <li><span>Shopify</span></li>
                                        <li><span>WooCommerce</span></li>
                                        <li><span>Payment Gateway</span></li>
                                        <li><span>Inventory</span></li>
                                    </ul>
                                    <svg className="divider-line" width={873} height={6} viewBox="0 0 873 6" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM867.5 3.5L872.5 5.88675V0.113249L867.5 2.5V3.5ZM4.5 3.5H868V2.5H4.5V3.5Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="row gy-4 justify-content-between mb-70">
                            <div className="col-xl-5 col-lg-6">
                                <h2>Service Overview</h2>
                                <span className="line-break" />
                                <p>Build powerful online stores that scale. Our e-commerce solutions are designed to provide a seamless shopping experience for your customers while providing you with all the tools needed to manage and grow your business.</p>
                                <span className="line-break" />
                                <p>From custom store design to integration with major payment gateways and logistics providers, we cover everything you need for e-commerce excellence.</p>
                            </div>
                            <div className="col-xl-5 col-lg-6">
                                <h2>Key Feature</h2>
                                <span className="line-break" />
                                <p>Here are some key features of E-Commerce Solutions that highlight:</p>
                                <span className="line-break" />
                                <ul className="listing two">
                                    <li>
                                        <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M4.5236 9.35783L6.0516 11.5708C6.99992 10.2009 11.2151 3.50919 13.6388 0.400391C11.1287 5.14183 8.94664 10.0882 6.98408 15.0588C6.70248 15.7717 5.69832 15.7839 5.40264 15.0767C4.46776 12.8415 3.46264 10.6202 2.36328 8.46199C3.15368 8.30391 3.99656 8.56743 4.52344 9.35783H4.5236Z" />
                                        </svg>
                                        Custom Storefront Design
                                    </li>
                                    <li>
                                        <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M4.5236 9.35783L6.0516 11.5708C6.99992 10.2009 11.2151 3.50919 13.6388 0.400391C11.1287 5.14183 8.94664 10.0882 6.98408 15.0588C6.70248 15.7717 5.69832 15.7839 5.40264 15.0767C4.46776 12.8415 3.46264 10.6202 2.36328 8.46199C3.15368 8.30391 3.99656 8.56743 4.52344 9.35783H4.5236Z" />
                                        </svg>
                                        Seamless Payment Integration
                                    </li>
                                    <li>
                                        <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M4.5236 9.35783L6.0516 11.5708C6.99992 10.2009 11.2151 3.50919 13.6388 0.400391C11.1287 5.14183 8.94664 10.0882 6.98408 15.0588C6.70248 15.7717 5.69832 15.7839 5.40264 15.0767C4.46776 12.8415 3.46264 10.6202 2.36328 8.46199C3.15368 8.30391 3.99656 8.56743 4.52344 9.35783H4.5236Z" />
                                        </svg>
                                        Inventory Management
                                    </li>
                                    <li>
                                        <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M4.5236 9.35783L6.0516 11.5708C6.99992 10.2009 11.2151 3.50919 13.6388 0.400391C11.1287 5.14183 8.94664 10.0882 6.98408 15.0588C6.70248 15.7717 5.69832 15.7839 5.40264 15.0767C4.46776 12.8415 3.46264 10.6202 2.36328 8.46199C3.15368 8.30391 3.99656 8.56743 4.52344 9.35783H4.5236Z" />
                                        </svg>
                                        Marketing Automation
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <span className="line-break" />
                        <span className="line-break" />
                        <span className="line-break" />
                        <h2>Why Choose Us?</h2>
                        <span className="line-break" />
                        <p className="fixed-width">Turn visitors into loyal customers. Our e-commerce strategies are built on converting data into sales, ensuring your online store performs at its peak.</p>
                        <span className="line-break" />
                        <span className="line-break" />
                        <div className="row g-4">
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="single-service two">
                                    <h5><span>1.</span> E-com Platform Experts</h5>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="single-service">
                                    <h5><span>2.</span> Seamless Checkout flow</h5>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="single-service three">
                                    <h5><span>3.</span> Inventory Sync Focus</h5>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="single-service">
                                    <h5><span>4.</span> Multi-channel Support</h5>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="single-service">
                                    <h5><span>5.</span> Sales Volume Increase</h5>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="single-service four">
                                    <h5><span>6.</span> Customer Lifetime Value</h5>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="single-service">
                                    <h5><span>7.</span> Store Deployment Speed</h5>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 d-flex align-items-center justify-content-sm-center">
                                <Link href="/contact" className="contact-btn">
                                    Start The Journey
                                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <span className="line-break" />
                        <span className="line-break" />
                        <span className="line-break" />
                        <div className="img-grp">
                            <div className="row g-4">
                                <div className="col-lg-8 col-md-7">
                                    <img src="/assets/img/innerpages/service-details-img1.jpg" alt="" />
                                </div>
                                <div className="col-lg-4 col-md-5">
                                    <img src="/assets/img/innerpages/service-details-img2.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Service Details Page End */}


            <Home5Footer />
        </div>
    )
}

export default ECommerceDetailsPage
