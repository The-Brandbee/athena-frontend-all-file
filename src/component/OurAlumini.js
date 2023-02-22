import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Testimonials from '../Testimonials';
import ClaOne from '../img/cla-b.png';
import ClaTwo from '../img/cla-b2.png';
import Students from '../img/students-banner-12.jpg';
import WhyUsOne from '../img/why-us-1.jpg';
import VideoWhy from '../img/video.jpg';
import LogoThree from '../img/tab-logo-3.jpg';
import LogoFour from '../img/tab-logo-4.jpg';
import aluminiLogoOne from '../img/alumini-Logo1.jpg';
import aluminiLogoTwo from '../img/alumini-Logo2.jpg';
import aluminiLogoThree from '../img/alumini-Logo3.jpg';
import aluminiLogoFour from '../img/alumini-Logo4.jpg';
import aluminiLogoFive from '../img/alumini-Logo5.jpg';
import aluminiLogoSix from '../img/alumini-Logo6.jpg';
import aluminiLogoSeven from '../img/alumini-Logo7.jpg';
import aluminiLogoEight from '../img/alumini-Logo8.jpg';
import aluminiLogoNine from '../img/alumini-Logo9.jpg';
import aluminiLogoTen from '../img/alumini-Logo10.jpg';
import ouraluminiThree from '../img/our-alumini3.png';
import ouraluminiTwo from '../img/our-alumini2.png';
import ouraluminiFour from '../img/our-alumini4.png';
import ResultOne from '../img/result-1.jpg';
import AluminiOne from '../img/alumini-1.jpg';


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

