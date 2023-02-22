import React, { Component } from "react";
import { Link } from "react-router-dom";
import 'react-tabs/style/react-tabs.css';
import ClaOne from '../img/cla-b.png';
import ClaTwo from '../img/cla-b2.png';
import Students from '../img/footer-vector/our-story.jpg';
import PHILOSOPHY1 from '../img/our-story-14.jpg';
import PHILOSOPHY2 from '../img/our-story-15.jpg';
import PHILOSOPHY3 from '../img/our-story-16.jpg';
import ArrowOne from '../img/arrow-1.png';
import Arrowtwo from '../img/arrow-2.png';
import ApproachTwo from '../img/our-story-4.jpg';
import ApproachTwo2 from '../img/our-story-5.jpg';
import ApproachTwo3 from '../img/our-story-6.jpg';
import AdmissionsNew from '../img/our-story-1.jpg';
import ProfileOne from '../img/our-story-7.jpg';
import ProfileOne2 from '../img/our-story-8.jpg';
import ProfileOne3 from '../img/our-story-9.jpg';
import ProfileOne4 from '../img/our-story-10.jpg';
import ProfileOne5 from '../img/our-story-11.jpg';
import ProfileOne6 from '../img/our-story-12.jpg';
import PromiseOne from '../img/our-story-13.jpg';
import BannerTwo from '../img/our-story-3.jpg';
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import Calendar from "../container/Calendar";
import MobileTop from '../img/mobilebanner/mobile-our-story.jpg';
import MobileFooter from '../img/mobilebanner/Mobile-footer-our-story.jpg';


