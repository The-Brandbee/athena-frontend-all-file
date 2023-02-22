import React, { Component } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import EventTwo from '../img/event2.jpg';
import { Link } from "react-router-dom";
import 'react-ig-feed/dist/index.css'
import Play from '../img/play.png';

export default class PastEvents extends Component {
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

                <Carousel responsive={this.responsive}>


                    <div>
                        <Link to="">
                            <div className='Past-Events-middle-middle-frame'>
                                <div className='Past-Events-middle-middle-frame-left'>
                                    <img src={EventTwo} />
                                </div>
                                <div className='Past-Events-middle-middle-frame-middle'>
                                    <div className='Past-Events-middle-middle-frame-middle-cont'>
                                        <h4>What’s the whole fuss about profile building?</h4>
                                        <p><span>Speaker :</span> Name of the speaker</p>
                                    </div>
                                </div>
                                <div className='Past-Events-middle-middle-frame-right'>
                                    <img src={Play} />
                                </div>
                            </div>
                        </Link>
                        <Link to="">
                            <div className='Past-Events-middle-middle-frame'>
                                <div className='Past-Events-middle-middle-frame-left'>
                                    <img src={EventTwo} />
                                </div>
                                <div className='Past-Events-middle-middle-frame-middle'>
                                    <div className='Past-Events-middle-middle-frame-middle-cont'>
                                        <h4>What’s the whole fuss about profile building?</h4>
                                        <p><span>Speaker :</span> Name of the speaker</p>
                                    </div>
                                </div>
                                <div className='Past-Events-middle-middle-frame-right'>
                                    <img src={Play} />
                                </div>
                            </div>
                        </Link>
                        <Link to="">
                            <div className='Past-Events-middle-middle-frame'>
                                <div className='Past-Events-middle-middle-frame-left'>
                                    <img src={EventTwo} />
                                </div>
                                <div className='Past-Events-middle-middle-frame-middle'>
                                    <div className='Past-Events-middle-middle-frame-middle-cont'>
                                        <h4>What’s the whole fuss about profile building?</h4>
                                        <p><span>Speaker :</span> Name of the speaker</p>
                                    </div>
                                </div>
                                <div className='Past-Events-middle-middle-frame-right'>
                                    <img src={Play} />
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div>
                        <Link to="">
                            <div className='Past-Events-middle-middle-frame'>
                                <div className='Past-Events-middle-middle-frame-left'>
                                    <img src={EventTwo} />
                                </div>
                                <div className='Past-Events-middle-middle-frame-middle'>
                                    <div className='Past-Events-middle-middle-frame-middle-cont'>
                                        <h4>What’s the whole fuss about profile building?</h4>
                                        <p><span>Speaker :</span> Name of the speaker</p>
                                    </div>
                                </div>
                                <div className='Past-Events-middle-middle-frame-right'>
                                    <img src={Play} />
                                </div>
                            </div>
                        </Link>
                        <Link to="">
                            <div className='Past-Events-middle-middle-frame'>
                                <div className='Past-Events-middle-middle-frame-left'>
                                    <img src={EventTwo} />
                                </div>
                                <div className='Past-Events-middle-middle-frame-middle'>
                                    <div className='Past-Events-middle-middle-frame-middle-cont'>
                                        <h4>What’s the whole fuss about profile building?</h4>
                                        <p><span>Speaker :</span> Name of the speaker</p>
                                    </div>
                                </div>
                                <div className='Past-Events-middle-middle-frame-right'>
                                    <img src={Play} />
                                </div>
                            </div>
                        </Link>
                        <Link to="">
                            <div className='Past-Events-middle-middle-frame'>
                                <div className='Past-Events-middle-middle-frame-left'>
                                    <img src={EventTwo} />
                                </div>
                                <div className='Past-Events-middle-middle-frame-middle'>
                                    <div className='Past-Events-middle-middle-frame-middle-cont'>
                                        <h4>What’s the whole fuss about profile building?</h4>
                                        <p><span>Speaker :</span> Name of the speaker</p>
                                    </div>
                                </div>
                                <div className='Past-Events-middle-middle-frame-right'>
                                    <img src={Play} />
                                </div>
                            </div>
                        </Link>
                    </div>

                </Carousel>


            </div >
        )
    }
}