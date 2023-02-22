import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";
import Team from '../img/team-main.png';
import Apply from '../img/apply3.png';
import ArrowOne from '../img/arrow-1.png';
import Arrowtwo from '../img/arrow-2.png';
import ClaOne from '../img/cla-b.png';
import ClaTwo from '../img/cla-b2.png';
import Students from '../img/students-banner-7.jpg';
import PromiseOne from '../img/what-we-do-1.jpg';
import AdmissionsTwo from '../img/admissions2.png';
import AdmissionsNew from '../img/admissions.png';


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

class Admissions extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div className="pmp-profile-page our-team-page admissions-page">
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
                                            <h3>80% of our students </h3>
                                            <h2>have gotten into top 10<br /> universities of the UK.</h2>
                                            <p>You can be the next!</p>
                                        </div>
                                    </div>
                                    <div className='second-banner-changehover-right'>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className='track-your-college admissions-page'>
                    <div className="container">
                        <div className='row'>
                            <div className='col-md-7'>
                                <div className='track-your-college-left'>
                                    <h3>Step-wise admission process</h3>
                                    <h2>Your next step to the future<br /> can start from here</h2>
                                    <p>The application you submit to any college should be, precise, authentic, yet strategic. This is the first way to communicate, through which the admission counselors at different universities will know about you. Therefore, we ensure that every detail filled in the application is immaculate. </p>

                                </div>
                            </div>
                            <div className='col-md-5'>
                                <div className='track-your-college-right-img'>
                                    <img src={AdmissionsNew} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="pmp-profile-page-middle-section container">
                    <div className="heading-contact-middle">
                        <h2>Top things the admission counsel will <br />keep in mind reviewing your application</h2>
                        <img src={AdmissionsTwo} />
                    </div>

                </div>

                <section className="admissions-tab-frame">
                    <div className="container">
                        <div className="admissions-tab-frame-middle-top">
                            <div className="admissions-tab-frame-middle">
                                <div className="heading-contact-middle">
                                    <h2>Step-wise application process</h2>
                                    <p>Here's a general overview of the application process for applying to universities in the UK. Even though you can apply through the native application of the colleges, the most convenient way can be through the UCAS platform. Universities and Colleges Admissions Service is an independent charity and the UK's shared admissions service for higher education.
                                    </p>
                                    <p>Navigating through the UCAS interface is simple, and mostly all the other native apps also have a similar interface.</p>
                                </div>
                            </div>
                            <div className="pmp-profile-page-middle-section container th-grade">

                                <div className="tab-pmp-profilr">
                                    <div class="student-top-collage-section-us-uk-left-tow-border"></div>
                                    <Accordion allowZeroExpanded>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Register with UCAS
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <div className="th-grade-tab-open-frame">

                                                    <div className="th-grade-tab-open-frame-right">
                                                        <p>
                                                            Registering on the UCAS Hub is easy, you simply have to add in your basic details, create new login credentials, complete your registration process, select “create account” and it is done.
                                                        </p>

                                                    </div>
                                                </div>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Complete your details
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <div className="th-grade-tab-open-frame">

                                                    <div className="th-grade-tab-open-frame-right">
                                                        <p>
                                                            Once you have created the account, you can go to the dashboard where you will see a tile named ‘Your application’ and click ‘Start’ to begin your application. This section mainly asks for your basic details and all mandatory fields have to be filled in and cannot be skipped. Make sure all the details are authentic and match your documents.
                                                        </p>
                                                    </div>
                                                </div>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Add your education history
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <div className="th-grade-tab-open-frame">

                                                    <div className="th-grade-tab-open-frame-right">
                                                        <p>
                                                            All your qualifications from secondary education onwards have to be entered in this section.
                                                        </p>
                                                        <p>You need to add in the details of the educational qualification even if you are awaiting the results. However, you will have to share the result with your chosen university or college when you get them.</p>
                                                    </div>
                                                </div>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Complete your employment history
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <div className="th-grade-tab-open-frame">

                                                    <div className="th-grade-tab-open-frame-right">
                                                        <p>
                                                            In this section you can add all your work experience if you have taken up full-time or part-time jobs. Fill in the name and address of the companies you have worked in, and add your job description and start/finish dates.
                                                        </p>
                                                        <p>You can add up to 5 experiences, however, any volunteer, unpaid or social work should not be included in this section. If you do not have any paid work experience, you can leave this section blank and mark it as completed. </p>
                                                    </div>
                                                </div>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Select your course choices
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <div className="th-grade-tab-open-frame">

                                                    <div className="th-grade-tab-open-frame-right">
                                                        <p>
                                                            In this section, you can add your course choices and add up to five courses. You can select the course of any preference for different universities.
                                                        </p>
                                                        <p>The colleges or universities do not have access to where else you have applied and which courses you have chosen.</p>
                                                    </div>
                                                </div>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Write a personal statement
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <div className="th-grade-tab-open-frame">

                                                    <div className="th-grade-tab-open-frame-right">
                                                        <p>
                                                            This is one of the most important sections of your application. This is the area where you can show your passion for getting admission to that college, what skills and experiences you have, and how you can be the best fit for them.
                                                        </p>
                                                        <p>Your personal statement has to be at least 1,000 characters long and can go up to 4,000 characters or 47 lines, whichever comes first.</p>
                                                    </div>
                                                </div>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Submit your application

                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <div className="th-grade-tab-open-frame">

                                                    <div className="th-grade-tab-open-frame-right">
                                                        <p>
                                                            Before submitting your application, review it thoroughly. Make sure you have not missed out on any information and most importantly, ensure that all the details filled are authentic and backed by documents.
                                                        </p>
                                                        <p>Check the box of ‘Read and agree declaration’. This will allow the portal to process your application and share it with the colleges/universities you have shortlisted.  </p>
                                                    </div>
                                                </div>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Recommenders and LORs
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <div className="th-grade-tab-open-frame">

                                                    <div className="th-grade-tab-open-frame-right">
                                                        <p>
                                                            Your application cannot be submitted with the recommendation or LORs from your teacher, advisor, or professional who knows you academically and write about you. Go for quality, diversity, and recency in LORs.
                                                        </p>
                                                        <p>Think of it as a legal case you are presenting your argument, where every bit is backed by supporting documents and evidence. </p>
                                                    </div>
                                                </div>
                                            </AccordionItemPanel>
                                        </AccordionItem>





                                    </Accordion>

                                </div>
                                <div className="ad-last-line">
                                    <p>Your entire transcript will go to the universities only after a thorough analysis by<br /> your counselors.</p>
                                </div>
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
                                    <p>Start your search here and<br /><span>get the future that's <br />best for you.</span>
                                        <br />We make your profile spectacular and stand<br /> out from the crowd.
                                    </p>

                                    <div className="how-top-apply-page-last-student-section-inner-border"></div>
                                    <div className='footer-top-map-img-button'>
                                        <a target="_blank" className='footer-top-map-img-button-link' href='https://calendly.com/athenaeducation/counseling-webinar'> Book a Consultation session <span><img src={ClaOne} className="normal" alt="" /><img src={ClaTwo} className="normal-ho" alt="" /></span></a>
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
export default Admissions;
