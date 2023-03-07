import React, { Component } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Event from '../img/event3.jpg';
import { Link } from "react-router-dom";
import 'react-ig-feed/dist/index.css'
import Play from '../img/play.png';
import Map from '../img/map.png';
import Clock from '../img/clock.png';
import Cal from '../img/cla.png';
import ArrowOne from '../img/arrow-1.png';
import Arrowtwo from '../img/arrow-2.png';

export default class upcomingEvents extends Component {
    responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 3,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
        },
    };
    render() {

        return (
            <div>

                <Carousel responsive={this.responsive} >
                    <div>
                        <div className='upcoming-Events-mian-middle-frame'>
                            <div className='upcoming-Events-mian-middle-frame-image'>
                                <img src={Event} />
                            </div>
                            <div className='upcoming-Events-mian-middle-frame-bottom'>
                                <h4>Name of the event1</h4>
                                <ul>
                                    <li>
                                        <img src={Cal} />
                                        <span>00-00-0000</span>
                                    </li>
                                    <li>
                                        <img src={Clock} />
                                        <span>6:00 pm</span>
                                    </li>
                                    <li>
                                        <img src={Map} />
                                        <span>Athena Campus, Gurugram</span>
                                    </li>
                                </ul>
                                <div className='footer-top-map-img-button'>
                                    <Link className='footer-top-map-img-button-link' to=''> Book now <span><img src={ArrowOne} className="normal" alt="" /><img src={Arrowtwo} className="normal-ho" alt="" /></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='upcoming-Events-mian-middle-frame'>
                            <div className='upcoming-Events-mian-middle-frame-image'>
                                <img src={Event} />
                            </div>
                            <div className='upcoming-Events-mian-middle-frame-bottom'>
                                <h4>Name of the event2</h4>
                                <ul>
                                    <li>
                                        <img src={Cal} />
                                        <span>00-00-0000</span>
                                    </li>
                                    <li>
                                        <img src={Clock} />
                                        <span>6:00 pm</span>
                                    </li>
                                    <li>
                                        <img src={Map} />
                                        <span>Athena Campus, Gurugram</span>
                                    </li>
                                </ul>
                                <div className='footer-top-map-img-button'>
                                    <Link className='footer-top-map-img-button-link' to=''> Book now <span><img src={ArrowOne} className="normal" alt="" /><img src={Arrowtwo} className="normal-ho" alt="" /></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='upcoming-Events-mian-middle-frame'>
                            <div className='upcoming-Events-mian-middle-frame-image'>
                                <img src={Event} />
                            </div>
                            <div className='upcoming-Events-mian-middle-frame-bottom'>
                                <h4>Name of the event3</h4>
                                <ul>
                                    <li>
                                        <img src={Cal} />
                                        <span>00-00-0000</span>
                                    </li>
                                    <li>
                                        <img src={Clock} />
                                        <span>6:00 pm</span>
                                    </li>
                                    <li>
                                        <img src={Map} />
                                        <span>Athena Campus, Gurugram</span>
                                    </li>
                                </ul>
                                <div className='footer-top-map-img-button'>
                                    <Link className='footer-top-map-img-button-link' to=''> Book now <span><img src={ArrowOne} className="normal" alt="" /><img src={Arrowtwo} className="normal-ho" alt="" /></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='upcoming-Events-mian-middle-frame'>
                            <div className='upcoming-Events-mian-middle-frame-image'>
                                <img src={Event} />
                            </div>
                            <div className='upcoming-Events-mian-middle-frame-bottom'>
                                <h4>Name of the event4</h4>
                                <ul>
                                    <li>
                                        <img src={Cal} />
                                        <span>00-00-0000</span>
                                    </li>
                                    <li>
                                        <img src={Clock} />
                                        <span>6:00 pm</span>
                                    </li>
                                    <li>
                                        <img src={Map} />
                                        <span>Athena Campus, Gurugram</span>
                                    </li>
                                </ul>
                                <div className='footer-top-map-img-button'>
                                    <Link className='footer-top-map-img-button-link' to=''> Book now <span><img src={ArrowOne} className="normal" alt="" /><img src={Arrowtwo} className="normal-ho" alt="" /></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='upcoming-Events-mian-middle-frame'>
                            <div className='upcoming-Events-mian-middle-frame-image'>
                                <img src={Event} />
                            </div>
                            <div className='upcoming-Events-mian-middle-frame-bottom'>
                                <h4>Name of the event5</h4>
                                <ul>
                                    <li>
                                        <img src={Cal} />
                                        <span>00-00-0000</span>
                                    </li>
                                    <li>
                                        <img src={Clock} />
                                        <span>6:00 pm</span>
                                    </li>
                                    <li>
                                        <img src={Map} />
                                        <span>Athena Campus, Gurugram</span>
                                    </li>
                                </ul>
                                <div className='footer-top-map-img-button'>
                                    <Link className='footer-top-map-img-button-link' to=''> Book now <span><img src={ArrowOne} className="normal" alt="" /><img src={Arrowtwo} className="normal-ho" alt="" /></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </Carousel>


            </div >
        )
    }
}