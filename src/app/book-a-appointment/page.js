import Home5Footer from '@/components/Footer/Home5Footer'
import Header3 from '@/components/header/Header3'
import CalendlyWidget from '@/components/CalendlyWidget'
import React from 'react'

export const metadata = {
    title: "Book Appointment - The Algrow",
    description: "Book a free Appointment with Us, Schedule a 1:1 meeting with us.",
};

const BookAppointmentPage = () => {
    return (
        <>
            <Header3 />

            {/* Breadcrumb Section Start */}
            <div className="breadcrumb-section mb-130">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="banner-content text-center">
                                <h1>Book Appointment</h1>
                                <ul className="breadcrumb-list justify-content-center">
                                    <li><a href="/">Home</a></li>
                                    <li>
                                        <svg width={25} height={6} viewBox="0 0 25 6" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM20 3.5L25 5.88675V0.113249L20 2.5V3.5ZM4.5 3.5H20.5V2.5H4.5V3.5Z" />
                                        </svg>
                                        Book Appointment
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Breadcrumb Section End */}

            {/* Appointment Section Start */}
            <div className="contact-page-top mb-130">
                <div className="container">

                    <div className="contact-form-wrap style-2">
                        <div className="section-title three text-center">
                            <span style={{ color: "var(--primary-color)", fontWeight: "600", marginBottom: "10px", display: "inline-block", fontSize: "18px" }}>Book a free Appointment with Us</span>
                            <h2>Schedule a 1:1 meeting with us.</h2>
                            <p>Select a date and time that works best for you to discuss your project requirements.</p>
                        </div>
                        <svg className="divider mb-4" height={6} viewBox="0 0 696 6" xmlns="http://www.w3.org/2000/svg" style={{ margin: "0 auto", display: "block", marginBottom: "30px" }}>
                            <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM691 3.5L696 5.88675V0.113249L691 2.5V3.5ZM4.5 3.5H691.5V2.5H4.5V3.5Z" fill="var(--primary-color)" />
                        </svg>

                        <CalendlyWidget url="https://calendly.com/team-thealgrow/discovery-call?hide_gdpr_banner=1" />
                    </div>
                </div>
            </div>
            {/* Appointment Section End */}

            < Home5Footer />
        </>
    )
}

export default BookAppointmentPage
