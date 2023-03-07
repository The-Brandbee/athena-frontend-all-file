import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";
import TeamMain from '../img/team-main.png';
import BrandLogoTwo from '../img/Brand-logo-2.png';
import BrandLogoThree from '../img/Brand-logo-3.png';
import Arrowtwo from '../img/arrow-2.png';
import ClaOne from '../img/cla-b.png';
import ClaTwo from '../img/cla-b2.png';
import Students from '../img/footer-vector/Canada.jpg';
import PromiseOne from '../img/what-we-do-1.jpg';
import BrandLogo from '../img/Brand-logo-1.png';
import AdmissionsNew from '../img/admissions5.png';
import BannerTwo from '../img/banner-2.jpg';



class AdmissionsCanada extends React.Component {
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

                                            <h2> Of the 68 scholars we<br /> worked with</h2>
                                            <h3>10 got into the Ivy <br />Leagues</h3>
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
                                    <h2>
                                        Explore your options and get tailored advice for your admission process
                                    </h2>
                                    <p>
                                        The application you submit to any college should be, precise, authentic, yet strategic. This is the first way to communicate, through which the admission counselors at different universities will know about you. Therefore, we ensure that every detail filled in the application is immaculate.
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
                        <h2>Here's a general overview of the<br /> application process</h2>

                    </div>

                </div>
                <section className="what-we-do-top-section admissions-canada">
                    <div className='container'>
                        <div className="what-we-do-top-section-top-middle">
                            <div className="what-we-do-top-section-top-middle-left">
                                <p>Explore and shortlist your university options</p>
                                <div className="what-we-do-top-section-top-middle-left-border"></div>
                            </div>
                            <div className="what-we-do-top-section-top-middle-left">
                                <p>Narrow down your program choices</p>
                                <div className="what-we-do-top-section-top-middle-left-border"></div>
                            </div>
                            <div className="what-we-do-top-section-top-middle-left">
                                <p>Check the application process and admissions process for each university</p>
                                <div className="what-we-do-top-section-top-middle-left-border"></div>
                            </div>
                            <div className="what-we-do-top-section-top-middle-left">
                                <p>Check whether you meet the language requirements for each university</p>
                                <div className="what-we-do-top-section-top-middle-left-border"></div>
                            </div>
                            <div className="what-we-do-top-section-top-middle-left">
                                <p>In most cases, you'll have to demonstrate proficiency in English through TOEFL or IELTS and program choices</p>
                                <div className="what-we-do-top-section-top-middle-left-border"></div>
                            </div>

                        </div>

                    </div>
                </section>

