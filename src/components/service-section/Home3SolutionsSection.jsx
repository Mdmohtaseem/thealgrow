import Link from 'next/link'
import { FaWordpress, FaJava } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import { SiGoogleads, SiGoogleanalytics, SiMailchimp, SiShopify, SiAftership, SiFlutter, SiKotlin } from "react-icons/si";

const Home3SolutionsSection = () => {
    return (
        <div className="home1-service-section mb-130">
            <div className="container">
                <div className="row mb-50 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <div className="col-lg-12">
                        <div className="section-title white">
                            <span>Smart Solution</span>
                            <h2>Digital Growth Solutions.</h2>
                            <p>We provide a wide range of services aimed at helping <span>Businesses, Organizations.</span></p>
                        </div>
                    </div>
                </div>
                <div className="row gy-lg-5 gy-4">
                    <div className="col-xl-4 col-lg-6 col-md-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="service-card magnetic-item">
                            <h3><Link href="/service/web-development">Web Development <br />Solutions</Link></h3>
                            <ul>
                                <li><img src="/assets/img/home1/icon/html-icon.svg" alt="" /></li>
                                <li><img src="/assets/img/home1/icon/react-icon.svg" alt="" /></li>
                                <li><img src="/assets/img/home1/icon/jquiry-icon.svg" alt="" /></li>
                                <li><img src="/assets/img/home1/icon/javascript-icon.svg" alt="" /></li>
                                <li><FaWordpress size={28} style={{ color: '#21759b' }} /></li>
                            </ul>
                            <p>High-performance websites engineered for speed, scalability, and conversion.</p>
                            <Link href="/service/web-development" className="learn-btn">
                                View Details
                                <svg width={9} height={9} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 8L8 1M8 1C6.44444 1.29167 3.04167 1.875 1 1M8 1C7.70833 2.45833 7.125 5.66667 8 8" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                        <div className="service-card magnetic-item">
                            <h3><Link href="/service/brand-strategy">Brand Strategy <br />&amp; Identity</Link></h3>
                            <ul>
                                <li><img src="/assets/img/home1/icon/figma-icon.svg" alt="" /></li>
                                <li><img src="/assets/img/home1/icon/xd-icon.svg" alt="" /></li>
                                <li><img src="/assets/img/home1/icon/zepline-icon.svg" alt="" /></li>
                            </ul>
                            <p>Strategic brand identity design that builds trust, authority, and recognition.</p>
                            <Link href="/service/brand-strategy" className="learn-btn">
                                View Details
                                <svg width={9} height={9} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 8L8 1M8 1C6.44444 1.29167 3.04167 1.875 1 1M8 1C7.70833 2.45833 7.125 5.66667 8 8" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                        <div className="service-card magnetic-item">
                            <h3><Link href="/service/digital-marketing">Digital Marketing <br />Solutions</Link></h3>
                            <ul>
                                <li><FaMeta size={28} style={{ color: '#0668E1' }} /></li>
                                <li><SiGoogleads size={28} style={{ color: '#4285F4' }} /></li>
                                <li><SiGoogleanalytics size={28} style={{ color: '#E37400' }} /></li>
                                <li><SiMailchimp size={28} style={{ color: '#FFE01B', backgroundColor: 'black', borderRadius: '50%' }} /></li>
                            </ul>
                            <p>Strategic brand identity design that builds trust, authority, and recognition.</p>
                            <Link href="/service/digital-marketing" className="learn-btn">
                                View Details
                                <svg width={9} height={9} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 8L8 1M8 1C6.44444 1.29167 3.04167 1.875 1 1M8 1C7.70833 2.45833 7.125 5.66667 8 8" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                        <div className="service-card magnetic-item">
                            <h3><Link href="/service/ecommerce-solutions">E-Commerce <br />Solutions</Link></h3>
                            <ul>
                                <li><SiShopify size={28} style={{ color: '#95BF47' }} /></li>
                                <li>
                                    <svg width={28} height={28} viewBox="0 0 24 24" fill="#96588a" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M.754 9.58a.754.754 0 00-.754.758v2.525c0 .42.339.758.758.758h3.135l1.431.799-.326-.799h2.373a.757.757 0 00.758-.758v-2.525a.757.757 0 00-.758-.758H.754zm2.709.445h.03c.065.001.124.023.179.067a.26.26 0 01.103.19.29.29 0 01-.033.16c-.13.239-.236.64-.322 1.199-.083.541-.114.965-.094 1.267a.392.392 0 01-.039.219.213.213 0 01-.176.12c-.086.006-.177-.034-.263-.124-.31-.316-.555-.788-.735-1.416-.216.425-.375.744-.478.957-.196.376-.363.568-.502.578-.09.007-.166-.069-.233-.228-.17-.436-.352-1.277-.548-2.524a.297.297 0 01.054-.222c.047-.064.116-.095.21-.102.169-.013.265.065.288.238.103.695.217 1.284.336 1.766l.727-1.387c.066-.126.15-.192.25-.199.146-.01.237.083.273.28.083.441.188.817.315 1.136.086-.844.233-1.453.44-1.828a.255.255 0 01.218-.147zm1.293.36c.056 0 .116.006.18.02.232.05.411.177.53.386.107.18.161.395.161.654 0 .343-.087.654-.26.94-.2.332-.459.5-.781.5a.88.88 0 01-.18-.022.763.763 0 01-.531-.384 1.287 1.287 0 01-.158-.659c0-.342.085-.655.258-.937.202-.333.462-.498.78-.498zm2.084 0c.056 0 .116.006.18.02.236.05.411.177.53.386.107.18.16.395.16.654 0 .343-.086.654-.259.94-.2.332-.459.5-.781.5a.88.88 0 01-.18-.022.763.763 0 01-.531-.384 1.287 1.287 0 01-.16-.659c0-.342.087-.655.26-.937.202-.333.462-.498.78-.498zm4.437.047c-.305 0-.546.102-.718.304-.173.203-.256.49-.256.856 0 .395.086.697.256.906.17.21.418.316.744.316.315 0 .559-.107.728-.316.17-.21.256-.504.256-.883s-.087-.673-.26-.879c-.176-.202-.424-.304-.75-.304zm-1.466.002a1.13 1.13 0 00-.84.326c-.223.22-.332.499-.332.838 0 .362.108.658.328.88.22.223.505.336.861.336.103 0 .22-.016.346-.052v-.54c-.117.034-.216.051-.303.051a.545.545 0 01-.422-.177c-.106-.12-.16-.278-.16-.48 0-.19.053-.348.156-.468a.498.498 0 01.397-.181c.103 0 .212.015.332.049v-.537a1.394 1.394 0 00-.363-.045zm12.414 0a1.135 1.135 0 00-.84.326c-.223.22-.332.499-.332.838 0 .362.108.658.328.88.22.223.506.336.861.336.103 0 .22-.016.346-.052v-.54c-.116.034-.216.051-.303.051a.545.545 0 01-.422-.177c-.106-.12-.16-.278-.16-.48 0-.19.053-.348.156-.468a.498.498 0 01.397-.181c.103 0 .212.015.332.049v-.537a1.394 1.394 0 00-.363-.045zm-9.598.06l-.29 2.264h.579l.156-1.559.395 1.559h.412l.379-1.555.164 1.555h.603l-.304-2.264h-.791l-.12.508c-.03.13-.06.264-.087.4l-.067.352a29.97 29.97 0 00-.258-1.26h-.771zm2.768 0l-.29 2.264h.579l.156-1.559.396 1.559h.412l.375-1.555.165 1.555h.603l-.305-2.264h-.789l-.119.508c-.03.13-.06.264-.086.4l-.066.352c-.063-.352-.15-.771-.26-1.26h-.771zm3.988 0v2.264h.611v-1.031h.012l.494 1.03h.645l-.489-1.019a.61.61 0 00.37-.552.598.598 0 00-.25-.506c-.167-.123-.394-.186-.68-.186h-.713zm3.377 0v2.264H24v-.483h-.63v-.414h.54v-.468h-.54v-.416h.626v-.483H22.76zm-4.793.004v2.264h1.24v-.483h-.627v-.416h.541v-.468h-.54v-.415h.622v-.482h-1.236zm2.025.432c.146.003.25.025.313.072.063.046.091.12.091.227 0 .156-.135.236-.404.24v-.54zm-15.22.011c-.104 0-.205.069-.301.211a1.078 1.078 0 00-.2.639c0 .096.02.2.06.303.049.13.117.198.196.215.083.016.173-.02.27-.106.123-.11.205-.273.252-.492.016-.077.023-.16.023-.246 0-.097-.02-.2-.06-.303-.05-.13-.116-.198-.196-.215a.246.246 0 00-.045-.006zm2.083 0c-.103 0-.204.069-.3.211a1.078 1.078 0 00-.2.639c0 .096.02.2.06.303.049.13.117.198.196.215.083.016.173-.02.27-.106.123-.11.205-.273.252-.492.013-.077.023-.16.023-.246 0-.097-.02-.2-.06-.303-.05-.13-.116-.198-.196-.215a.246.246 0 00-.045-.006zm4.428.006c.233 0 .354.218.354.66-.004.273-.038.46-.098.553a.293.293 0 01-.262.139.266.266 0 01-.242-.139c-.056-.093-.084-.28-.084-.562 0-.436.11-.65.332-.65Z" />
                                    </svg>
                                </li>
                                <li><SiAftership size={28} style={{ color: '#F89622' }} /></li>
                                <li><SiGoogleanalytics size={28} style={{ color: '#E37400' }} /></li>
                                <li><img src="/assets/img/home1/icon/react-icon.svg" alt="" /></li>
                            </ul>
                            <p>Conversion-focused eCommerce platforms built to maximize online sales.</p>
                            <Link href="/service/ecommerce-solutions" className="learn-btn">
                                View Details
                                <svg width={9} height={9} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 8L8 1M8 1C6.44444 1.29167 3.04167 1.875 1 1M8 1C7.70833 2.45833 7.125 5.66667 8 8" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="service-card magnetic-item">
                            <h3><Link href="/service/mobile-app-development">Mobile App <br />Development</Link></h3>
                            <ul>
                                <li><SiFlutter size={28} style={{ color: '#02569B' }} /></li>
                                <li><FaJava size={28} style={{ color: '#007396' }} /></li>
                                <li><img src="/assets/img/home3/Kotlin_icon_(2016-2021).svg" alt="" width={22}
                                    height={22} /></li>
                            </ul>
                            <p>Custom mobile applications designed for performance, usability, and growth.</p>
                            <Link href="/service/mobile-app-development" className="learn-btn">
                                View Details
                                <svg width={9} height={9} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 8L8 1M8 1C6.44444 1.29167 3.04167 1.875 1 1M8 1C7.70833 2.45833 7.125 5.66667 8 8" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                        <div className="service-card magnetic-item">
                            <h3><Link href="/service/ai-automation-solutions">AI &amp; Automation <br />Solutions</Link></h3>
                            <ul>
                                <li>
                                    <svg width={28} height={28} viewBox="0 0 24 24" fill="#EA4B71" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.4737 5.6842c-1.1772 0-2.1663.8051-2.4468 1.8947h-2.8955c-1.235 0-2.289.893-2.492 2.111l-.1038.623a1.263 1.263 0 0 1-1.246 1.0555H11.289c-.2805-1.0896-1.2696-1.8947-2.4468-1.8947s-2.1663.8051-2.4467 1.8947H4.973c-.2805-1.0896-1.2696-1.8947-2.4468-1.8947C1.1311 9.4737 0 10.6047 0 12s1.131 2.5263 2.5263 2.5263c1.1772 0 2.1663-.8051 2.4468-1.8947h1.4223c.2804 1.0896 1.2696 1.8947 2.4467 1.8947 1.1772 0 2.1663-.8051 2.4468-1.8947h1.0008a1.263 1.263 0 0 1 1.2459 1.0555l.1038.623c.203 1.218 1.257 2.111 2.492 2.111h.3692c.2804 1.0895 1.2696 1.8947 2.4468 1.8947 1.3952 0 2.5263-1.131 2.5263-2.5263s-1.131-2.5263-2.5263-2.5263c-1.1772 0-2.1664.805-2.4468 1.8947h-.3692a1.263 1.263 0 0 1-1.246-1.0555l-.1037-.623A2.52 2.52 0 0 0 13.9607 12a2.52 2.52 0 0 0 .821-1.4794l.1038-.623a1.263 1.263 0 0 1 1.2459-1.0555h2.8955c.2805 1.0896 1.2696 1.8947 2.4468 1.8947 1.3952 0 2.5263-1.131 2.5263-2.5263s-1.131-2.5263-2.5263-2.5263m0 1.2632a1.263 1.263 0 0 1 1.2631 1.2631 1.263 1.263 0 0 1-1.2631 1.2632 1.263 1.263 0 0 1-1.2632-1.2632 1.263 1.263 0 0 1 1.2632-1.2631M2.5263 10.7368A1.263 1.263 0 0 1 3.7895 12a1.263 1.263 0 0 1-1.2632 1.2632A1.263 1.263 0 0 1 1.2632 12a1.263 1.263 0 0 1 1.2631-1.2632m6.3158 0A1.263 1.263 0 0 1 10.1053 12a1.263 1.263 0 0 1-1.2632 1.2632A1.263 1.263 0 0 1 7.579 12a1.263 1.263 0 0 1 1.2632-1.2632m10.1053 3.7895a1.263 1.263 0 0 1 1.2631 1.2632 1.263 1.263 0 0 1-1.2631 1.2631 1.263 1.263 0 0 1-1.2632-1.2631 1.263 1.263 0 0 1 1.2632-1.2632" />
                                    </svg>
                                </li>
                                <li><img src="/assets/img/home1/icon/python-icon.svg" alt="" /></li>
                                <li><img src="/assets/img/home1/icon/jquiry-icon.svg" alt="" /></li>
                                <li><img src="/assets/img/home1/icon/javascript-icon.svg" alt="" /></li>
                            </ul>
                            <p>AI-powered automation systems that streamline operations and scale growth.</p>
                            <Link href="/service/ai-automation-solutions" className="learn-btn">
                                View Details
                                <svg width={9} height={9} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 8L8 1M8 1C6.44444 1.29167 3.04167 1.875 1 1M8 1C7.70833 2.45833 7.125 5.66667 8 8" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home3SolutionsSection
