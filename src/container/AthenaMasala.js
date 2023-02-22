import React, { Component } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Team from '../img/team-main.png';


export default class AthenaMasala extends Component {
    responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    render() {

        return (
            <div>

                <Carousel responsive={this.responsive}>
                    <div>
                        <div className="team-top-frame-main">
                            <div className="team-top-frame">
                                <div className="team-left-frame-one">
                                    <div className="team-left-frame-one-left">
                                        <img src={Team} alt="" />
                                    </div>
                                    <div className="team-left-frame-one-right">
                                        <p>70+ hrs of skill-building and applications-related Academy Workshops and sessions annually. </p>
                                        <div className="team-top-border"></div>
                                    </div>
                                </div>
                                <div className="team-left-frame-one">
                                    <div className="team-left-frame-one-left">
                                        <img src={Team} alt="" />
                                    </div>
                                    <div className="team-left-frame-one-right">
                                        <p>45+ hrs of annual check-ins with one-on-one student counselor meetings.</p>
                                        <div className="team-top-border"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="team-top-frame">
                                <div className="team-left-frame-one">
                                    <div className="team-left-frame-one-left">
                                        <img src={Team} alt="" />
                                    </div>
                                    <div className="team-left-frame-one-right">
                                        <p>Access to admissions and  research specialists, writers, psychologists, tech mentors, etc.</p>
                                        <div className="team-top-border"></div>
                                    </div>
                                </div>
                                <div className="team-left-frame-one">
                                    <div className="team-left-frame-one-left">
                                        <img src={Team} alt="" />
                                    </div>
                                    <div className="team-left-frame-one-right">
                                        <p>Subject matter experts in CS, economics, business,  psychology, engineering, anthropology, & history.</p>
                                        <div className="team-top-border"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="team-top-frame-main">
                            <div className="team-top-frame">
                                <div className="team-left-frame-one">
                                    <div className="team-left-frame-one-left">
                                        <img src={Team} alt="" />
                                    </div>
                                    <div className="team-left-frame-one-right">
                                        <p>Academic accuracy to finetune a student’s college applications, and even help you decide on a major!  </p>
                                        <div className="team-top-border"></div>
                                    </div>
                                </div>
                                <div className="team-left-frame-one">
                                    <div className="team-left-frame-one-left">
                                        <img src={Team} alt="" />
                                    </div>
                                    <div className="team-left-frame-one-right">
                                        <p>Access to 100+ organizations for internship and NGO work opportunities.</p>
                                        <div className="team-top-border"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="team-top-frame">
                                <div className="team-left-frame-one">
                                    <div className="team-left-frame-one-left">
                                        <img src={Team} alt="" />
                                    </div>
                                    <div className="team-left-frame-one-right">
                                        <p>Interaction opportunity with over 300 alumni to form an exclusive network of talented and successful individuals.</p>
                                        <div className="team-top-border"></div>
                                    </div>
                                </div>
                                <div className="team-left-frame-one">
                                    <div className="team-left-frame-one-left">
                                        <img src={Team} alt="" />
                                    </div>
                                    <div className="team-left-frame-one-right">
                                        <p>Access to personalized and bespoke mentorship, with customized programs based on individual needs and interests.</p>
                                        <div className="team-top-border"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </Carousel>
            </div>
        )
    }
}