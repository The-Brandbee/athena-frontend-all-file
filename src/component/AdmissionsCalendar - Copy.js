import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";
import ApproachThree from '../img/ApproachOne3.png';
import ArrowOne from '../img/arrow-1.png';
import Arrowtwo from '../img/arrow-2.png';
import Testimonials from '../Testimonials';
import ClaOne from '../img/cla-b.png';
import ClaTwo from '../img/cla-b2.png';
import Students from '../img/footer-vector/Calendar.jpg';
import BannerTwo from '../img/banner-2.jpg';
import 'react-accessible-accordion/dist/fancy-example.css';

class AdmissionsCalendar extends React.Component {
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
                                            <h2>Your complete guide to</h2>
                                            <h3>admission calendar<br /> and deadlines</h3>
                                            <h2>of different<br /> universities/colleges.</h2>
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
                        <h3>Admission calendar</h3>
                        <h2>  2023-2024 Undergraduate <br />Admissions Cycle</h2>

                    </div>

                </div>


                <section className="Undergraduate-Admissions-frame">
                    <div className='container'>
                        <div className="Undergraduate-Admissions-frame-middle">
                            <div className="Undergraduate-Admissions-frame-middle-number">
                                <h4>June 2022</h4>
                                <ul> 
                                    <li><div><span>Common App Essay (CAE) unit</span></div>

                                        <ul>
                                            <li><span>Prompt selection (strategy), ideation, outlining, drafting, editing for the personal essay genre (creative writing)</span></li>
                                            <li><span>Preliminary college selection process (College Lists) begins: research, parameters, strategy, including consideration of initial ED/(R)EA options (subject to significant revision based on later changes in scholar profile and preferences)</span></li>
                                        </ul>
                                    </li>
                                    <li><div><span>UCAS Personal Statement (PS) unit</span></div>
                                        <ul>
                                            <li><span>Research, ideation, outlining, drafting, editing for the statement of purpose (SOP) genre (academic writing)</span></li>
                                            <li><span>Activity List process begins: identification of activities, projects, hobbies that may be featured in undergraduate applications, including resumes and portfolios, professional writing guidance</span></li>
                                            <li><span>Letters of Recommendation (LOR) process begins: subject(s) and recommender selection, brag sheet composition, formal requests</span></li>
                                        </ul>
                                    </li>
                                    <li><div><span>May 3 -</span> UCAS undergraduate application officially opens for 2023 entry</div></li>
                                    <li><div>University of California (UC) Personal Insight Questions (PIQ) unit: prompt selection (strategy), ideation, drafting, editing</div></li>
                                </ul>
                            </div>

