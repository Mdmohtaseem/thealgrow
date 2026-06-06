"use client"
import ThrowableItems from "@/utils/ThrowableItems"
import Counter from "../common/Counter"
import { useRef } from "react";

const Home1CompanyInfoSection = () => {
    const ref3 = useRef(null);
    return (
        <div className="home1-company-info-section mb-80 mt-100">
            <div className="container">
                <div className="row mb-50 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <span>Company Info</span>
                            <h2>Number of Key</h2>
                        </div>
                    </div>
                </div>
                <div className="row g-4 justify-content-center">
                    <div className="col-xl-5 col-lg-6 col-md-7 d-md-block d-none wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="feature-wrap" id="feature-wrap">
                            <div className="title-area">
                                <h3>Grow Your Business on Digital Platform.</h3>
                            </div>
                            <ThrowableItems />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-5 wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="counter-wrap">
                            <div className="counter-content-area">
                                <div className="icon">
                                    <img src="/assets/img/home1/icon/folder-icon.svg" alt="" />
                                </div>
                                <div className="counter-content">
                                    <div className="number">
                                        <Counter
                                            start={0}
                                            end={10}
                                            speed={50}
                                            forwardedRef={ref3}
                                            as="h2"
                                            className="counter"
                                        />
                                        <span>K+</span>
                                    </div>
                                    <p>Succesfully Project Delivery.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home1CompanyInfoSection
