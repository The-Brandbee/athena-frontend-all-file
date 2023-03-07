import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Testimonials from '../Testimonials';
import ClaOne from '../img/cla-b.png';
import ClaTwo from '../img/cla-b2.png';
import Students from '../img/footer-vector/Popular-majors.jpg';
import LogoOne from '../img/tab-logo-1.jpg';
import LogoTwo from '../img/tab-logo-2.jpg';
import LogoThree from '../img/tab-logo-3.jpg';
import LogoFour from '../img/tab-logo-4.jpg';
import LogoFive from '../img/tab-logo-5.jpg';
import ArrowOne from '../img/arrow-1.png';
import Arrowtwo from '../img/arrow-2.png';


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

class AdmissionsTopColleges extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div className="pmp-profile-page our-team-page admissions-page admissions-us admissions-top-colleges">
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
                                            <h3>From the Ivy League<br /> to elite universities</h3>
                                            <h2>Athena helps you find the college that best suits your goals.</h2>

                                        </div>
                                    </div>
                                    <div className='second-banner-changehover-right'>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pmp-profile-page-middle-section">
                    <div className="heading-contact-middle">
                        <h2>Top colleges for popular majors</h2>

                        <div className="tab-section-inadmissions-top-colleges one">
                            <Tabs>
                                <TabList>
                                    <div className="container">

                                        <Tab>Computer Science</Tab>
                                        <Tab>Economics/Business</Tab>
                                        <Tab>Engineering</Tab>
                                        <Tab>Pre-Med/Biology</Tab>
                                    </div>
                                </TabList>


                                <TabPanel>
                                    <div className="container-mainadmissions-top-colleges">
                                        <div className="container">
                                            <div className="tab-section-image-frame">
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoOne} />
                                                </div>
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoTwo} />
                                                </div>
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoThree} />
                                                </div>
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoFour} />
                                                </div>
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoFive} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="container-mainadmissions-top-colleges">
                                        <div className="container">
                                            <div className="tab-section-image-frame">
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoOne} />
                                                </div>
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoTwo} />
                                                </div>
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoThree} />
                                                </div>
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoFour} />
                                                </div>
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoFive} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>

                                    <div className="container-mainadmissions-top-colleges">
                                        <div className="container">
                                            <h2>content 4</h2>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="container-mainadmissions-top-colleges">
                                        <div className="container">
                                            <h2>content 5</h2>
                                        </div>
                                    </div>
                                </TabPanel>

                            </Tabs>
                        </div>


                        <div className="tab-section-inadmissions-top-colleges two">
                            <Tabs>
                                <TabList>
                                    <div className="container">
                                        <Tab >Political Science</Tab>
                                        <Tab >Political Science</Tab>
                                        <Tab>Psychology</Tab>
                                        <Tab>History</Tab>
                                        <Tab>English Language & Literature</Tab>
                                    </div>
                                </TabList>

                                <TabPanel>
                                    <div className="container-mainadmissions-top-colleges">
                                        <div className="container">
                                            <div className="tab-section-image-frame">
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoOne} />
                                                </div>
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoTwo} />
                                                </div>
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoThree} />
                                                </div>
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoFour} />
                                                </div>
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoFive} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="container-mainadmissions-top-colleges">
                                        <div className="container">
                                            <div className="tab-section-image-frame">
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoOne} />
                                                </div>
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoTwo} />
                                                </div>
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoThree} />
                                                </div>
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoFour} />
                                                </div>
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoFive} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="container-mainadmissions-top-colleges">
                                        <div className="container">
                                            <div className="tab-section-image-frame">
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoOne} />
                                                </div>
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoTwo} />
                                                </div>
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoThree} />
                                                </div>
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoFour} />
                                                </div>
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoFive} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="container-mainadmissions-top-colleges">
                                        <div className="container">
                                            <h2>content 4</h2>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="container-mainadmissions-top-colleges">
                                        <div className="container">
                                            <h2>content 5</h2>
                                        </div>
                                    </div>
                                </TabPanel>

                            </Tabs>
                        </div>

                    </div>

                </div>

                <section className="admissions-tab-frame">
                    <div className="container">
                        <div className="admissions-tab-frame-middle-top">

                            <div className="pmp-profile-page-middle-section container th-grade">

                                <div className="tab-pmp-profilr">
                                    <div class="student-top-collage-section-us-uk-left-tow-border"></div>
                                    <Accordion allowZeroExpanded>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    College Type
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <div className="th-grade-tab-open-frame">

                                                    <div className="th-grade-tab-open-frame-right">
                                                        <p>Research university vs. liberal arts college vs. institute of technology (polytechnic institute) vs. other vocational/professional schools</p>
                                                        <p>Public vs. Private</p>
                                                        <p>Identity-based
                                                            <ul>
                                                                <li>Non-secular vs. secular/nonsectarian</li>
                                                                <li>Co-ed vs. single-gender</li>
                                                            </ul>
                                                            <p> Residential vs. Low-res vs. Collegiate, etc. vs. satellite campus </p>
                                                            <p> Small, medium, and large </p>
                                                        </p>
                                                    </div>
                                                </div>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Overall Reputation & Selectivity
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <div className="th-grade-tab-open-frame">

                                                    <div className="th-grade-tab-open-frame-right">
                                                        <p>National vs. global</p>
                                                        <p>Rankings</p>
                                                        <p>Network</p>
                                                    </div>
                                                </div>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Geographical Location
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <div className="th-grade-tab-open-frame">

                                                    <div className="th-grade-tab-open-frame-right">
                                                        <p>Global regions</p>
                                                        <p>US
                                                            <ul>
                                                                <li>New England</li>
                                                                <li>Southeast</li>
                                                                <li>Southwest</li>
                                                                <li>Midwest</li>
                                                                <li>West Coast</li>

                                                            </ul>
                                                        </p>
                                                        <p>UK
                                                            <ul>
                                                                <li>Urban</li>
                                                                <li>Non-urban</li>
                                                            </ul>
                                                        </p>
                                                        <p>Canada</p>
                                                        <p>Continental Europe</p>
                                                        <p>Singapore</p>
                                                        <p>Australia</p>
                                                        <p>India</p>
                                                    </div>
                                                </div>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Urban colleges
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <div className="th-grade-tab-open-frame">

                                                    <div className="th-grade-tab-open-frame-right">
                                                        <p>
                                                            Urban colleges are surrounded by large buildings and apartments/condominiums. They bustle with activity, including community involvement, employment/internships, and cultural/social opportunities. Shopping, restaurants, and entertainment are always close at hand. Sometimes safety is an issue, but many schools such as USC and Columbia offer escort services, as well as security-conscious dorms. If fast-paced, city living is your thing, then an urban campus is probably a good choice. (Note that urban colleges vary in how integrated they are with their local city—from relatively secluded (Yale) to completely interconnected (NYU).)
                                                        </p>
                                                    </div>
                                                </div>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Suburban colleges
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <div className="th-grade-tab-open-frame">

                                                    <div className="th-grade-tab-open-frame-right">
                                                        <p>
                                                            Suburban colleges located in the satellite areas of such cities as Washington, D.C., St. Louis, Santa Barbara, and Portland in residential communities filled with strip malls and single-family homes. They often boast convenient access to urban areas and major airports through a short commute by car or public transportation. The lifestyle is often slower than that of the central city, but restaurants, shops, and movie theaters are usually not far away. Note that suburban areas can be upscale, but they can also be in poor areas.
                                                        </p>
                                                    </div>
                                                </div>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    College towns
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <div className="th-grade-tab-open-frame">

                                                    <div className="th-grade-tab-open-frame-right">
                                                        <p>
                                                            College towns such as Ann Arbor, Michigan; Boulder, Colorado; and Hanover, New Hampshire are very special places. The entire town, including residents and businesses, revolves around the needs, wants, and desires of students, faculty, staff, and their families. (In other words, the college and town are essentially synonymous.) (In other words, the college and town are essentially synonymous.) Some students like these towns so much that they find all kinds of excuses for staying on after graduation; some never leave.
                                                        </p>
                                                    </div>
                                                </div>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Rural colleges

                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <div className="th-grade-tab-open-frame">

                                                    <div className="th-grade-tab-open-frame-right">
                                                        <p>
                                                            Rural colleges offer access to the outdoors, including sports such as hiking, skiing, and bicycling; beautiful, serene settings; and a sense of getting away from it all. Safety is hardly a concern. Good shopping, airports, and other city resources are not very accessible. And you may find that the local residents lack diversity. However, if cultural resources are important, don’t dismiss colleges in rural locations; frequently they bring into their campuses and communities the best of what is available in the country. (Some argue they’re the best settings for the deep learning required for a true liberal arts education!)
                                                        </p>
                                                    </div>
                                                </div>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Climate & topography
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <div className="th-grade-tab-open-frame">

                                                    <div className="th-grade-tab-open-frame-right">
                                                        <p>
                                                            <ul>
                                                                <li>Beaches (Ocean)</li>
                                                                <li>Lakes</li>
                                                                <li>Deserts</li>
                                                                <li>Plains</li>
                                                                <li>Mountains</li>
                                                            </ul>
                                                        </p>
                                                    </div>
                                                </div>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Career & Residency Prospects
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <div className="th-grade-tab-open-frame">

                                                    <div className="th-grade-tab-open-frame-right">
                                                        <p>
                                                            <ul>
                                                                <li>Co-op programs</li>
                                                                <li>Industry recruitment, the average starting salary</li>

                                                            </ul>
                                                        </p>
                                                    </div>
                                                </div>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Academics
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <div className="th-grade-tab-open-frame">

                                                    <div className="th-grade-tab-open-frame-right">
                                                        <p>
                                                            Program Reputation & Selectivity
                                                            <ul>
                                                                <li>National vs. global</li>
                                                                <li>Rankings</li>
                                                                <li>Name recognition & network</li>
                                                            </ul>
                                                        </p>
                                                        <p>Program Availability, Breadth of Choices, & Freedom to Change Course</p>
                                                        <p>Undergraduate focus</p>
                                                    </div>
                                                </div>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Cost & Financial Aid
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <div className="th-grade-tab-open-frame">

                                                    <div className="th-grade-tab-open-frame-right">
                                                        <p>
                                                            Admission Types
                                                            <ul>
                                                                <li>Need-blind</li>
                                                                <li>Need-aware</li>
                                                            </ul>
                                                        </p>
                                                        <p>
                                                            Financial Aid Types
                                                            <ul>
                                                                <li>Need-based</li>
                                                                <li>Merit-based</li>
                                                            </ul>
                                                        </p>
                                                    </div>
                                                </div>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Culture
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <div className="th-grade-tab-open-frame">

                                                    <div className="th-grade-tab-open-frame-right">
                                                        <p>
                                                            Please identify whether you find the religious orientation and/or ethnic makeup of a college important.
                                                        </p>
                                                        <p>Are you interested in schools that have a religious affiliation, or at least a large population of students with that orientation (e.g. Georgetown, Santa Clara, or Notre Dame?)</p>
                                                    </div>
                                                </div>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Athletics
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <div className="th-grade-tab-open-frame">

                                                    <div className="th-grade-tab-open-frame-right">
                                                        <p>
                                                            NCAA Division I competitive sports opportunities for yourself
                                                        </p>
                                                        <p>NCAA Division II competitive sports opportunities for yourself</p>
                                                        <p>NCAA Division III competitive sports opportunities for yourself</p>
                                                        <p>Intramural sports opportunities for yourself</p>
                                                        <p>Major sports school with NCAA Division I football and/or basketball teams to watch as a spectator</p>
                                                    </div>
                                                </div>
                                            </AccordionItemPanel>
                                        </AccordionItem>





                                    </Accordion>

                                </div>

                            </div>
                        </div>
                    </div>
                </section >
                <section className='Testimonials-home-middle'>
                    <div className='Testimonials-home-middle-left'>
                        <Testimonials />
                    </div>
                    <div className='Testimonials-home-middle-right track-your-college'>
                        <div className='track-your-college-left'>
                            <h3>Testimonials</h3>
                            <h2>What people are saying <br />about us!</h2>
                            <p>We take pride in what we do to groom the future leaders of tomorrow. Here is what our happy parents, students, counsellors and others have to say about Athena Education and the milestones we have reached. </p>
                            <div className='track-your-college-left-link'>
                                <Link className='footer-top-map-img-button-link ' to='/testimonials'> Read more <span><img src={ArrowOne} className="normal" alt="" /><img src={Arrowtwo} className="normal-ho" alt="" /></span></Link>
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
                                    <p>Create a list of colleges that <br />considers all of the above metrics<br /> and use it to<br /><span>form your ideal <br />college list!</span>
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
export default AdmissionsTopColleges;