                            <div className="Undergraduate-Admissions-frame-middle-number">
                                <h4>August 2022</h4>
                                <ul>
                                    <li><div><span>Aug 1 - 2022-23</span> - Common Application (including supplemental essay prompts), Coalition Application, University of California (UC) application officially open for 2023 entry</div></li>
                                    <li><div>Complete supplements for all deadlines November 1 and before</div></li>
                                </ul>
                            </div>
                            <div className="Undergraduate-Admissions-frame-middle-number">
                                <h4>September 2022</h4>
                                <ul>
                                    <li><div><span>Sep 27 - </span> HKUST (Hong Kong) application officially opens</div></li>
                                    <li><div><span>Sep 30 - </span> Complete essays due for December 1 deadline</div></li>
                                </ul>
                            </div>
                            <div className="Undergraduate-Admissions-frame-middle-number">
                                <h4>October 2022</h4>
                                <ul>
                                    <li><div>UK and US interviews unit: technical/academic vs. alumni interviews, speaking skills, professionalism, mock interviews (UK entry exam preparation also)</div></li>
                                    <li><div><span>Oct 1 - </span>  UC filing period begins. For Oxbridge applicants, recommended registration deadline for any pre-interview assessments (e.g. Thinking Skills Assessment). Recommended registration deadline for all US Early Round alumni interviews</div></li>
                                    <li><div><span>Oct 4 - </span>  Hong Kong University (HKU) application officially opens</div></li>
                                    <li><div><span>Oct 8 - </span>  Recommended UCAS application submission deadline (if applying to Oxbridge)</div></li>
                                    <li><div><span>Oct 15 - Official UCAS undergraduate deadline</span>  </div>
                                        <ul>
                                            <li><span>Applying to Oxford/Cambridge or for most courses in medicine, veterinary medicine/science, and dentistry), 18:00 UK time. (Note: Cambridge requires completion of the Supplementary Application Questionnaire (SAQ), typically due 1 week following the Oxbridge deadline</span></li>
                                            <li><span>EA/ED Deadline for some US universities (e.g. Georgia Tech for Georgia residents), the deadline for art supplements/portfolios</span></li>
                                            <li><span>NUS & NTU (Singapore) applications officially open</span></li>
                                        </ul>

                                    </li>
                                </ul>
                            </div>
                            <div className="Undergraduate-Admissions-frame-middle-number">
                                <h4>November 2022</h4>
                                <ul>
                                    <li><div>UK and US interviews preparation continued</div></li>
                                    <li><div><span>Nov 1 - </span>  Official EA/ED/REA deadline for most US universities</div></li>
                                    <li><div><span>Nov 17 -</span>  HKU early deadline</div></li>
                                    <li><div><span>Nov 19 - </span>  HKUST early deadline</div></li>
                                    <li><div><span>Nov 30 -</span> Official University of California undergraduate application deadline. (Note: The UC Application is extensive, and the portal is prone to crashing close to the deadline!) </div>


                                    </li>
                                </ul>
                            </div>
                            <div className="Undergraduate-Admissions-frame-middle-number">
                                <h4>December 2022</h4>
                                <ul>
                                    <li><div><span>Dec 1 -</span>  Official deadline for most US public universities (e.g. UT Austin), as well as scholarship deadlines for several universities (e.g. Dartmouth, BU, USC, and Claremont McKenna)</div></li>
                                    <li><div><span>Nov/Dec - </span> Oxbridge and US early round interviews</div></li>
                                    <li><div><span>Mid Dec -</span>  Most (private) REA/ED admissions results announced. Select Canadian early deadlines.</div></li>
                                </ul>
                            </div>
                            <div className="Undergraduate-Admissions-frame-middle-number">
                                <h4>January 2023</h4>
                                <ul>
                                    <li><div>Recommended date for letters of continued interest for deferred (R)EA/ED(I) applicants. US RD alumni interviews ongoing</div></li>
                                    <li><div><span>Jan 1-15 - </span> Official Regular Decision deadline for most US universities</div></li>
                                    <li><div><span>Jan 14 -</span>  HKUST main round deadline</div></li>
                                    <li><div><span>Jan 15-Feb -</span>   Canadian university deadlines. Selected US universities EA/ED (e.g. Michigan, Georgia Tech, UIUC) and Oxbridge admissions results typically announced</div></li>
                                    <li><div><span>Jan 25 -</span>  UCAS regular deadline (for the majority of UK undergraduate courses) 18:00 UK time</div></li>
                                </ul>
                            </div>
                            <div className="Undergraduate-Admissions-frame-middle-number">
                                <h4>February 2023</h4>
                                <ul>
                                    <li><div>US RD alumni interviews ongoing. Selected US universities EA/ED (e.g. UIUC) admissions results typically announced</div></li>
                                    <li><div><span>Feb 21 - </span> NUS (Singapore) deadline for IB students</div></li>
                                    <li><div><span>Feb 28 -</span>   NUS (Singapore) deadline for international students</div></li>
                                </ul>
                            </div>
                            <div className="Undergraduate-Admissions-frame-middle-number">
                                <h4>March 2023</h4>
                                <ul>
                                    <li><div>Primary RD admissions results period</div></li>
                                    <li><div><span>Mar 15-Apr 1 - </span>  RD admissions results announced for most US universities (including University of California, Ivy League (“Ivy Day”), Stanford))</div></li>
                                    <li><div><span>Mar 19 -</span>   NTU (Singapore) deadline</div></li>
                                </ul>
                            </div>
                            <div className="Undergraduate-Admissions-frame-middle-number">
                                <h4>April 2023</h4>
                                <ul>
                                    <li><div>US college commitment period. Waitlist for most US universities active</div></li>
                                    <li><div>College commitment guidance: comparison of offers, financial aid</div></li>
                                    <li><div>Waitlist process guidance (if applicable): LOCI ideation, outlining, editing </div></li>
                                </ul>
                            </div>
                            <div className="Undergraduate-Admissions-frame-middle-number">
                                <h4>May - June 2023</h4>
                                <ul>
                                    <li><div>College commitment period continued</div></li>
                                    <li><div><span>May 1 -</span>   Candidate reply deadline for most US universities (including payment of deposit)</div></li>
                                </ul>
                            </div>
                            <div className="Undergraduate-Admissions-frame-middle-number">
                                <h4>July 2023</h4>
                                <ul>
                                    <li><div>Final candidate reply deadline for most UCAS schools (including payment of deposit)
                                    </div></li>
                                </ul>
                            </div>
                            <div className="Undergraduate-Admissions-frame-middle-number">
                                <h4>August - September 2023</h4>
                                <ul>
                                    <li><div>Matriculation date for most universities
                                    </div></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </section>


                <section className="admissions-calendar-plz-note">
                    <div className="container">
                        <div className="admissions-calendar-plz-note-middel">
                            <h4>Please note:</h4>
                            <ul>
                                <li>All official standardized test scores must be submitted two weeks prior to the final application deadlines.
                                </li>
                                <li>UCAS and Canadian deadlines and admissions notifications ongoing (i.e. no standard date)</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="how-top-apply-page-last-student-section our-student-success">
                    <img src={Students} alt="" />
                    <div className="how-top-apply-page-last-student-section-inner-main">
                        <div className="container">
                            <div className="how-top-apply-page-last-student-section-inner">
                                <div className="how-top-apply-page-last-student-section-inner-teo">
                                    <p>We help you  in organizing your<br /> time, setting priorities and <br />
                                        <span>getting you where you<br /> want to be.</span><br />
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

            </div>
        );
    }
}
export default AdmissionsCalendar;
