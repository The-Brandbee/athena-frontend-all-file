import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";
import Team from '../img/team-main.png';
import Apply from '../img/apply3.png';
import ArrowOne from '../img/arrow-1.png';
import Arrowtwo from '../img/arrow-2.png';
import ClaOne from '../img/cla-b.png';
import ClaTwo from '../img/cla-b2.png';
import Students from '../img/students-banner-6.jpg';
import PromiseOne from '../img/what-we-do-1.jpg';
import ProfileOne from '../img/profile-1.jpg';
import ProfileTwo from '../img/profile-2.jpg';


import BannerTwo from '../img/banner-2.jpg';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

class WhatWeDo extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div className="pmp-profile-page our-team-page">
                <div className="banner-section">
                    <div className='first-slide second'>
                        <div className='banner-image'>
                            <img src={BannerTwo} alt="" />
                        </div>
                        <div className='second-banner-changehover'>
                            <div className='container'>
                                <div className='second-banner-changehover-main'>
                                    <div className='second-banner-changehover-left'>
                                        <div className='second-banner-changehover-left2'>
                                            <h2>We empower high<br /> school students to gain<br /> admission into the</h2>
                                            <h3>most elite <br />undergraduate<br /> universities<br /> worldwide</h3>
                                        </div>
                                    </div>
                                    <div className='second-banner-changehover-right'>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="project-profile-development-frame what-we-do">

                    <div className="project-profile-development-frame-right">
                        <div className="project-profile-development-frame-righttwo">
                            <div className="heading-contact-middle">
                                <h3>About Us </h3>
                                <h2>Training the students of <br />today to become the <br />leaders of tomorrow
                                </h2>
                                <p>The educational system of India is in a transformative stage, and people are realizing the value of studying abroad for cultural, liberal, and educational exposure. At Athena, we prepare a strong foundation for the students to be able to recognize their true potential, build their skills, create meticulous profiles, and crack acceptance to elite universities across the world. </p>
                            </div>
                            <div className='track-your-college-left-link'>
                                <a className='footer-top-map-img-button-link ' href='#'> Learn more <span><img src={ArrowOne} className="normal" alt="" /><img src={Arrowtwo} className="normal-ho" alt="" /></span></a>
                            </div>

                        </div>
                    </div>
                    <div className="project-profile-development-frame-left">
                        <div className="project-profile-development-frame-left-frame">
                            <img src={ProfileOne} />
                            <img src={ProfileOne} />
                        </div>
                        <div className="project-profile-development-frame-right-frame">
                            <img src={ProfileTwo} />
                        </div>
                    </div>
                </section>
                <div className="pmp-profile-page-middle-section container">
                    <div className="heading-contact-middle">
                        <h3>Personal Mentorship Program</h3>
                        <h2>Bespoke mentorship and personalized attention</h2>
                        <p>Our Personal Mentorship Program is modeled on the basis of the admission process in the Ivy League. With the motive of<br /> offering structured help for profile development and presentation, our model ensures that each student receives one-on-one <br />attention, keeping our program customized to their specific needs. </p>
                    </div>

                </div>
                <section className="what-we-do-top-section">
                    <div className='container'>
                        <div className="what-we-do-top-section-top-middle">
                            <div className="what-we-do-top-section-top-middle-left">
                                <p>Identify interests, strengths, and goals</p>
                                <div className="what-we-do-top-section-top-middle-left-border"></div>
                            </div>
                            <div className="what-we-do-top-section-top-middle-left">
                                <p>Develop personal and academic skills</p>
                                <div className="what-we-do-top-section-top-middle-left-border"></div>
                            </div>
                            <div className="what-we-do-top-section-top-middle-left">
                                <p>Nurturing the human brand</p>
                                <div className="what-we-do-top-section-top-middle-left-border"></div>
                            </div>
                            <div className="what-we-do-top-section-top-middle-left">
                                <p>Organize academic and extracurricular activities</p>
                                <div className="what-we-do-top-section-top-middle-left-border"></div>
                            </div>
                            <div className="what-we-do-top-section-top-middle-left">
                                <p>Structured application strategy</p>
                                <div className="what-we-do-top-section-top-middle-left-border"></div>
                            </div>
                            <div className="what-we-do-top-section-top-middle-left">
                                <p>Work experience and internships</p>
                                <div className="what-we-do-top-section-top-middle-left-border"></div>
                            </div>
                            <div className="what-we-do-top-section-top-middle-left">
                                <p>Personal mentoring at each step of the admission process</p>
                                <div className="what-we-do-top-section-top-middle-left-border"></div>
                            </div>
                        </div>
                        <div className='track-your-college-left-link text-center'>
                            <a className='footer-top-map-img-button-link ' href='#'> Learn more <span><img src={ArrowOne} className="normal" alt="" /><img src={Arrowtwo} className="normal-ho" alt="" /></span></a>
                        </div>
                    </div>
                </section>

                <section className="Our-Brand-Promise-what-we-do-frame">
                    <div className="Our-Brand-Promise-what-we-do-frame-left">
                        <img src={PromiseOne} alt="" />
                    </div>
                    <div className="Our-Brand-Promise-what-we-do-frame-left-right">
                        <div className='what-we-do-section-page-right'>
                            <div className='what-we-do-section-page-right-middle'>
                                <div className='why-choese-us-home-page-heading'>
                                    <h3>Our Brand Promise</h3>
                                    <h2>We identify, we strategize <br />we succeed.</h2>
                                    <p>We promise to provide world-class education opportunities to deserving students and help them get admission to their dream universities worldwide. </p>
                                </div>
                                <ul>
                                    <li>
                                        <div className='what-we-do-image-frame'>
                                            <img src={Apply} alt="" />
                                            <p>Discover your <br /> goals</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='what-we-do-image-frame'>
                                            <img src={Apply} alt="" />
                                            <p>Identify your  <br /> strengths</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='what-we-do-image-frame'>
                                            <img src={Apply} alt="" />
                                            <p>Create a  <br />personalized plan</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='what-we-do-image-frame'>
                                            <img src={Apply} alt="" />
                                            <p>Design a perfect  <br />profile</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='what-we-do-image-frame'>
                                            <img src={Apply} alt="" />
                                            <p>Select the best-fit  <br />university</p>
                                        </div>
                                    </li>
                                </ul>

                            </div>
                        </div>


                    </div>
                </section >
                <section className="how-top-apply-page-last-student-section our-student-success">
                    <img src={Students} alt="" />
                    <div className="how-top-apply-page-last-student-section-inner-main">
                        <div className="container">
                            <div className="how-top-apply-page-last-student-section-inner">
                                <div className="how-top-apply-page-last-student-section-inner-teo">
                                    <p>We have the experience<br /> you need to <br /><span>get into your dream <br />university!</span>

                                    </p>

                                    <div className="how-top-apply-page-last-student-section-inner-border"></div>
                                    <div className='footer-top-map-img-button'>
                                        <a className='footer-top-map-img-button-link' href='https://calendly.com/athenaeducation/counseling-webinar'> Book a Consultation <span><img src={ClaOne} className="normal" alt="" /><img src={ClaTwo} className="normal-ho" alt="" /></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div >
        );
    }
}
export default WhatWeDo;
