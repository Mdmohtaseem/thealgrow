import Home5Footer from '@/components/Footer/Home5Footer'
import Header3 from '@/components/header/Header3'
import Link from 'next/link'
import React from 'react'
import blogData from '@/data/blog-data.json'

const NewsIsightPage = ({ searchParams }) => {
    const page = parseInt(searchParams.page) || 1;
    const blogsPerPage = 6;
    const startIndex = (page - 1) * blogsPerPage;
    const endIndex = startIndex + blogsPerPage;
    const currentBlogs = blogData.slice(startIndex, endIndex);
    const totalPages = Math.ceil(blogData.length / blogsPerPage);

    return (
        <>
            <Header3 />
            {/* Breadcrumb Section Start */}
            <div className="breadcrumb-section mb-130">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="banner-content">
                                <h1>Blogs</h1>
                                <ul className="breadcrumb-list">
                                    <li><a href="/">Home</a></li>
                                    <li>
                                        <svg width={25} height={6} viewBox="0 0 25 6" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM20 3.5L25 5.88675V0.113249L20 2.5V3.5ZM4.5 3.5H20.5V2.5H4.5V3.5Z" />
                                        </svg>
                                        Blogs
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Breadcrumb Section End */}
            {/* News & Insight Page Start */}
            <div className="news-insight-page mb-130">
                <div className="container">
                    <div className="row gy-5 mb-70">
                        {currentBlogs.map((blog, index) => (
                            <div key={blog.id} className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay={`${200 + (index % 3) * 200}ms`} data-wow-duration="1500ms">
                                <div className="blog-card2 two magnetic-item">
                                    <Link href={`/blogs/${blog.slug}`} className="blog-img">
                                        <img src={blog.listingImage} alt={blog.listingTitle} />
                                    </Link>
                                    <div className="blog-content-wrap">
                                        <ul className="blog-meta">
                                            <li>{blog.category}</li>
                                            <li>
                                                <svg width={30} height={6} viewBox="0 0 30 6" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM25 3.5L30 5.88675V0.113249L25 2.5V3.5ZM4.5 3.5H25.5V2.5H4.5V3.5Z" />
                                                </svg>
                                            </li>
                                            <li className="blog-date">{blog.date}</li>
                                        </ul>
                                        <h3 className="mb-20" style={{ marginBottom: '20px' }}>
                                            <Link href={`/blogs/${blog.slug}`}>{blog.listingTitle}</Link>
                                        </h3>
                                        <Link href={`/blogs/${blog.slug}`} className="primary-btn4 transparent">
                                            <span className="icon">
                                                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                            </span>
                                            <span className="content">Read More</span>
                                            <span className="icon two">
                                                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {totalPages > 1 && (
                        <div className="pagination-area wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="paginations-button">
                                <Link href={page > 1 ? `/blogs?page=${page - 1}` : "#"} style={{ pointerEvents: page === 1 ? 'none' : 'auto', opacity: page === 1 ? 0.5 : 1 }}>
                                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M7.86133 9.28516C7.14704 7.49944 3.57561 5.71373 1.43276 4.99944C3.57561 4.28516 6.7899 3.21373 7.86133 0.713728" strokeWidth="1.5" strokeLinecap="round" />
                                        </g>
                                    </svg>
                                    Prev
                                </Link>
                            </div>
                            <ul className="paginations">
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                                    <li key={pageNum} className={`page-item ${page === pageNum ? 'active' : ''}`}>
                                        <Link href={`/blogs?page=${pageNum}`}>{pageNum < 10 ? `0${pageNum}` : pageNum}</Link>
                                    </li>
                                ))}
                            </ul>
                            <div className="paginations-button">
                                <Link href={page < totalPages ? `/blogs?page=${page + 1}` : "#"} style={{ pointerEvents: page === totalPages ? 'none' : 'auto', opacity: page === totalPages ? 0.5 : 1 }}>
                                    Next
                                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M1.42969 9.28613C2.14397 7.50042 5.7154 5.7147 7.85826 5.00042C5.7154 4.28613 2.50112 3.21471 1.42969 0.714705" strokeWidth="1.5" strokeLinecap="round" />
                                        </g>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {/* News & Insight Page End */}
            <Home5Footer />
        </>
    )
}

export default NewsIsightPage
