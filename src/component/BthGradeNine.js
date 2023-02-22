import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";
import GradeOne from '../img/grade-1.jpg';
import One from '../img/One.jpg';
import Two from '../img/Two.jpg';
import Three from '../img/Three.jpg';
import Four from '../img/four.jpg';
import Five from '../img/five.jpg';

import ArrowOne from '../img/arrow-1.png';
import Arrowtwo from '../img/arrow-2.png';

import BannerTwo from '../img/banner/9th.jpg';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';


import MobileTop from '../img/mobilebanner/mobile-9th.jpg';

class BthGradeNine extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div className="pmp-profile-page">
                <div className="banner-section desktopD">
                    <div className='first-slide second'>
                        <div className='banner-image'>
                            <img src={BannerTwo} alt="" />
                        </div>
                        <div className='second-banner-changehover'>
                            <div className='container'>
                                <div className='second-banner-changehover-main'>
                                    <div className='second-banner-changehover-left grade-add-design-frame'>


                                        <div className='second-banner-changehover-left2 small-banner'>
                                            <h3>DISCOVER:</h3>
                                            <h2>Start Early </h2>
                                            <p>for guided exploration</p>
                                        </div>

                                    </div>
                                    <div className='second-banner-changehover-right'>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-section MobileD none">
                    <img src={MobileTop} alt="" />
                </div>
                <div className="pmp-profile-page-middle-section container th-grade">
                    <div className="heading-contact-middle">
                        <h3>About the program</h3>
                        <h2>Personal Mentorship Program for 9th graders</h2>
                        <p>Our objective with 9th-grade students is to focus on the breadth and depth. We provide exposure to<br /> a wide spectrum of ideas, identify their areas of interest through structured intellectual exploration, <br />and understand their capacity to excel. </p>
                    </div>
                    <div className="tab-pmp-profilr">
                        <Accordion allowZeroExpanded>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        ATS - Application Theme & Strategy
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="th-grade-tab-open-frame">
                                        <div className="th-grade-tab-open-frame-left">
                                            <img src={GradeOne} alt="" />
                                        </div>
                                        <div className="th-grade-tab-open-frame-right">
                                            <p>
                                                Breadth; focused on intellectual exploration, exposure to diverse disciplines, help open your eyes to what is available to study
                                            </p>
                                        </div>
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Psychometric Test
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="th-grade-tab-open-frame">
                                        <div className="th-grade-tab-open-frame-left">
                                            <img src={GradeOne} alt="" />
                                        </div>
                                        <div className="th-grade-tab-open-frame-right">
                                            <p>
                                                The report indicates what you may be interested in, what you’re passionate about, what drives you, and which field you’re are most likely to pursue.
                                            </p>
                                        </div>
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Capstone Projects
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="th-grade-tab-open-frame">
                                        <div className="th-grade-tab-open-frame-left">
                                            <img src={GradeOne} alt="" />
                                        </div>
                                        <div className="th-grade-tab-open-frame-right">
                                            <p>
                                                Multiple projects for profile development each year. The number of projects depends on the point in the academic year you join us.
                                            </p>
                                        </div>
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Academy - Pick your Course
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="th-grade-tab-open-frame">
                                        <div className="th-grade-tab-open-frame-left">
                                            <img src={GradeOne} alt="" />
                                        </div>
                                        <div className="th-grade-tab-open-frame-right">
                                            <p>
                                                A specialized set of group workshops to develop your extracurricular profile and expand your academic interests; each course will culminate in a concrete project and strengthen your hard and soft skills.
                                            </p>
                                        </div>
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        1-1 Counseling
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="th-grade-tab-open-frame">
                                        <div className="th-grade-tab-open-frame-left">
                                            <img src={GradeOne} alt="" />
                                        </div>
                                        <div className="th-grade-tab-open-frame-right">
                                            <p>
                                                Weekly one-on-one sessions with one of our expert consultants for project guidance, subject selection, school selection, board selection, strategic profile decision-making.
                                            </p>
                                        </div>
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Summer Programs/External Competitions
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="th-grade-tab-open-frame">
                                        <div className="th-grade-tab-open-frame-left">
                                            <img src={GradeOne} alt="" />
                                        </div>
                                        <div className="th-grade-tab-open-frame-right">
                                            <p>
                                                Guidance and applications to summer programs and competitions, helping you extract the most value out of the experience, and make an impression on your professor (who may want to provide you an LOR by the end).
                                            </p>
                                        </div>
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>

                                        Planning Meetings


                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="th-grade-tab-open-frame">
                                        <div className="th-grade-tab-open-frame-left">
                                            <img src={GradeOne} alt="" />
                                        </div>
                                        <div className="th-grade-tab-open-frame-right">
                                            <p>
                                                Regular updates for parents to provide an overarching view of progress made and share a macro-level plan of action.
                                            </p>
                                        </div>
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>




                        </Accordion>

                    </div>
                </div>
                <div className="marginBottom"></div>
                <section className='track-your-college bthgrade None'>
                    <div className="container">
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className='track-your-college-left text-center'>
                                    <h3>Our Approach</h3>
                                    <h2>Our approach stands on five pillars</h2>

                                </div>
                                <div className="Growth-Mindset-frame-middle">
                                    <div className="Growth-Mindset-frame-middleOne text-center">
                                        <ScrollAnimation offset={20} animatePreScroll={false} initiallyVisible={true} duration={2} animateIn="fadeIn">

                                            <div className="Growth-Mindset-frame-img">
                                                <img src={One} />
                                            </div>
                                        </ScrollAnimation>
                                        <h4>Growth Mindset</h4>
                                        <p>Our mentors prepare you to view all challenges as learning opportunities and strive to be forever
                                            <span>“Better Than Yesterday”.</span></p>
                                    </div>
                                    <div className="Growth-Mindset-frame-middleOne text-center">
                                        <ScrollAnimation offset={20} animatePreScroll={false} initiallyVisible={true} duration={2} animateIn="fadeIn">

                                            <div className="Growth-Mindset-frame-img">
                                                <img src={Two} />
                                            </div>
                                        </ScrollAnimation>
                                        <h4>Quality Assurance</h4>
                                        <p>
                                            Our in-house experts and mentors follow stringent systems and processes to model the highest standards of excellence and quality our students deserve.
                                        </p>
                                    </div>
                                    <div className="Growth-Mindset-frame-middleOne text-center">
                                        <ScrollAnimation offset={20} animatePreScroll={false} initiallyVisible={true} duration={2} animateIn="fadeIn">

                                            <div className="Growth-Mindset-frame-img">
                                                <img src={Three} />
                                            </div>
                                        </ScrollAnimation>
                                        <h4>Personalized <br />Mentorship</h4>
                                        <p>
                                            By rejecting the ‘cookie-cutter model’ of profile development, we tailor a unique Application Theme & Strategy to a student’s own unique interests, passions, and ikigai.

                                        </p>
                                    </div>
                                    <div className="Growth-Mindset-frame-middleOne text-center">
                                        <ScrollAnimation offset={20} animatePreScroll={false} initiallyVisible={true} duration={2} animateIn="fadeIn">
                                            <div className="Growth-Mindset-frame-img">
                                                <img src={Four} />
                                            </div>
                                        </ScrollAnimation>
                                        <h4>Life Coaching</h4>
                                        <p>
                                            Beyond college admissions, we equip you with instrumental life skills, from leadership to time management, for future success.

                                        </p>
                                    </div>
                                    <div className="Growth-Mindset-frame-middleOne text-center">
                                        <ScrollAnimation offset={20} animatePreScroll={false} initiallyVisible={true} duration={2} animateIn="fadeIn">
                                            <div className="Growth-Mindset-frame-img">
                                                <img src={Five} />
                                            </div>
                                        </ScrollAnimation>
                                        <h4>Starting Early</h4>
                                        <p>
                                            With acceptance rates rapidly falling, we encourage you to begin your profile development journey as early as possible, thus giving you a competitive advantage over the rest.

                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <section className="admission-to-your-dream-university-frame color-change">
                    <div className="admission-to-your-dream-university-frame-middle container">
                        <div className="admission-to-your-dream-university-frame-middle-left">
                            <p>You are just a step away from your  <span>dream university.</span></p>
                        </div>
                        <div className="admission-to-your-dream-university-frame-middle-right what-we-do-section-page">
                            <div className='footer-top-map-img-button'>

                                <a target="_blank" className='footer-top-map-img-button-link' href='https://calendly.com/athenaeducation/counseling-webinar'> Book a Consultation
                                    <span><img src={Arrowtwo} className="normal" alt="" /><img src={Arrowtwo} className="normal-ho" alt="" /></span></a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default BthGradeNine;
