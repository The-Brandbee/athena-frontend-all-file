import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";
import ClaOne from '../img/cla-b.png';
import ClaTwo from '../img/cla-b2.png';
import Students from '../img/footer-vector/US.jpg';
import AdmissionsTwo from '../img/admissions4.png';
import AdmissionsNew from '../img/admissions3.png';


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

class AdmissionsUs extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div className="pmp-profile-page our-team-page admissions-page admissions-us">
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
                                            <h3>87% of our students </h3>
                                            <h2>have gotten into the top <br />50 US colleges.</h2>
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
                            <div className='col-md-6'>
                                <div className='track-your-college-left'>
                                    <h3>Step-wise admission process</h3>
                                    <h2>We guide you at each step of the process</h2>
                                    <p>The application you submit to any college should be, precise, authentic, yet strategic. This is the first way to communicate, through which the admission counselors at different universities will know about you. Therefore, we ensure that every detail filled in the application is immaculate.
                                    </p>

                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='track-your-college-right-img'>
                                    <img src={AdmissionsNew} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="pmp-profile-page-middle-section container">
                    <div className="heading-contact-middle">
                        <h2>Step-wise process to prepare for the <br />application process</h2>
                        <img src={AdmissionsTwo} />
                    </div>

                </div>

                <section className="admissions-tab-frame">
                    <div className="container">
                        <div className="admissions-tab-frame-middle-top">
                            <div className="admissions-tab-frame-middle">
                                <div className="heading-contact-middle">
                                    <h2>Step-wise application process</h2>
                                    <p>
                                        Here's a general overview of the application process for applying to universities in the US. Even though you can apply through the native application of the colleges, the most convenient way can be through the Common APP. Mostly all the major private colleges and universities are there on the Common App platform, with the exception of a few.

                                    </p>
                                    <p>Navigating through the Common App is simple, and mostly all the other native apps also have a similar interface.</p>
                                </div>
                            </div>
                            <div className="pmp-profile-page-middle-section container th-grade">

                                <div className="tab-pmp-profilr">
                                    <div class="student-top-collage-section-us-uk-left-tow-border"></div>
                                    <Accordion allowZeroExpanded>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Create an account
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <div className="th-grade-tab-open-frame">

                                                    <div className="th-grade-tab-open-frame-right">
                                                        <p>
                                                            Creating an account on Common App is easy, you simply have to add in your basic details, create new login credentials, complete your registration process, select “create account” and it is done.
                                                        </p>

                                                    </div>
                                                </div>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Add colleges
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <div className="th-grade-tab-open-frame">

                                                    <div className="th-grade-tab-open-frame-right">
                                                        <p>
                                                            Once you have created the account, you can go to the dashboard and start creating a list of colleges you want to apply to and add them to “Add to my college”. You can create filters based on the region, term deadlines, etc add up to 20 universities.
                                                        </p>
                                                    </div>
                                                </div>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    About you and your family
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <div className="th-grade-tab-open-frame">

                                                    <div className="th-grade-tab-open-frame-right">
                                                        <p>
                                                            This first section has several pages asking for information about you your family and your siblings.
                                                        </p>
                                                        <p>Feel free to complete the demographics section—not mandatory but can’t hurt to fill it out.  For the “language section”, we recommend that you select your mother tongue as the primary language and try to add as many languages as you are proficient in. </p>
                                                    </div>
                                                </div>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Educational details
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <div className="th-grade-tab-open-frame">

                                                    <div className="th-grade-tab-open-frame-right">
                                                        <p>
                                                            In this section, you need to add in all your educational details that include schools and colleges attended, grades, special courses if any and the years attended in, reporting GPA, cumulative GPA, summer programs, degrees if applicable, academic honors.
                                                        </p>
                                                        <p>The main goal of all the information that you add should reflect authenticity as well as strategic planning. If the schools do not provide any GPAs, you can simply leave those areas blank. While filling in the “future plans” section, if you are balancing between two or more options, we recommend you to choose the more unconventional and interesting one to add more weight to your future goals.  </p>
                                                    </div>
                                                </div>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Tests Attempted
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <div className="th-grade-tab-open-frame">

                                                    <div className="th-grade-tab-open-frame-right">
                                                        <p>
                                                            Fill in all the tests you have attempted and indicate the tests you want to report along with the scores and ranks. Some universities have prerequisites of tests, make sure to check the list of tests to the universities you are applying to. </p>
                                                        <p>
                                                            The predictive scores are phenomenal and it's best to have some confirmation from the counselor, especially for the 12th board results or any other test results that are yet to be announced while you are already applying to different universities.
                                                        </p>
                                                    </div>
                                                </div>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Activities & Work Experience
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <div className="th-grade-tab-open-frame">

                                                    <div className="th-grade-tab-open-frame-right">
                                                        <p>
                                                            The activity list is an important component of your application. Add on all your extracurricular involvements, participation grade level, position, leadership, accomplishments, organization name, intent to participate in similar activity in college, etc.
                                                        </p>
                                                        <p>
                                                            Even though you can add up to 10 activities you were engaged in, it is advised not to overdo or over stuff the section artificially, unless you really have extraordinary experiences to share. Adding around 8-9 activities is a good practice.
                                                        </p>
                                                    </div>
                                                </div>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Writing Responses

                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <div className="th-grade-tab-open-frame">

                                                    <div className="th-grade-tab-open-frame-right">
                                                        <p>
                                                            The writing section is reflective and philosophical  - introspection, meditation, do you know yourself, who you are what you want, all of this is reflected in this section. In the “additional information”, if you really have any activities worth mentioning that could not fit into the ‘Activity’ section, here is the place to add it.

                                                        </p>
                                                        <p>It is better to provide the context of the activities you mentioned earlier. Use the additional information space as a footnote or as a place to showcase your pieces of evidence. In the section that asks “Has Covid affected you?”, it is advised to leave it blank, unless you have been profoundly affected by the pandemic beyond other people. </p>
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
                                                            Inviting recommenders is a very simple interface, they will receive the link and they can open the link and write recommendations for you - go for quality, diversity, and recency in LORs. Think of it as a legal case you are presenting your argument, where every bit is backed by supporting documents and evidence.
                                                        </p>
                                                        <p>
                                                            Completing the FERPA Release Authorization will grant your high school permission to send those records on your behalf. The important advice is to check the box because if a university sees that you have not waived your FERPA right, it does not set up a good objective process.
                                                        </p>
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
                                    <p>Getting into the Ivy League can<br /><span>change your life personally <br />& professionally.</span>
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
export default AdmissionsUs;
