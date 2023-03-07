import React, { Component } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Team from '../img/team-main.png';
import mindset from '../img/mindset.jpg';
import mindsetTwo from '../img/mindset2.png';

export default class GrowthMindset extends Component {
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

                <Carousel responsive={this.responsive} swipeable={false}
                    autoPlaySpeed={1000}
                    customTransition="all .2"
                    transitionDuration={900}
                >
                    <div>
                        <div className='mind-set-slide-frame'>
                            <div className='mind-set-slide-frame-left'>
                                <div className='Growth-Mindset-left-frame-left'>
                                    <div className='Growth-Mindset-left-frame-left-left'>
                                        <img src={mindsetTwo} />
                                    </div>
                                    <div className='Growth-Mindset-left-frame-left-right'>
                                        <h4>1. Growth Mindset</h4>
                                        <p>Our mentors make the students' future ready to meet the challenges as learning opportunities and strive to be “Better Than Yesterday”.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='mind-set-slide-frame-right'>
                                <img src={mindset} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='mind-set-slide-frame'>
                            <div className='mind-set-slide-frame-left'>
                                <div className='Growth-Mindset-left-frame-left'>
                                    <div className='Growth-Mindset-left-frame-left-left'>
                                        <img src={mindsetTwo} />
                                    </div>
                                    <div className='Growth-Mindset-left-frame-left-right'>
                                        <h4>2. Quality Assurance</h4>
                                        <p>Our in-house experts and mentors follow stringent systems and processes to model the standard of excellence to ensure the highest quality for our students.  </p>
                                    </div>
                                </div>
                            </div>
                            <div className='mind-set-slide-frame-right'>
                                <img src={mindset} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='mind-set-slide-frame'>
                            <div className='mind-set-slide-frame-left'>
                                <div className='Growth-Mindset-left-frame-left'>
                                    <div className='Growth-Mindset-left-frame-left-left'>
                                        <img src={mindsetTwo} />
                                    </div>
                                    <div className='Growth-Mindset-left-frame-left-right'>
                                        <h4>3. Personalized Mentorship</h4>
                                        <p>Rejecting the “cookie-cutter model” and using the ideology of IKIGAI, we curate a personalized theme and strategy based on each student’s unique interests. </p>
                                    </div>
                                </div>
                            </div>
                            <div className='mind-set-slide-frame-right'>
                                <img src={mindset} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='mind-set-slide-frame'>
                            <div className='mind-set-slide-frame-left'>
                                <div className='Growth-Mindset-left-frame-left'>
                                    <div className='Growth-Mindset-left-frame-left-left'>
                                        <img src={mindsetTwo} />
                                    </div>
                                    <div className='Growth-Mindset-left-frame-left-right'>
                                        <h4>4. Life Coaching</h4>
                                        <p>Along with getting admission to top universities worldwide, we also focus on making our students future ready by enhancing their life skills for future success. </p>
                                    </div>
                                </div>
                            </div>
                            <div className='mind-set-slide-frame-right'>
                                <img src={mindset} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='mind-set-slide-frame'>
                            <div className='mind-set-slide-frame-left'>
                                <div className='Growth-Mindset-left-frame-left'>
                                    <div className='Growth-Mindset-left-frame-left-left'>
                                        <img src={mindsetTwo} />
                                    </div>
                                    <div className='Growth-Mindset-left-frame-left-right'>
                                        <h4>5. Starting Early</h4>
                                        <p>Increases the chances of admission to big leagues at the right time by starting early. We start with students as early as possible, so they can gain a real edge over others. </p>
                                    </div>
                                </div>
                            </div>
                            <div className='mind-set-slide-frame-right'>
                                <img src={mindset} />
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
        )
    }
}