class OurAlumini extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div className="pmp-profile-page our-team-page admissions-page admissions-us why-us">
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
                                            <h3>Our history, values,<br /> and mission </h3>
                                            <h2>shape Athena’s future</h2>
                                        </div>
                                    </div>
                                    <div className='second-banner-changehover-right'>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="Acceptance-Rate-Comparison-frame track-your-college">
                    <div className="container">
                        <div className='track-your-college-left text-center'>
                            <h3>Some alumni and their stories</h3>
                            <h2>The Athena Alumni Network spans <br />over 300 students</h2>
                            <p>Athena alumni are accepted to the finest colleges and go on the distinguish themselves in their fields. </p>
                        </div>
                    </div>
                </section>


                <section className="Alumni-Network-expands-middle-frame">
                    <div className="container">
                        <div className="Alumni-Network-expands-middle-frame-left">
                            <div className="Alumni-Network-expands-middle-frame-inner">
                                <img src={AluminiOne} />
                                <h4>Arnav Agarwal</h4>
                                <h5>DPS Rajnagar</h5>
                                <p>Received a 100% scholarship to<br /> Harvard University</p>
                            </div>
                            <div className="Alumni-Network-expands-middle-frame-inner">
                                <img src={AluminiOne} />
                                <h4>Arnav Agarwal</h4>
                                <h5>DPS Rajnagar</h5>
                                <p>Received a 100% scholarship to<br /> Harvard University</p>
                            </div>
                            <div className="Alumni-Network-expands-middle-frame-inner">
                                <img src={AluminiOne} />
                                <h4>Arnav Agarwal</h4>
                                <h5>DPS Rajnagar</h5>
                                <p>Received a 100% scholarship to<br /> Harvard University</p>
                            </div>
                        </div>

                    </div>
                </section>


                <section className="Acceptance-Rate-Comparison-frame track-your-college">
                    <div className="container">
                        <div className='track-your-college-left text-center'>
                            <h3>Our Founding Vision</h3>
                            <h2>A word from our founders</h2>
                        </div>
                        <div className="words-of-our-founders-frame">
                            <div className="words-of-our-founders-frame-icon">
                                <img src={ouraluminiThree} />
                            </div>

                            <div className="words-of-our-founders-frame-left">
                                <img src={ouraluminiTwo} />
                            </div>
                            <div className="words-of-our-founders-frame-right">
                                <p>Athena is about transforming high school students into the leaders of tomorrow, into the best researchers, the best social activists. We want to find them opportunities so they grow as scholars, but also create an impact beyond their classrooms. Our students write books, start clubs and NGOs. They do internships with professional organizations and start businesses. In all that they do, they exemplify the highest standards of excellence.</p>
                                <h4>Rahul Subramaniam</h4>
                            </div>
                        </div>
                        <div className="words-of-our-founders-frame">
                            <div className="words-of-our-founders-frame-icon">
                                <img src={ouraluminiThree} />
                            </div>

                            <div className="words-of-our-founders-frame-left">
                                <img src={ouraluminiTwo} />
                            </div>
                            <div className="words-of-our-founders-frame-right">
                                <p>When a student walks into Athena, the first thing we do is draw three circles. One circle is to identify their passion, the second to understand their natural ability, and the third to analyze where they are most likely to succeed. We look at these three circles by merging our years of Ivy League experience and then create a unique strategy to maximize a student’s chances of admission into elite universities. Our objective is to take deserving Indian students, refine their skills, and bring them a world-class education.</p>
                                <h4>Poshak Agarwal</h4>
                            </div>
                        </div>

                    </div>
                </section>
                <section className="Companies-where-Athena-frame-alumini track-your-college">
                    <div className="container">
                        <div className='track-your-college-left text-center'>
                            <h3>Companies where Athena Alumni are working</h3>
                            <h2>Our Alumni are citizens who challenge the present,<br /> enrich the future, and contribute to a better world. </h2>
                        </div>
                        <div className="Companies-where-Athena-frame-logo-frame">
                            <div className="logo-frame-image-our-alumini">
                                <img src={aluminiLogoOne} alt="" />
                            </div>
                            <div className="logo-frame-image-our-alumini">
                                <img src={aluminiLogoTwo} alt="" />
                            </div>
                            <div className="logo-frame-image-our-alumini">
                                <img src={aluminiLogoThree} alt="" />
                            </div>
                            <div className="logo-frame-image-our-alumini">
                                <img src={aluminiLogoFour} alt="" />
                            </div>
                            <div className="logo-frame-image-our-alumini">
                                <img src={aluminiLogoFive} alt="" />
                            </div>
                            <div className="logo-frame-image-our-alumini">
                                <img src={aluminiLogoSix} alt="" />
                            </div>
                            <div className="logo-frame-image-our-alumini">
                                <img src={aluminiLogoSeven} alt="" />
                            </div>
                            <div className="logo-frame-image-our-alumini">
                                <img src={aluminiLogoEight} alt="" />
                            </div>
                            <div className="logo-frame-image-our-alumini">
                                <img src={aluminiLogoNine} alt="" />
                            </div>
                            <div className="logo-frame-image-our-alumini">
                                <img src={aluminiLogoTen} alt="" />
                            </div>

                            <div className="logo-frame-image-our-alumini">
                                <img src={aluminiLogoSix} alt="" />
                            </div>
                            <div className="logo-frame-image-our-alumini">
                                <img src={aluminiLogoSeven} alt="" />
                            </div>
                            <div className="logo-frame-image-our-alumini">
                                <img src={aluminiLogoEight} alt="" />
                            </div>
                            <div className="logo-frame-image-our-alumini">
                                <img src={aluminiLogoNine} alt="" />
                            </div>
                            <div className="logo-frame-image-our-alumini">
                                <img src={aluminiLogoTen} alt="" />
                            </div>

                            <div className="logo-frame-image-our-alumini">
                                <img src={aluminiLogoSix} alt="" />
                            </div>
                            <div className="logo-frame-image-our-alumini">
                                <img src={aluminiLogoSeven} alt="" />
                            </div>
                            <div className="logo-frame-image-our-alumini">
                                <img src={aluminiLogoEight} alt="" />
                            </div>
                            <div className="logo-frame-image-our-alumini">
                                <img src={aluminiLogoNine} alt="" />
                            </div>
                            <div className="logo-frame-image-our-alumini">
                                <img src={aluminiLogoTen} alt="" />
                            </div>

                            <div className="logo-frame-image-our-alumini">
                                <img src={aluminiLogoSix} alt="" />
                            </div>
                            <div className="logo-frame-image-our-alumini">
                                <img src={aluminiLogoSeven} alt="" />
                            </div>
                            <div className="logo-frame-image-our-alumini">
                                <img src={aluminiLogoEight} alt="" />
                            </div>
                            <div className="logo-frame-image-our-alumini">
                                <img src={aluminiLogoNine} alt="" />
                            </div>
                            <div className="logo-frame-image-our-alumini">
                                <img src={aluminiLogoTen} alt="" />
                            </div>

                            <div className="logo-frame-image-our-alumini">
                                <img src={aluminiLogoSix} alt="" />
                            </div>
                            <div className="logo-frame-image-our-alumini">
                                <img src={aluminiLogoSeven} alt="" />
                            </div>
                            <div className="logo-frame-image-our-alumini">
                                <img src={aluminiLogoEight} alt="" />
                            </div>
                            <div className="logo-frame-image-our-alumini">
                                <img src={aluminiLogoNine} alt="" />
                            </div>
                            <div className="logo-frame-image-our-alumini">
                                <img src={aluminiLogoTen} alt="" />
                            </div>


                            <div className="logo-frame-image-our-alumini">
                                <img src={aluminiLogoSix} alt="" />
                            </div>
                            <div className="logo-frame-image-our-alumini">
                                <img src={aluminiLogoSeven} alt="" />
                            </div>
                            <div className="logo-frame-image-our-alumini">
                                <img src={aluminiLogoEight} alt="" />
                            </div>
                            <div className="logo-frame-image-our-alumini">
                                <img src={aluminiLogoNine} alt="" />
                            </div>
                            <div className="logo-frame-image-our-alumini">
                                <img src={aluminiLogoTen} alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="Our-Resultsour-alumini-frame track-your-college">
                    <div className="container">
                        <div className='track-your-college-left text-center'>
                            <h3>Our Results</h3>
                            <h2>Athenians through the years</h2>
                        </div>
                        <div className="Our-Resultsour-alumini-frame-middle-sect">
                            <div className="Our-Resultsour-alumini-frame-middle-sect-left">
                                <img src={ouraluminiFour} alt="" />
                                <h4>Arnav Agarwal</h4>
                            </div>
                            <div className="Our-Resultsour-alumini-frame-middle-sect-left">
                                <img src={ouraluminiFour} alt="" />
                                <h4>Akshita Agarwal</h4>
                            </div>
                            <div className="Our-Resultsour-alumini-frame-middle-sect-left">
                                <img src={ouraluminiFour} alt="" />
                                <h4>Aamish</h4>
                            </div>
                            <div className="Our-Resultsour-alumini-frame-middle-sect-left">
                                <img src={ouraluminiFour} alt="" />
                                <h4>Aanya Jain</h4>
                            </div>
                            <div className="Our-Resultsour-alumini-frame-middle-sect-left">
                                <img src={ouraluminiFour} alt="" />
                                <h4>Aariz Faisal</h4>
                            </div>
                            <div className="Our-Resultsour-alumini-frame-middle-sect-left">
                                <img src={ouraluminiFour} alt="" />
                                <h4>Ahana Sur</h4>
                            </div>
                            <div className="Our-Resultsour-alumini-frame-middle-sect-left">
                                <img src={ouraluminiFour} alt="" />
                                <h4>Akshat Singh</h4>
                            </div>
                            <div className="Our-Resultsour-alumini-frame-middle-sect-left">
                                <img src={ouraluminiFour} alt="" />
                                <h4>Anandita Ran</h4>
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
                                    <p>Athena Alumni Network <br /><span>The Athena family <br />is forever.</span>
                                    </p>

                                    <div className="how-top-apply-page-last-student-section-inner-border"></div>
                                    <div className='footer-top-map-img-button'>
                                        <a className='footer-top-map-img-button-link' href='#'> Book a Consultation session <span><img src={ClaOne} className="normal" alt="" /><img src={ClaTwo} className="normal-ho" alt="" /></span></a>
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
export default OurAlumini;
