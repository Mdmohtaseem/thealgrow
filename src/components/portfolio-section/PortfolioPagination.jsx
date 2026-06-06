import React from 'react';
import Link from 'next/link';
import portfolioData from '@/data/portfolio-data.json';

const PortfolioPagination = ({ currentOrder }) => {
    // Sort portfolio items by order
    const sortedPortfolio = [...portfolioData].sort((a, b) => a.order - b.order);
    const totalItems = sortedPortfolio.length;

    // Find current index
    const currentIndex = sortedPortfolio.findIndex(item => item.order === currentOrder);

    // Calculate prev and next indices with looping
    const prevIndex = (currentIndex - 1 + totalItems) % totalItems;
    const nextIndex = (currentIndex + 1) % totalItems;

    const prevProject = sortedPortfolio[prevIndex];
    const nextProject = sortedPortfolio[nextIndex];

    return (
        <div className="row justify-content-center">
            <div className="col-lg-12">
                <div className="details-pagination two">
                    <div className="single-pagination">
                        <Link className="pagination-btn" href={`/portfolio/${prevProject.slug}`}>
                            <img src="/assets/img/innerpages/details-pagination-btn-bg1.png" alt="" />
                            <div className="btn-content">
                                <svg width={7} height={14} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
                                </svg>
                                Prev
                            </div>
                        </Link>
                        <div className="content">
                            <h2>
                                <Link href={`/portfolio/${prevProject.slug}`}>
                                    {prevProject.listingTitle.split(' ').slice(0, 2).join(' ')} <br />
                                    {prevProject.listingTitle.split(' ').slice(2).join(' ')}
                                </Link>
                            </h2>
                        </div>
                    </div>
                    <div className="single-pagination two text-end">
                        <div className="content">
                            <h2>
                                <Link href={`/portfolio/${nextProject.slug}`}>
                                    {nextProject.listingTitle.split(' ').slice(0, 2).join(' ')} <br />
                                    {nextProject.listingTitle.split(' ').slice(2).join(' ')}
                                </Link>
                            </h2>
                        </div>
                        <Link className="pagination-btn" href={`/portfolio/${nextProject.slug}`}>
                            <img src="/assets/img/innerpages/details-pagination-btn-bg2.png" alt="" />
                            <div className="btn-content">
                                Next
                                <svg width={7} height={14} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
                                </svg>
                            </div>
                        </Link>
                    </div>
                    <svg className="divider-line" width={6} height={88} viewBox="0 0 6 88" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.5 5L5.88675 0H0.113249L2.5 5H3.5ZM2.5 83L0.113249 88H5.88675L3.5 83H2.5ZM2.5 4.5V83.5H3.5V4.5H2.5Z" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default PortfolioPagination;
