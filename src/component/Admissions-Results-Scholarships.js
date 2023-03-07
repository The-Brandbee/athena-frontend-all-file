import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";
import ApproachThree from '../img/ApproachOne4.png';
import ArrowOne from '../img/arrow-1.png';
import profileThree from '../img/profile-3.jpg';
import Testimonials from '../Testimonials';
import ClaOne from '../img/cla-b.png';
import ClaTwo from '../img/cla-b2.png';
import Students from '../img/students-banner-3.jpg';
import TestiTwo from '../img/testi-m.png';
import BannerTwo from '../img/banner-2.jpg';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';


import 'react-accessible-accordion/dist/fancy-example.css';

class AdmissionsResultsScholarships extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div className="pmp-profile-page">
                <div className="banner-section OurStudentSuccess-bannernewpage">
                    <div className='first-slide second'>
                        <div className='banner-image'>
                            <img src={BannerTwo} alt="" />
                        </div>
                        <div className='second-banner-changehover'>
                            <div className='container'>
                                <div className='second-banner-changehover-main'>
                                    <div className='second-banner-changehover-left grade-add-design-frame'>


                                        <div className='second-banner-changehover-left2'>

                                            <h3>Our results </h3>
                                            <h2>are louder than our <br />words!</h2>
                                        </div>

                                    </div>
                                    <div className='second-banner-changehover-right'>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pmp-profile-page-middle-section container our-student-success">
                    <div className="heading-contact-middle">
                        <h3>Scholarship Case Study</h3>
                        <h2>The proud accomplishments of our scholars!</h2>

                    </div>

                </div>
                <section className="The-proud-accomplishments-frame">
                    <div className='container'>
                        <div className="The-proud-accomplishments-frame-middle">
                            <div className="The-proud-accomplishments-frame-left">
                                <img src={profileThree} alt="" />
                            </div>
                            <div className="The-proud-accomplishments-frame-right">
                                <div className="The-proud-accomplishments-frame-right-top-frame">
                                    <div className="The-proud-accomplishments-frame-right-top-frame-left">
                                        <img src={TestiTwo} alt="" />
                                    </div>
                                    <div className="The-proud-accomplishments-frame-right-top-frame-right">
                                        <h4>TULIP MITTAL </h4>
                                        <p>
                                            University of California, Los Angeles '26 | Athena '22</p>
                                    </div>
                                </div>
                                <div className="The-proud-accomplishments-frame-right-top-frame-bottom">
                                    <p>In this book, Tulip dissects the socio-economic nuances of various fads and trends that we are surrounded by. Trends happen for a reason; maybe we start them or maybe we get carried by their sway. Tulip seeks to explore the cascading effects of giving into cultural trends that are irresistible. But what exactly unfolds when all of us seek to be a part of unique cultural phenomena that hold sway over the world?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="The-proud-accomplishments-frame The-proud-accomplishments-framesec">
                    <div className='container'>
                        <div className="The-proud-accomplishments-frame-middle">

                            <div className="The-proud-accomplishments-frame-right">
                                <div className="The-proud-accomplishments-frame-right-top-frame">
                                    <div className="The-proud-accomplishments-frame-right-top-frame-left">
                                        <img src={TestiTwo} alt="" />
                                    </div>
                                    <div className="The-proud-accomplishments-frame-right-top-frame-right">
                                        <h4>AAMISH A. BEG  </h4>
                                        <p>
                                            Dartmouth, '26 | Athena '22</p>
                                    </div>
                                </div>
                                <div className="The-proud-accomplishments-frame-right-top-frame-bottom">
                                    <p>
                                        Aamish co-founded Socale, a fun and inclusive social networking app currently based in San Diego, and backed by the Blackstone LaunchPad startup incubator. Socale matches like-minded individuals based on several filters, including personality, interests, values, and habits
                                    </p>
                                </div>
                            </div>
                            <div className="The-proud-accomplishments-frame-left">
                                <img src={profileThree} alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="The-proud-accomplishments-frame">
                    <div className='container'>
                        <div className="The-proud-accomplishments-frame-middle">
                            <div className="The-proud-accomplishments-frame-left">
                                <img src={profileThree} alt="" />
                            </div>
                            <div className="The-proud-accomplishments-frame-right">
                                <div className="The-proud-accomplishments-frame-right-top-frame">
                                    <div className="The-proud-accomplishments-frame-right-top-frame-left">
                                        <img src={TestiTwo} alt="" />
                                    </div>
                                    <div className="The-proud-accomplishments-frame-right-top-frame-right">
                                        <h4>RIA BHATNAGAR  </h4>
                                        <p>
                                            Brown University, '26 | Athena '22</p>
                                    </div>
                                </div>
                                <div className="The-proud-accomplishments-frame-right-top-frame-bottom">
                                    <p>
                                        Ria sang "Omar Sharif" for Tony award-winning musical, "The Band's Visit". She won the second position in the American Protege International Vocal Competition '21. This achievement also led her to perform at Carnegie Hall.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="pmp-profile-page-middle-section container our-student-success">
                    <div className="heading-contact-middle">

                        <h2>  Some initiatives of our scholars' </h2>

                    </div>

                </div>
                <section className="STUDENTACCOLADES-sectuon admissions-results-scholarships new">
                    <div className='container'>
                        <div className="STUDENTACCOLADES-sectuon-middle">

                            <div className="STUDENTACCOLADES-sectuon-middle-left-inner">
                                <div className="STUDENTACCOLADES-sectuon-middle-left-inner-left">
                                    <img src={ApproachThree} alt="" />
                                </div>
                                <div className="STUDENTACCOLADES-sectuon-middle-left-inner-right">
                                    <h4>She Dares</h4>
                                    <p><b>Ayesha Dhall</b> (The Shri Ram School '20) organized a series of events to empower women and encourage them to push their boundaries by engaging in adventure sports. She is now studying at Stanford University.</p>
                                </div>
                            </div>
                            <div className="STUDENTACCOLADES-sectuon-middle-left-inner">
                                <div className="STUDENTACCOLADES-sectuon-middle-left-inner-left">
                                    <img src={ApproachThree} alt="" />
                                </div>
                                <div className="STUDENTACCOLADES-sectuon-middle-left-inner-right">
                                    <h4>Anvesha</h4>
                                    <p><b>Amiya Jain</b> (The British School '18) founded Anvesha with a vision to tackle the social stigmas surrounding drug addiction and mental health. Amiya graduated from the University of Pennsylvania.</p>
                                </div>
                            </div>

                        </div>


                    </div>
                </section>

                <section className="how-top-apply-page-last-student-section our-student-success">
                    <img src={Students} alt="" />
                    <div className="how-top-apply-page-last-student-section-inner-main">
                        <div className="container">
                            <div className="how-top-apply-page-last-student-section-inner">
                                <div className="how-top-apply-page-last-student-section-inner-teo">
                                    <p>The learner always begins <br />by finding fault,<br />
                                        <span>but the scholar sees the<br /> positive merit in<br /> everything.
                                        </span>
                                    </p>

                                    <div className="how-top-apply-page-last-student-section-inner-border"></div>
                                    <div className='footer-top-map-img-button'>
                                        <a target="_blank" className='footer-top-map-img-button-link' href='https://calendly.com/athenaeducation/counseling-webinar'> Book a Consultation <span><img src={ClaOne} className="normal" alt="" /><img src={ClaTwo} className="normal-ho" alt="" /></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



            </div>
        );
    }
}
export default AdmissionsResultsScholarships;