                <div className="container">
                    <div className="OUAC-Application-frame-admissions-canada-page">
                        <div className="pmp-profile-page-middle-section">
                            <div className="heading-contact-middle">
                                <h2>Step-wise application process</h2>
                                <p>The Canadian admissions process is mainly straightforward but quite different from the US process. There is no centralized application process for universities in Canada. Application processes vary by province. In some provinces, students can apply through a central application service. In others, you must apply directly to the university. You may also want to apply to more than one program or university in case you aren't admitted to your first choice.</p>
                            </div>
                        </div>
                        <div className="OUAC-Application-frame">
                            <div className="OUAC-Application-frame-left">
                                <h5>OUAC Application Process</h5>
                            </div>
                            <div className="OUAC-Application-frame-right">
                                <img src={BrandLogo} />
                            </div>
                        </div>
                        <section className="Undergraduate-Admissions-frame">
                            <div className='container--'>
                                <div className="Undergraduate-Admissions-frame-middle">
                                    <div className="Undergraduate-Admissions-frame-middle-number">
                                        <p>The OUAC or Ontario Universities' Application Centre is a not-for-profit centralized application platform for students looking to get into universities based in Ontario. Candidates fill out their application on the OUAC and then it transfers them to the respective university. Candidates can apply to as many universities as they want, however, they can apply to a maximum of 3 programs by a particular university or its affiliates. Also, universities have the right to limit the number of programs a candidate can apply to. Here are some basic steps to complete the application:</p>
                                        <ul className="OUAC-one">
                                            <li><div>Go onto the OUAC (Ontario Universities Application Centre) website and create your account </div></li>
                                            <li><div>Browse available programs by the university & select your preferred program to add to the Program Choices section.</div></li>
                                            <li><div>Once the OUAC 105 is submitted, each university will revert to your email with guidelines to create application portals.</div></li>
                                            <li><div>After you receive the email, create your application portal to access the college-specific essay prompts and other application/document requirements.</div></li>
                                            <li><div>Ideally, you should submit each university's application within three weeks of receiving the email or as per the deadlines mentioned on each university’s application portal.</div></li>
                                            <li><div>We recommend that you submit the initial OUAC 105 application by December 15th, since the University of Toronto's Early Deadline is December 15th.
                                            </div></li>
                                            <li><div>We recommend that you submit the initial OUAC 105 application by December 15th, since the University of Toronto's Early Deadline is December 15th.
                                            </div></li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className="Ontario-region-colleges">
                            <h4>Ontario region colleges that accept the OUAC</h4>
                            <div className="Ontario-region-colleges-middele-frame">
                                <div className="Ontario-region-colleges-middele-frame-two">
                                    <img src={TeamMain} />
                                </div>
                                <div className="Ontario-region-colleges-middele-frame-two">
                                    <img src={TeamMain} />
                                </div>
                                <div className="Ontario-region-colleges-middele-frame-two">
                                    <img src={TeamMain} />
                                </div>
                                <div className="Ontario-region-colleges-middele-frame-two">
                                    <img src={TeamMain} />
                                </div>
                                <div className="Ontario-region-colleges-middele-frame-two">
                                    <img src={TeamMain} />
                                </div>
                                <div className="Ontario-region-colleges-middele-frame-two">
                                    <img src={TeamMain} />
                                </div>
                                <div className="Ontario-region-colleges-middele-frame-two">
                                    <img src={TeamMain} />
                                </div>
                                <div className="Ontario-region-colleges-middele-frame-two">
                                    <img src={TeamMain} />
                                </div>
                                <div className="Ontario-region-colleges-middele-frame-two">
                                    <img src={TeamMain} />
                                </div>
                                <div className="Ontario-region-colleges-middele-frame-two">
                                    <img src={TeamMain} />
                                </div>
                                <div className="Ontario-region-colleges-middele-frame-two">
                                    <img src={TeamMain} />
                                </div>
                                <div className="Ontario-region-colleges-middele-frame-two">
                                    <img src={TeamMain} />
                                </div>
                                <div className="Ontario-region-colleges-middele-frame-two">
                                    <img src={TeamMain} />
                                </div>
                                <div className="Ontario-region-colleges-middele-frame-two">
                                    <img src={TeamMain} />
                                </div>
                                <div className="Ontario-region-colleges-middele-frame-two">
                                    <img src={TeamMain} />
                                </div>
                                <div className="Ontario-region-colleges-middele-frame-two">
                                    <img src={TeamMain} />
                                </div>
                                <div className="Ontario-region-colleges-middele-frame-two">
                                    <img src={TeamMain} />
                                </div>
                                <div className="Ontario-region-colleges-middele-frame-two">
                                    <img src={TeamMain} />
                                </div>
                                <div className="Ontario-region-colleges-middele-frame-two">
                                    <img src={TeamMain} />
                                </div>
                                <div className="Ontario-region-colleges-middele-frame-two">
                                    <img src={TeamMain} />
                                </div>
                                <div className="Ontario-region-colleges-middele-frame-two">
                                    <img src={TeamMain} />
                                </div>
                                <div className="Ontario-region-colleges-middele-frame-two">
                                    <img src={TeamMain} />
                                </div>
                                <div className="Ontario-region-colleges-middele-frame-two">
                                    <img src={TeamMain} />
                                </div>
                                <div className="Ontario-region-colleges-middele-frame-two">
                                    <img src={TeamMain} />
                                </div>
                                <div className="Ontario-region-colleges-middele-frame-two">
                                    <img src={TeamMain} />
                                </div>
                                <div className="Ontario-region-colleges-middele-frame-two">
                                    <img src={TeamMain} />
                                </div>
                                <div className="Ontario-region-colleges-middele-frame-two">
                                    <img src={TeamMain} />
                                </div>
                                <div className="Ontario-region-colleges-middele-frame-two">
                                    <img src={TeamMain} />
                                </div>
                            </div>
                        </div>
                        <div className="OUAC-Application-frame">
                            <div className="OUAC-Application-frame-left">
                                <h5>University of British Columbia <br />Application Process</h5>
                            </div>
                            <div className="OUAC-Application-frame-right">
                                <img src={BrandLogoTwo} />
                            </div>
                        </div>
                        <section className="Undergraduate-Admissions-frame">
                            <div className='container--'>
                                <div className="Undergraduate-Admissions-frame-middle">
                                    <div className="Undergraduate-Admissions-frame-middle-number">
                                        <p>The University of British Columbia is a public research university with campuses in Vancouver and Okanagan, British Columbia.</p>
                                        <ul className="OUAC-one">
                                            <li><div>The portal opens in early October 2022</div></li>
                                            <li><div><span>Admission Deadline:</span> January 15, 2023 (11:59 PST)</div></li>
                                            <li><div><span>Admissions decisions:</span> Late January to April 2023<br />
                                                UBC's admission process is not first-come, first-served. They evaluate applications continuously from January to April.</div></li>
                                            <li><div>UBC has an English language requirement that can be met by any of the tests mentioned on the UBC website under the admission requirements - English language competency</div></li>
                                            <li><div>UBC has an English language requirement that can be met by any of the tests mentioned on the UBC website under the admission requirements - English language competency</div></li>
                                            <li><div>
                                                The grades that need to be considered for an offer of admission from UBC differ by degree, and vary from year to year. In 2022, an 85% average on India’s grading scale was required.
                                            </div></li>


                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className="OUAC-Application-frame">
                            <div className="OUAC-Application-frame-left">
                                <h5>McGill University Application Process</h5>
                            </div>
                            <div className="OUAC-Application-frame-right">
                                <img src={BrandLogoThree} />
                            </div>
                        </div>
                        <section className="Undergraduate-Admissions-frame">
                            <div className='container--'>
                                <div className="Undergraduate-Admissions-frame-middle">
                                    <div className="Undergraduate-Admissions-frame-middle-number">
                                        <p>McGill University is a public research university located in Montreal, Quebec, Canada.</p>
                                        <ul className="OUAC-one">

