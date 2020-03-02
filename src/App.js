import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from  './shared/appHeader/Header.tsx';
function App() {
  return (
    <>
          {/* <!-- preloader --> */}
    <div className="preloader"></div>
    {/* <!-- preloader --> */}

    {/* <!-- main header --> */}
    <header className="main-header home-1">
        <div className="outer-container">
            <div className="container">
                <div className="main-box clearfix">
                    <div className="logo-box pull-left">
                        <figure className="logo"><a href="index.html"><img src="images/logo.png" alt=""></img></a></figure>
                    </div>
                    <div className="menu-area pull-right">
                        {/* <!--Mobile Navigation Toggler--> */}
                        <div className="mobile-nav-toggler">
                            <i className="icon-bar"></i>
                            <i className="icon-bar"></i>
                            <i className="icon-bar"></i>
                        </div>
                      <Header />
                    </div>
                </div>
            </div>
        </div>

        {/* <!--sticky Header--> */}
        <div className="sticky-header">
            <div className="container clearfix">
                <figure className="logo-box"><a href="index.html"><img src="images/small-logo.png" alt=""></img></a></figure>
                <div className="menu-area">
                    <nav className="main-menu clearfix">
                        {/* <!--Keep This Empty / Menu will come through Javascript--> */}
                    </nav>
                </div>
            </div>
        </div>
    </header>
    {/* <!-- main-header end --> */}

    {/* <!-- Mobile Menu  --> */}
    <div className="mobile-menu">
        <div className="menu-backdrop"></div>
        <div className="close-btn"><i className="fas fa-times"></i></div>
        
        <nav className="menu-box">
            <div className="nav-logo"><a href="index.html"><img src="images/logo.png" alt="" title=""></img></a></div>
            <div className="menu-outer">
              {/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--> */}
              </div>
            <div className="contact-info">
                <h4>Contact Info</h4>
                <ul>
                    <li>Chicago 12, Melborne City, USA</li>
                    <li><a href="tel:+8801682648101">+88 01682648101</a></li>
                    <li><a href="mailto:info@example.com">info@example.com</a></li>
                </ul>
            </div>
            <div className="social-links">
                <ul className="clearfix">
                    <li><a href="#"><span className="fab fa-twitter"></span></a></li>
                    <li><a href="#"><span className="fab fa-facebook-square"></span></a></li>
                    <li><a href="#"><span className="fab fa-pinterest-p"></span></a></li>
                    <li><a href="#"><span className="fab fa-instagram"></span></a></li>
                    <li><a href="#"><span className="fab fa-youtube"></span></a></li>
                </ul>
            </div>
        </nav>
    </div>
    {/* <!-- End Mobile Menu --> */}


    {/* <!-- banner-section --> */}
    <section className="banner-section">
        <div className="bg-layer" style={{backgroundImage: 'url(images/icons/banner-1.png)'}}></div>
        <div className="pattern-bg" style={{backgroundImage: 'url(images/icons/vactor-1.png)' }}></div>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                    <div className="content-box">
                        <h1>Profect App For Boost Your Business</h1>
                        <div className="text">Range of services aimed to help start up websites, businesses and people to get their message across.</div>
                        <div className="btn-box"><a href="#">Get App Now</a></div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                    <div className="image-box float-bob-y clearfix">
                        <figure className="image image-1 wow fadeInUp" data-wow-delay="900ms" data-wow-duration="1500ms"><img src="images/resource/phone-1.png" alt=""></img></figure>
                        <figure className="image image-2 wow fadeInUp" data-wow-delay="1500ms" data-wow-duration="1500ms"><img src="images/resource/phone-2.png" alt=""></img></figure>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- banner-section end --> */}


    {/* <!-- feature-section --> */}
    <section className="feature-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-5 col-md-12 col-sm-12 image-column">
                    <div id="iamge_block_01">
                        <div className="image-box float-bob-y">
                            <figure className="image wow slideInLeft" data-wow-delay="00ms" data-wow-duration="1500ms"><img src="images/resource/phone-3.png" alt=""></img></figure>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7 col-md-12 col-sm-12 content-column">
                    <div id="content_block_01">
                        <div className="content-box">
                            <div className="sec-title">
                                <h2>Amazing Features</h2>
                                <p>Cumque adipisci anim quisque provident posuere blandit accumsan delectus quam quos interdum sociosqu.</p>
                            </div>
                            <div className="inner-box wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                        <div className="single-item">
                                            <div className="bg-layer" style={{ backgroundImage: 'url(images/resource/case-1.png) '}}></div>
                                            <div className="icon-box"><i className="flaticon-app-1"></i></div>
                                            <h5><a href="#">Unique Design</a></h5>
                                            <div className="text">Integer quis mollis lacus maecenas in ornare ex sed scelerisque nec elit nec vehicula duis pretium libero</div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                        <div className="single-item wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                                            <div className="bg-layer" style={{ backgroundImage: 'url(images/resource/case-1.png) '}}></div>
                                            <div className="icon-box"><i className="flaticon-target"></i></div>
                                            <h5><a href="#">Easy And New Project</a></h5>
                                            <div className="text">Integer quis mollis lacus maecenas in ornare ex sed scelerisque nec elit nec vehicula duis pretium libero</div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                        <div className="single-item wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                                            <div className="bg-layer" style={{ backgroundImage: 'url(images/resource/case-1.png)' }}></div>
                                            <div className="icon-box"><i className="flaticon-shipping"></i></div>
                                            <h5><a href="#">Track Anything</a></h5>
                                            <div className="text">Integer quis mollis lacus maecenas in ornare ex sed scelerisque nec elit nec vehicula duis pretium libero</div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                        <div className="single-item wow fadeInUp" data-wow-delay="900ms" data-wow-duration="1500ms">
                                            <div className="bg-layer" style={{ backgroundImage: 'url(images/resource/case-1.png)' }}></div>
                                            <div className="icon-box"><i className="flaticon-dashboard"></i></div>
                                            <h5><a href="#">Unlimited Dashboard</a></h5>
                                            <div className="text">Integer quis mollis lacus maecenas in ornare ex sed scelerisque nec elit nec vehicula duis pretium libero</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- feature-section --> */}


    {/* <!-- feature-style-two --> */}
    <section className="feature-style-two centred">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
                    <div className="feature-block-one wow flipInY animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="inner-box js-tilt">
                            <div className="hover-content"></div>
                            <div className="icon-box">
                                <div className="bg-layer" style={{ backgroundImage: 'url(images/icons/feature-icon-1.png)' }}></div>
                                <i className="flaticon-smartphone"></i>
                            </div>
                            <h5><a href="#">Flexiable to Use</a></h5>
                            <div className="text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
                    <div className="feature-block-one wow flipInY animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div className="inner-box js-tilt">
                            <div className="hover-content"></div>
                            <div className="icon-box">
                                <div className="bg-layer" style={{ backgroundImage: 'url(images/icons/feature-icon-2.png)' }}></div>
                                <i className="flaticon-seo-and-web"></i>
                            </div>
                            <h5><a href="#">Fully Responsive</a></h5>
                            <div className="text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
                    <div className="feature-block-one wow flipInY animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                        <div className="inner-box js-tilt">
                            <div className="hover-content"></div>
                            <div className="icon-box">
                                <div className="bg-layer" style={{ backgroundImage: 'url(images/icons/feature-icon-3.png)' }}></div>
                                <i className="flaticon-app"></i>
                            </div>
                            <h5><a href="#">Easy to Customize</a></h5>
                            <div className="text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- feature-style-two end --> */}


    {/* <!-- feature-style-three --> */}
    <section className="feature-style-three">
        <div className="container">
            <div className="inner-container">
                <div className="inner-box">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div id="content_block_02">
                                <div className="content-box wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                                    <div className="sec-title"><h2>Mobile Applications Redefined</h2></div>
                                    <div className="text">
                                        <p>On the other hand we denounce with righteous indignation and dislike men who are so beguiled and demoralized.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                    </div>
                                    <div className="btn-box"><a href="#" className="theme-btn">Learn More<i className="fas fa-angle-right"></i></a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                            <div id="iamge_block_02">
                                <div className="image-box">
                                    <div className="bg-layer" style={{ backgroundImage: 'url(images/icons/image-shap-1.png)'}}></div>
                                    <figure className="image image-1 wow slideInRight" data-wow-delay="300ms" data-wow-duration="1500ms"><img src="images/resource/dashbord-1.jpg" alt=""></img></figure>
                                    <figure className="image image-2 wow slideInRight" data-wow-delay="00ms" data-wow-duration="1500ms"><img src="images/resource/dashbord-2.jpg" alt=""></img></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="inner-box">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                            <div id="iamge_block_03">
                                <div className="image-box">
                                    <div className="bg-layer" style={{ backgroundImage: 'url(images/icons/image-shap-2.png)'}}></div>
                                    <figure className="image image-1 wow slideInLeft" data-wow-delay="00ms" data-wow-duration="1500ms"><img src="images/resource/dashbord-3.jpg" alt=""></img></figure>
                                    <figure className="image image-2 wow slideInLeft" data-wow-delay="300ms" data-wow-duration="1500ms"><img src="images/resource/dashbord-4.jpg" alt=""></img></figure>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div id="content_block_03">
                                <div className="content-box wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                                    <div className="sec-title"><h2>Easy access to business information</h2></div>
                                    <div className="text">
                                        <p>On the other hand we denounce with righteous indignation and dislike men who are so beguiled and demoralized.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                    </div>
                                    <div className="btn-box"><a href="#" className="theme-btn">Learn More<i className="fas fa-angle-right"></i></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- feature-style-three --> */}


    {/* <!-- video-section --> */}
    <section className="video-section">
        <div className="bg-column" style={{ backgroundImage: 'url(images/background/video-bg.jpg)' }}></div>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 video-column">
                    <div className="video-inner">
                        <a href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s" className="lightbox-image" data-caption="">
                            <i className="flaticon-play-button"></i>
                            <span className="ripple"></span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                    <div id="content_block_04">
                        <div className="content-box">
                            <div className="sec-title"><h2>Video Demo App</h2></div>
                            <div className="text">Retarget past customers with second-chance offers and reach new audiences with geo-targeted campaigns during peak dining times using Forks’ push notifications.</div>
                            <div className="btn-box"><a href="#" className="theme-btn-two">Play Video Now</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- video-section end --> */}


    {/* <!-- pricing-section --> */}
    <section className="pricing-section centred">
        <div className="container">
            <div className="sec-title center">
                <h2>Our Best Price Plan</h2>
                <p>We provide best price plan for our customer check the list now<br />and slect now plan.</p>
            </div>
            <div className="tabs-box">
                <div className="tabs-content">
                    <div className="tab active-tab" id="tab-1">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12 pricing-column">
                                <div className="pricing-block-one">
                                    <div className="pricing-table">
                                        <figure className="image"><img src="images/icons/price-icon-1.png" alt=""></img></figure>
                                        <div className="table-header">
                                            <h3 className="title">Basic</h3>
                                            <h2 className="price">05.00<span>/Mo</span></h2>
                                        </div>
                                        <div className="table-content">
                                            <ul> 
                                                <li>One User</li>
                                                <li>Ui elements 1000</li>
                                                <li>E-mail support</li>
                                            </ul>
                                        </div>
                                        <div className="table-footer">
                                            <a href="#" className="theme-btn-two">Purchase</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 pricing-column">
                                <div className="pricing-block-one">
                                    <div className="pricing-table">
                                        <figure className="image"><img src="images/icons/price-icon-2.png" alt=""></img></figure>
                                        <div className="table-header">
                                            <h3 className="title">Premium</h3>
                                            <h2 className="price">25.00<span>/Mo</span></h2>
                                        </div>
                                        <div className="table-content">
                                            <ul> 
                                                <li>One User</li>
                                                <li>Ui elements 1000</li>
                                                <li>E-mail support</li>
                                                <li>Phone Support</li>
                                            </ul>
                                        </div>
                                        <div className="table-footer">
                                            <a href="#" className="theme-btn-two">Purchase</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 pricing-column">
                                <div className="pricing-block-one">
                                    <div className="pricing-table">
                                        <figure className="image"><img src="images/icons/price-icon-3.png" alt=""></img></figure>
                                        <div className="table-header">
                                            <h3 className="title">PROFESSIONAL</h3>
                                            <h2 className="price">50.00<span>/Mo</span></h2>
                                        </div>
                                        <div className="table-content">
                                            <ul> 
                                                <li>One User</li>
                                                <li>Ui elements 1000</li>
                                                <li>E-mail support</li>
                                                <li>Phone Support</li>
                                            </ul>
                                        </div>
                                        <div className="table-footer">
                                            <a href="#" className="theme-btn-two">Purchase</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab" id="tab-2">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12 pricing-column">
                                <div className="pricing-block-one">
                                    <div className="pricing-table">
                                        <figure className="image"><img src="images/icons/price-icon-1.png" alt=""></img></figure>
                                        <div className="table-header">
                                            <h3 className="title">Basic</h3>
                                            <h2 className="price">30.00<span>/Mo</span></h2>
                                        </div>
                                        <div className="table-content">
                                            <ul> 
                                                <li>One User</li>
                                                <li>Ui elements 1000</li>
                                                <li>E-mail support</li>
                                            </ul>
                                        </div>
                                        <div className="table-footer">
                                            <a href="#" className="theme-btn-two">Purchase</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 pricing-column">
                                <div className="pricing-block-one">
                                    <div className="pricing-table">
                                        <figure className="image"><img src="images/icons/price-icon-2.png" alt=""></img></figure>
                                        <div className="table-header">
                                            <h3 className="title">Premium</h3>
                                            <h2 className="price">60.00<span>/Mo</span></h2>
                                        </div>
                                        <div className="table-content">
                                            <ul> 
                                                <li>One User</li>
                                                <li>Ui elements 1000</li>
                                                <li>E-mail support</li>
                                                <li>Phone Support</li>
                                            </ul>
                                        </div>
                                        <div className="table-footer">
                                            <a href="#" className="theme-btn-two">Purchase</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 pricing-column">
                                <div className="pricing-block-one">
                                    <div className="pricing-table">
                                        <figure className="image"><img src="images/icons/price-icon-3.png" alt=""></img></figure>
                                        <div className="table-header">
                                            <h3 className="title">PROFESSIONAL</h3>
                                            <h2 className="price">99.00<span>/Mo</span></h2>
                                        </div>
                                        <div className="table-content">
                                            <ul> 
                                                <li>One User</li>
                                                <li>Ui elements 1000</li>
                                                <li>E-mail support</li>
                                                <li>Phone Support</li>
                                            </ul>
                                        </div>
                                        <div className="table-footer">
                                            <a href="#" className="theme-btn-two">Purchase</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>           
                </div>
                <div className="tab-btn-box">
                    <ul className="tab-btns tab-buttons clearfix">
                        <li className="tab-btn active-btn" data-tab="#tab-1">Monthly</li>
                        <li className="tab-btn" data-tab="#tab-2">Yearly</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- pricing-section end --> */}


    {/* <!-- testimonial-section --> */}
    <section className="testimonial-section centred">
        <div className="image-layer" style={{ backgroundImage: 'url(images/icons/testimonial-bg.png)' }}></div>
        <div className="container">
            <div className="sec-title center">
                <h2>Our Users Review</h2>
                <p>Trusted by more than 9,000 businesses in 140 countries.<br />all of our resources are free</p>
            </div>
            <div className="testimonial-carousel owl-carousel owl-theme">
                <div className="testimonial-inner">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 testimonial-block">
                            <div className="testimonial-block-one">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="images/resource/testimonial-1.png" alt=""></img></figure>
                                    <div className="text">“We don't take ourselves too seriously, but seriously enough to ensure we're creating the best product and experience for our customers. I feel like Help Scout does the same.”</div>  
                                    <div className="author-info">
                                        <h5 className="name">TeamSnap</h5>
                                        <span className="designation">VP of Customer Experience</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 testimonial-block">
                            <div className="testimonial-block-one">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="images/resource/testimonial-2.png" alt=""></img></figure>
                                    <div className="text">“We don't take ourselves too seriously, but seriously enough to ensure we're creating the best product and experience for our customers. I feel like Help Scout does the same.”</div>  
                                    <div className="author-info">
                                        <h5 className="name">Steven smith</h5>
                                        <span className="designation">Programmer Doritibe</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="testimonial-inner">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 testimonial-block">
                            <div className="testimonial-block-one">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="images/resource/testimonial-2.png" alt=""></img></figure>
                                    <div className="text">“We don't take ourselves too seriously, but seriously enough to ensure we're creating the best product and experience for our customers. I feel like Help Scout does the same.”</div>  
                                    <div className="author-info">
                                        <h5 className="name">Steven smith</h5>
                                        <span className="designation">Programmer Doritibe</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 testimonial-block">
                            <div className="testimonial-block-one">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="images/resource/testimonial-1.png" alt=""></img></figure>
                                    <div className="text">“We don't take ourselves too seriously, but seriously enough to ensure we're creating the best product and experience for our customers. I feel like Help Scout does the same.”</div>  
                                    <div className="author-info">
                                        <h5 className="name">TeamSnap</h5>
                                        <span className="designation">VP of Customer Experience</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="testimonial-inner">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 testimonial-block">
                            <div className="testimonial-block-one">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="images/resource/testimonial-1.png" alt=""></img></figure>
                                    <div className="text">“We don't take ourselves too seriously, but seriously enough to ensure we're creating the best product and experience for our customers. I feel like Help Scout does the same.”</div>  
                                    <div className="author-info">
                                        <h5 className="name">TeamSnap</h5>
                                        <span className="designation">VP of Customer Experience</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 testimonial-block">
                            <div className="testimonial-block-one">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="images/resource/testimonial-2.png" alt=""></img></figure>
                                    <div className="text">“We don't take ourselves too seriously, but seriously enough to ensure we're creating the best product and experience for our customers. I feel like Help Scout does the same.”</div>  
                                    <div className="author-info">
                                        <h5 className="name">Steven smith</h5>
                                        <span className="designation">Programmer Doritibe</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- testimonial-section end --> */}


    {/* <!-- download-section --> */}
    <section className="download-section">
        <div className="bg-layer wow slideInLeft animated" style={{ backgroundImage: 'url(images/icons/shap-3.png)' }}></div>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                    <div id="content_block_05">
                        <div className="content-box wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="sec-title"><h2>Get The App Now!</h2></div>
                            <div className="text">Have you ever heard the expression,<br />“Do not count your chickens before they hatch?”  Maybe an older, wiser individual</div>
                            <div className="download-btn">
                                <a href="#" className="app-store-btn">
                                    <i className="fab fa-apple"></i>
                                    <span>Download on the</span>
                                    App Store
                                </a>
                                <a href="#" className="google-play-btn">
                                    <i className="fab fa-android"></i>
                                    <span>Get on it</span>
                                    Google Play
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                    <div id="iamge_block_04">
                        <div className="image-box">
                            <figure className="image image-1 wow slideInUp" data-wow-delay="300ms" data-wow-duration="1500ms"><img src="images/resource/phone-4.png" alt=""></img></figure>
                            <figure className="image image-2 wow slideInUp" data-wow-delay="600ms" data-wow-duration="1500ms"><img src="images/resource/phone-5.png" alt=""></img></figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- download-section end --> */}


    {/* <!-- news-section --> */}
    <section className="news-section">
        <div className="container">
            <div className="sec-title center">
                <h2>News & Events</h2>
                <p>Trusted by more than 9,000 businesses in 140 countries.<br />all of our resources are free</p>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 news-column">
                    <div className="news-block-one wow flipInY animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <figure className="image-box"><a href="blog-single.html"><img src="images/resource/news-1.jpg" alt=""></img></a></figure>
                            <div className="lower-content">
                                <div className="post-date"><i className="fas fa-calendar-alt"></i>January 11, 2019</div>
                                <h3><a href="blog-single.html">Design your apps in your own way Business Startegies</a></h3>
                                <div className="link-btn"><a href="blog-single.html">Read More</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 news-column">
                    <div className="news-block-one wow flipInY animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <figure className="image-box"><a href="blog-single.html"><img src="images/resource/news-2.jpg" alt=""></img></a></figure>
                            <div className="lower-content">
                                <div className="post-date"><i className="fas fa-calendar-alt"></i>January 10, 2019</div>
                                <h3><a href="blog-single.html">We support our user every time and upgarad our app.</a></h3>
                                <div className="link-btn"><a href="blog-single.html">Read More</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 news-column">
                    <div className="news-block-one wow flipInY animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <figure className="image-box"><a href="blog-single.html"><img src="images/resource/news-3.jpg" alt=""></img></a></figure>
                            <div className="lower-content">
                                <div className="post-date"><i className="fas fa-calendar-alt"></i>January 09, 2019</div>
                                <h3><a href="blog-single.html">We developed the app for our customer to easy to use it.</a></h3>
                                <div className="link-btn"><a href="blog-single.html">Read More</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- news-section end --> */}


    {/* <!-- subscribe-section --> */}
    <section className="subscribe-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                    <div id="iamge_block_05">
                        <div className="image-box wow slideInLeft animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <figure className="image float-bob-y"><img src="images/resource/subscribe-1.png" alt=""></img></figure>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                    <div id="content_block_06">
                        <div className="content-box">
                            <div className="sec-title"><h2>Subscribe our Newsletter</h2></div>
                            <div className="text">Lorem ipsum dolor sit amet consectetur adipiscing elit donec tempus pellentesque dui vel tristique purus justo</div>
                            <form action="#" method="post" className="subscribe-form">
                                <div className="form-group">
                                    <input type="email" name="email" placeholder="Enter Your Email" required=""/>
                                    <button type="submit" className="theme-btn-two">Subscribe Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- subscribe-section end --> */}


    {/* <!-- main-footer --> */}
    <footer className="main-footer">
        <div className="image-layer" style={{ backgroundImage: 'url(images/icons/footer-bg.png)' }}></div>
        <div className="container">
            <div className="footer-top">
                <div className="widget-section">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                            <div className="about-widget footer-widget">
                                <figure className="footer-logo"><a href="index.html"><img src="images/footer-logo.png" alt=""></img></a></figure>
                                <div className="text">Lorem ipsum dolor sit consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim lorem sed do eiusmod.</div>
                                <ul className="social-links">
                                    <li><h6>Follow Us :</h6></li>
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fab fa-skype"></i></a></li>
                                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="links-widget footer-widget">
                                <h4 className="widget-title">Support</h4>
                                <div className="widget-content">
                                    <ul className="list clearfix">
                                        <li><a href="#">Contact Us</a></li>
                                        <li><a href="#">Submit a Ticket</a></li>
                                        <li><a href="#">Visit Knowledge Base</a></li>
                                        <li><a href="#">Support System</a></li>
                                        <li><a href="#">Refund Policy</a></li>
                                        <li><a href="#">Professional Services</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
                            <div className="links-widget footer-widget">
                                <h4 className="widget-title">Links</h4>
                                <div className="widget-content">
                                    <ul className="list clearfix">
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Services</a></li>
                                        <li><a href="#">Price Plan</a></li>
                                        <li><a href="#">Testimonials</a></li>
                                        <li><a href="#">News</a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="contact-widget footer-widget">
                                <h4 className="widget-title">Contact Info</h4>
                                <div className="widget-content">
                                    <ul className="list clearfix">
                                        <li><i className="fas fa-map-marker-alt"></i>25 Bedford St.<br />New York City, N.Y.</li>
                                        <li>
                                            <i className="fas fa-phone-volume"></i>
                                            <a href="tel:+0665184575181">(+066) 518 - 457 - 5181</a><br />
                                            <a href="tel:+0665184575182">(+066) 518 - 457 - 5182</a>
                                        </li>
                                        <li>
                                            <i className="fas fa-envelope"></i>
                                            <a href="mailto:info@example.com">info@example.com</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="copyright">&copy; 2020 <a href="#">appway</a>. All rights reserved</div>
            </div>
        </div>
    </footer>
    {/* <!-- main-footer end --> */}



{/* <!--Scroll to top--> */}
<button className="scroll-top scroll-to-target" data-target="html">
    <span className="fa fa-arrow-up"></span>
</button>

{/* <!-- jequery plugins --> */}
    </>
  );
}

export default App;
