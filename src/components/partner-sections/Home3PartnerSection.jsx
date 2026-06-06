import React from 'react'

import LogoLoop from '../common/LogoLoop'
// import { FaApple, FaGoogle, FaShopify, FaMicrosoft, FaAmazon, FaUber, FaSpotify, FaPaypal } from 'react-icons/fa';

const brandLogos = [
    { src: "/assets/img/home3/Yahoo!_Finance_logo_2021.png", title: "Yahoo Finance", href: "#", width: 154, height: 40 },
    { src: "/assets/img/home3/Destiny-Logo-Website-600x151-1.webp", title: "Yahoo Finance", href: "#", width: 154, height: 40 },
    { src: "/assets/img/home3/Untitled design (2).svg", title: "Yahoo Finance", href: "#", width: 154, height: 40 },
    { src: "/assets/img/home3/Untitled design (5).svg", title: "Yahoo Finance", href: "#", width: 154, height: 40 },
    { src: "/assets/img/home3/Untitled design (12).svg", title: "Yahoo Finance", href: "#", width: 154, height: 40 },
    { src: "/assets/img/home3/Untitled design (13).svg", title: "Yahoo Finance", href: "#", width: 154, height: 40 },
    { src: "/assets/img/home3/Untitled design (14).svg", title: "Yahoo Finance", href: "#", width: 154, height: 40 },
    { src: "/assets/img/home3/Untitled design (16).svg", title: "Yahoo Finance", href: "#", width: 154, height: 40 },
    { src: "/assets/img/home3/Untitled design (18).svg", title: "Yahoo Finance", href: "#", width: 154, height: 40 },
];

const Home3PartnerSection = () => {
    return (
        <div className="partner-area three four mb-130">
            <div className="container">
                {/* Mobile-only Video Area added above the stats */}
                <div className="home3-video-wrapper d-block d-lg-none mb-4" style={{ marginTop: '-4rem' }}>
                    <div className="video-area position-relative w-100" style={{ height: '300px', borderRadius: '20px', overflow: 'hidden' }}>
                        <video autoPlay loop muted playsInline src="/assets/video/home4-contact-video2.mp4" className="w-100 h-100" style={{ objectFit: 'cover' }} />
                    </div>
                </div>

                <div className="partner-title-area wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <h6>Our Globally <span>20K+</span> Clients.</h6>
                    <h6>Our Happy Cleints <span>90%+</span></h6>
                </div>
                <div className="partner-wrap">
                    <style jsx global>{`
                        /* Dynamic coloring for icons based on theme */
                        .partner-wrap .logoloop img {
                             filter: brightness(0) invert(1); /* Default (Dark Mode) - White logos */
                             transition: filter 0.3s ease;
                        }
                        /* When body DOES NOT have .dark (Light Mode), revert to default */
                        body:not(.dark) .partner-wrap .logoloop img {
                            filter: none; /* Light Mode - Default logos */
                            opacity: 1;
                        }
                    `}</style>
                    <LogoLoop
                        logos={brandLogos}
                        speed={80} // Slightly slower for premium feel
                        direction="left"
                        logoHeight={35} // Matched to reference (~30-40px)
                        gap={80} // Generous gap for premium feel
                        hoverSpeed={0}
                        scaleOnHover
                        fadeOut={true} // Enabled mask-fade
                        ariaLabel="Our Premium Partners"
                    />
                </div>
            </div>
        </div>
    )
}
export default Home3PartnerSection