class OurStory extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div className="pmp-profile-page our-team-page admissions-page admissions-us why-us">
                <div className="banner-section desktopD">
                    <div className='first-slide second'>
                        <div className='banner-image'>
                            <img src={BannerTwo} alt="" />
                        </div>
                        <div className='second-banner-changehover'>
                            <div className='container'>
                                <div className='second-banner-changehover-main'>
                                    <div className='second-banner-changehover-left'>
                                        <div className='second-banner-changehover-left2'>

                                            <h2>In 2022, our acceptance<br /> rate to Princeton was</h2>
                                            <h3>MORE THAN 40%</h3>
                                            <p>Strategic Planning<br />
                                                Bespoke Mentorship<br />
                                                Student Brand Development</p>
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
                <section className='track-your-college admissions-page our-story'>
                    <div className="container">
                        <div className='row'>
                            <div className='col-md-7'>
                                <div className='track-your-college-left'>
                                    <h3>Our Mission & Vision</h3>
                                    <h2>To transform the educational <br />landscape of India
                                    </h2>
                                    <p>
                                        We are guided by our passion for holistic coaching—embracing both depth and breadth—to achieve a dual purpose: to help students become the best versions of themselves and, as a result, get them into the top colleges in the world. Athena encourages students to harness their theoretical knowledge toward addressing practical social issues, both locally and globally. Our mission is to transform the Indian education system by cultivating the intellectually-curious scholars and leaders of tomorrow.
                                    </p>

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
                <section className="have-walked-so-far new-add">
                    <Calendar />
                </section>

                <section className="Our-Brand-Promise-what-we-do-frame our-story-page new-add">

                    <div className="Our-Brand-Promise-what-we-do-frame-left-right">
                        <div className='what-we-do-section-page-right'>
                            <div className='what-we-do-section-page-right-middle'>
                                <div className='why-choese-us-home-page-heading'>
                                    <h3>OUR PHILOSOPHY</h3>
                                    <h2>Odyssey to self-discovery</h2>
                                </div>

                                <div className="OUR-PHILOSOPHY-middle-main new">
                                    <div className="OUR-PHILOSOPHY-middle-main-left">
                                        <img src={PHILOSOPHY1} />
                                    </div>
                                    <div className="OUR-PHILOSOPHY-middle-main-right">
                                        <h4>Know Thyself</h4>
                                        <p>Identify what makes a student unique</p>
                                    </div>
                                </div>

                                <div className="OUR-PHILOSOPHY-middle-main new">
                                    <div className="OUR-PHILOSOPHY-middle-main-left">
                                        <img src={PHILOSOPHY2} />
                                    </div>
                                    <div className="OUR-PHILOSOPHY-middle-main-right">
                                        <h4>Push Thyself</h4>
                                        <p>Challenge them to be the best version of themselves</p>
                                    </div>
                                </div>

                                <div className="OUR-PHILOSOPHY-middle-main new">
                                    <div className="OUR-PHILOSOPHY-middle-main-left">
                                        <img src={PHILOSOPHY3} />
                                    </div>
                                    <div className="OUR-PHILOSOPHY-middle-main-right">
                                        <h4>Know Thy System</h4>
                                        <p>Use our insider expertise to get them into the world's finest universities</p>
                                    </div>
                                </div>


                            </div>
                        </div>


                    </div>
                    <div className="Our-Brand-Promise-what-we-do-frame-left ne-fix">
                        <img src={PromiseOne} alt="" />
                    </div>
                </section >
                <section className='track-your-college bthgrade how-to-apply student-journey our-story'>
                    <div className="container">
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className='track-your-college-left text-center'>
                                    <h3>Our FOCUS</h3>
                                    <h2>We are personalized, process-driven, <br />and excellence-oriented</h2>

                                </div>
                                <div className="how-top-chose-a-oprtiom-middle-frame">
                                    <div className="how-top-chose-a-oprtiom-middle-frame-middle">
                                        <img src={ApproachTwo} />
                                        <h4>PERSONALIZATION</h4>
                                        <p>Each student has unique talents and abilities. Therefore, we tailor their mentorship to best fit their individual journey. By cultivating their natural brand of creative intelligence, we help them tap into their potential and get them where they want to go.</p>

                                    </div>
                                    <div className="how-top-chose-a-oprtiom-middle-frame-middle">
                                        <img src={ApproachTwo2} />
                                        <h4>PROCESS-DRIVEN</h4>
                                        <p>Athena offers an insider set of tools to help students navigate the complexities of profile development, college applications, and personal skill development at large. With a shared sense of meaning and purpose, we maniacally focus on transforming students and achieving the best admissions results.</p>

                                    </div>
                                    <div className="how-top-chose-a-oprtiom-middle-frame-middle">
                                        <img src={ApproachTwo3} />
                                        <h4>EXCELLENCE-ORIENTED</h4>
                                        <p>We have years of experience helping students achieve incomparable academic milestones and college acceptances, especially in very competitive fields. We challenge ourselves to embrace innovation, chase quality and push our own boundaries by incorporating best practices in organizational excellence. </p>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="Founding-Members-frame">
                    <div className='container'>
                        <div className="heading-contact-middle">
                            <h3>Founding Members</h3>
                            <h2>From our founders' vision, Athena emerged</h2>
                        </div>
                        <section className="project-profile-development-frame newadd-n">
                            <div className="project-profile-development-frame-left">
                                <div className="project-profile-development-frame-left-frame">

                                    <img src={ProfileOne3} />
                                    <img src={ProfileOne4} />
                                </div>
                                <div className="project-profile-development-frame-right-frame">
                                    <img src={ProfileOne6} />
                                </div>
                            </div>
                            <div className="project-profile-development-frame-right">
                                <div className="project-profile-development-frame-righttwo">
                                    <div className="heading-contact-middle">
                                        <h3>POSHAK AGARWAL </h3>
                                        <h2>Princeton, 2012</h2>
                                        <p>
                                            Poshak went to DPS R.K. Puram, where he graduated in the top 1% of his class and served as President of the Mathematics Society. In 11th grade, he was the only student from India to get into the Stanford SUMaC summer program on a full scholarship, part of the reason received 100% scholarship offers from Stanford and Princeton. At Princeton, Poshak was Co-President of the Princeton Entrepreneurship Club.

                                        </p>
                                    </div>

                                </div>
                            </div>
                        </section>
                        <section className="project-profile-development-frame our-story-2nd">

                            <div className="project-profile-development-frame-right">
                                <div className="project-profile-development-frame-righttwo">
                                    <div className="heading-contact-middle">
                                        <h3>RAHUL SUBRAMANIAM</h3>
                                        <h2>Princeton, 2011</h2>
                                        <p>
                                            Rahul went to high school in Fremont, California. He received perfect SAT scores and got into every Ivy League college to which he applied, finally choosing Princeton over Harvard. At Princeton, he studied Politics with a certificate in Political Economy. Rahul previously served as a Director of College Counseling at a prestigious college counseling and test prep company in California, before moving to India and co-founding Athena with Poshak
                                        </p>
                                    </div>

                                </div>
                            </div>
                            <div className="project-profile-development-frame-left">
                                <div className="project-profile-development-frame-left-frame">
                                    <img src={ProfileOne5} />

                                </div>
                                <div className="project-profile-development-frame-right-frame bottomspacw">

                                    <img src={ProfileOne} />
                                    <img src={ProfileOne2} />
                                </div>
                            </div>
                        </section>
                        <div className='footer-top-map-img-button'>

                            <Link className='footer-top-map-img-button-link' to='/our-team'> Meet our team <span><img src={ArrowOne} className="normal" alt="" /><img src={Arrowtwo} className="normal-ho" alt="" /></span></Link>
                        </div>
                    </div>
                </section>

                <section className="how-top-apply-page-last-student-section our-student-success footer-banner-bottom-new">
                    <img src={Students} alt="" />
                    <div className="how-top-apply-page-last-student-section-inner-main">
                        <div className="container">
                            <div className="how-top-apply-page-last-student-section-inner">
                                <div className="how-top-apply-page-last-student-section-inner-teo">
                                    <p>Build your human brand, <br />
                                        Stand out from the rest,<br />
                                        and become
                                        <br /><span>#BetterThanYesterday</span>
                                    </p>

                                    <div className="how-top-apply-page-last-student-section-inner-border"></div>
                                    <div className='footer-top-map-img-button'>
                                        <a className='footer-top-map-img-button-link' href='https://calendly.com/athenaeducation/counseling-webinar'>  Book a Consultation <span><img src={ClaOne} className="normal" alt="" /><img src={ClaTwo} className="normal-ho" alt="" /></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="Mobile footer-banner none">
                    <a target="_blank" href='https://calendly.com/athenaeducation/counseling-webinar'>
                        <img src={MobileFooter} alt="" />
                    </a>
                </div>

            </div >
        );
    }
}
export default OurStory;