                                            <li><div><span>Important dates and deadlines</span> </div>
                                                <ul className="Important-dates">
                                                    <li><div>The Portal opens on October 1st, 2022.</div></li>
                                                    <li><div>Application for Admission Deadline: January 15, 2023</div></li>
                                                    <li><div>Create your Minerva accounts.</div></li>
                                                    <li><div>You can register for two programs; the application will be considered separately for each.</div></li>
                                                </ul>
                                            </li>
                                            <li><div>Reporting SAT scores is encouraged as McGill has no essay prompts, and the admission is solely based on merit.</div></li>
                                            <li><span>Prerequisites by the board</span>
                                                <ul className="Important-dates">
                                                    <li><div>Prerequisites and Cut-Offs (IB Curriculum) at the McGill website under  Undergraduate Admissions</div></li>
                                                    <li><div>Check out the Prerequisites and Cut-Offs (IGCSE) at the McGill website under  Undergraduate Admissions / Apply / Requirements / International /Advanced-levels</div></li>
                                                    <li><div>Prerequisites and Cut-Offs (Indian School Certificate) at the McGill website under  Undergraduate Admissions / Apply / Requirements / International /India</div></li>
                                                </ul>

                                            </li>
                                            <li><span>Pre-Application to-do list</span>
                                                <ul className="Important-dates">
                                                    <li><div>IELTS/TOEFL</div></li>
                                                    <li><div>Predicted scores</div></li>
                                                    <li><div>Final IB diploma/Transcripts (if received)</div></li>
                                                    <li><div>Copy of high school transcript, including mid-year/final 1st-semester results for the final year.</div></li>
                                                    <li><div>No Additional Supporting documents (LORs, SoP) are required, unless:</div>
                                                        <ul className="You-have-applied">
                                                            <li>You have applied to Architecture, Education, Music, Nursing, Religious Studies, and/or
                                                                Social Work</li>
                                                            <li>You have completed the separate application for Major Entrance Scholarship and Financial Aid</li>
                                                            <li>You selected ‘Extenuating Circumstances’ on the application for admission.</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><div>
                                                You'll receive an email confirmation within 48 hours after submitting your application for admission. With the login information you receive, you can access your Minerva account to do the following:
                                            </div>
                                                <ul>
                                                    <li>Upload your documents (if required)</li>
                                                    <li>Verify that your documents have been received (you'll see a received date next to the item in the checklist)</li>
                                                    <li>See if additional documents have been requested by an admissions officer</li>
                                                    <li>Fill out applications for Scholarship and/or Financial Aid</li>
                                                    <li>View the decision that has been made on your application (consult our admission glossary for definitions)</li>
                                                    <li>Update your contact information</li>
                                                    <li>Verify your student housing application</li>
                                                </ul>

                                            </li>


                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className="ad-last-line-admissions-canada">
                            <p>It's important to check your Minerva account and email regularly! It is your responsibility to verify your status on <br />Minerva and ensure the completion of your application.</p></div>
                    </div>
                </div>
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
export default AdmissionsCanada;
