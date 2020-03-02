import './header.scss';

import React from 'react';

export interface IHeaderProps {
}

export interface IHeaderState {
}
export default class Header extends React.Component<IHeaderProps, IHeaderState> {
    render() {

        return (
            <nav className="main-menu navbar-expand-md navbar-light">
                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                    <ul className="navigation clearfix">
                        <li className="current dropdown"><a href="index.html">Home</a>
                            {/* <ul className="megamenu clearfix">
                                <li><a href="index.html">App Landing</a></li>
                                <li><a href="e-commerce.html">E-Commerce</a></li>
                                <li><a href="seo.html">SEO</a></li>
                                <li><a href="account-billing.html">Account & Billing</a></li>
                                <li><a href="app-showcase.html">App Showcase</a></li>
                                <li><a href="hr-management.html">HR Management</a></li>
                                <li><a href="email-marketing.html">Email Marketing</a></li>
                                <li><a href="payment-processing.html">Payment Processing</a></li>
                                <li><a href="startup.html">Startup</a></li>
                                <li><a href="digital-marketing.html">Digital Marketing</a></li>
                                <li><a href="cloud-saas.html">Cloud Based Saas</a></li>
                                <li><a href="prototype-wireframing.html">Prototype & Wireframing</a></li>
                                <li><a href="crm-management.html">CRM Management</a></li>
                                <li><a href="project-management.html">Project Management</a></li>
                                <li><a href="digital-studio.html">Digital Studio</a></li>
                                <li><a href="crypto.html">Crypto</a></li>
                                <li><a href="ride-sharing.html">Ride Sharing</a></li>
                                <li><a href="web-hosting.html">Web Hosting</a></li>
                                <li><a href="home-charity.html">Home Charity</a></li>
                            </ul> */}
                        </li>
                        <li className="dropdown"><a href="#">Pages</a>
                            {/* <ul>
                                <li className="dropdown"><a href="#">Team Page</a>
                                    <ul>
                                        <li><a href="team.html">Team 01</a></li>
                                        <li><a href="team-2.html">Team 02</a></li>
                                        <li><a href="team-3.html">Team 03</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a href="#">Service Page</a>
                                    <ul>
                                        <li><a href="service.html">Our Services</a></li>
                                        <li><a href="service-details.html">Service Details</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a href="#">Pricing Page</a>
                                    <ul>
                                        <li><a href="pricing.html">Pricing 01</a></li>
                                        <li><a href="pricing-2.html">Pricing 02</a></li>
                                        <li><a href="pricing-3.html">Pricing 03</a></li>
                                        <li><a href="pricing-4.html">Pricing 04</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a href="#">Testimonial Page</a>
                                    <ul>
                                        <li><a href="testimonial.html">Testimonial 01</a></li>
                                        <li><a href="testimonial-2.html">Testimonial 02</a></li>
                                    </ul>
                                </li>
                                <li><a href="about.html">About Us</a></li>
                                <li><a href="faq.html">Faq</a></li>
                                <li><a href="error.html">Error Page</a></li>
                            </ul> */}
                        </li>
                        <li className="dropdown"><a href="#">Portfolio</a>
                            {/* <ul>
                                <li><a href="portfolio.html">Portfolio 01</a></li>
                                <li><a href="portfolio-2.html">Portfolio 02</a></li>
                                <li><a href="portfolio-3.html">Portfolio 03</a></li>
                                <li><a href="portfolio-details.html">Portfolio Details</a></li>
                            </ul> */}
                        </li>
                        <li className="dropdown"><a href="#">Element</a>
                            {/* <ul>
                                <li className="dropdown"><a href="#">Miscellaneous 01</a>
                                    <ul>
                                        <li><a href="optimization-application.html">Optimization Application</a></li>
                                        <li><a href="device-friendly.html">Device Friendly</a></li>
                                        <li><a href="software-product.html">Software Product</a></li>
                                        <li><a href="betterlook-layout.html">Betterlook Layout</a></li>
                                        <li><a href="whereyou-layout.html">Whereyou Layout</a></li>
                                        <li><a href="popular-causes.html">Popular Causes</a></li>
                                        <li><a href="wework-layout.html">We work Layout</a></li>
                                        <li><a href="campaing-layout.html">Campaing Layout</a></li>
                                        <li><a href="donate-layout.html">Donate Layout</a></li>
                                        <li><a href="make-difference.html">Make Difference</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a href="#">Miscellaneous 02</a>
                                    <ul>
                                        <li><a href="solve-problem.html">Solve Problem</a></li>
                                        <li><a href="marketing-benefits.html">Marketing Benefits</a></li>
                                        <li><a href="streamline-layout.html">Streamline Layout</a></li>
                                        <li><a href="powerful-management.html">Powerful Management</a></li>
                                        <li><a href="transactions-work.html">Transactions Work</a></li>
                                        <li><a href="increase-website.html">Increase Website</a></li>
                                        <li><a href="managed-wordpress.html">Managed Wordpress</a></li>
                                        <li><a href="history-layout.html">History Layout</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a href="#">Feature Layout</a>
                                    <ul>
                                        <li><a href="feature-layout-1.html">Feature Layout 01</a></li>
                                        <li><a href="feature-layout-2.html">Feature Layout 02</a></li>
                                        <li><a href="feature-layout-3.html">Feature Layout 03</a></li>
                                        <li><a href="feature-layout-4.html">Feature Layout 04</a></li>
                                        <li><a href="feature-layout-5.html">Feature Layout 05</a></li>
                                        <li><a href="feature-layout-6.html">Feature Layout 06</a></li>
                                        <li><a href="feature-layout-7.html">Feature Layout 07</a></li>
                                        <li><a href="feature-layout-8.html">Feature Layout 08</a></li>
                                        <li><a href="feature-layout-9.html">Feature Layout 09</a></li>
                                        <li><a href="feature-layout-10.html">Feature Layout 10</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a href="#">Subscribe Layout</a>
                                    <ul>
                                        <li><a href="subscribe-layout-1.html">Subscribe Layout 01</a></li>
                                        <li><a href="subscribe-layout-2.html">Subscribe Layout 02</a></li>
                                        <li><a href="subscribe-layout-3.html">Subscribe Layout 03</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a href="#">Video Layout</a>
                                    <ul>
                                        <li><a href="video-layout-1.html">Video Layout 01</a></li>
                                        <li><a href="video-layout-2.html">Video Layout 02</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a href="#">Download Layout</a>
                                    <ul>
                                        <li><a href="download-layout-1.html">Download Layout 01</a></li>
                                        <li><a href="download-layout-2.html">Download Layout 02</a></li>
                                        <li><a href="download-layout-3.html">Download Layout 03</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a href="#">Rider Layout</a>
                                    <ul>
                                        <li><a href="rider-layout-1.html">Rider Layout 01</a></li>
                                        <li><a href="rider-layout-2.html">Rider Layout 02</a></li>
                                        <li><a href="rider-layout-3.html">Rider Layout 03</a></li>
                                        <li><a href="rider-layout-4.html">Rider Layout 04</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a href="#">Solution Layout</a>
                                    <ul>
                                        <li><a href="solution-layout-1.html">Solution Layout 01</a></li>
                                        <li><a href="solution-layout-2.html">Solution Layout 02</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a href="#">News Layout</a>
                                    <ul>
                                        <li><a href="news-layout-1.html">News Layout 01</a></li>
                                        <li><a href="news-layout-2.html">News Layout 02</a></li>
                                        <li><a href="news-layout-3.html">News Layout 03</a></li>
                                        <li><a href="news-layout-4.html">News Layout 04</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a href="#">Application Layout</a>
                                    <ul>
                                        <li><a href="application-layout-1.html">Application Layout 01</a></li>
                                        <li><a href="application-layout-2.html">Application Layout 02</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a href="#">Organization Layout</a>
                                    <ul>
                                        <li><a href="organization-layout-1.html">Organization Layout 01</a></li>
                                        <li><a href="organization-layout-2.html">Organization Layout 02</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a href="#">Work Layout</a>
                                    <ul>
                                        <li><a href="work-layout-1.html">Work Layout 01</a></li>
                                        <li><a href="work-layout-2.html">Work Layout 02</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a href="#">Service Layout</a>
                                    <ul>
                                        <li><a href="service-layout-1.html">Service Layout 01</a></li>
                                        <li><a href="service-layout-2.html">Service Layout 02</a></li>
                                        <li><a href="service-layout-3.html">Service Layout 03</a></li>
                                        <li><a href="service-layout-4.html">Service Layout 04</a></li>
                                        <li><a href="service-layout-5.html">Service Layout 05</a></li>
                                        <li><a href="service-layout-6.html">Service Layout 06</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a href="#">Recruitment Layout</a>
                                    <ul>
                                        <li><a href="recruitment-layout-1.html">Recruitment Layout 01</a></li>
                                        <li><a href="recruitment-layout-2.html">Recruitment Layout 02</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a href="#">Reasons Layout</a>
                                    <ul>
                                        <li><a href="reasons-layout-1.html">Reasons Layout 01</a></li>
                                        <li><a href="reasons-layout-2.html">Reasons Layout 02</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a href="#">Hosting Layout</a>
                                    <ul>
                                        <li><a href="hosting-layout-1.html">Hosting Layout 01</a></li>
                                        <li><a href="hosting-layout-2.html">Hosting Layout 02</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a href="#">Counter Layout</a>
                                    <ul>
                                        <li><a href="counter-layout-1.html">Counter Layout 01</a></li>
                                        <li><a href="counter-layout-2.html">Counter Layout 02</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a href="#">Pricing Layout</a>
                                    <ul>
                                        <li><a href="pricing-layout-1.html">Pricing Layout 01</a></li>
                                        <li><a href="pricing-layout-2.html">Pricing Layout 02</a></li>
                                    </ul>
                                </li>
                            </ul> */}
                        </li>
                        <li className="dropdown"><a href="#">Latest News</a>
                            {/* <ul>
                                <li><a href="blog.html">Latest News</a></li>
                                <li><a href="blog-details.html">News Details</a></li>
                            </ul> */}
                        </li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}