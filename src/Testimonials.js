import React, { Component } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Testi from './img/testi.png';
import TestiTwo from './img/testi-m.png';

export default class Testimonials extends Component {
    responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 2,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    render() {
        return (
            <div className='TESTIMONIALS-list-main-home-main'>
                <Carousel responsive={this.responsive}>
                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>I've definitely grown with Athena and I'm just my version 2.0. Here the team focuses on enhancement, not on altering what one wants to say. Rahul sir’s various productivity hacks and obsession with striving for 100% is what I truly admire.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Daksh Chokra</h4>
                                <p>University of Pennsylvania, '20</p>
                            </div>
                        </div>
                    </div>

                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>I've definitely grown with Athena and I'm just my version 2.0. Here the team focuses on enhancement, not on altering what one wants to say. Rahul sir’s various productivity hacks and obsession with striving for 100% is what I truly admire.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Daksh Chokra</h4>
                                <p>University of Pennsylvania, '20</p>
                            </div>
                        </div>
                    </div>

                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>I've definitely grown with Athena and I'm just my version 2.0. Here the team focuses on enhancement, not on altering what one wants to say. Rahul sir’s various productivity hacks and obsession with striving for 100% is what I truly admire.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Daksh Chokra</h4>
                                <p>University of Pennsylvania, '20</p>
                            </div>
                        </div>
                    </div>


                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>I've definitely grown with Athena and I'm just my version 2.0. Here the team focuses on enhancement, not on altering what one wants to say. Rahul sir’s various productivity hacks and obsession with striving for 100% is what I truly admire.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Daksh Chokra</h4>
                                <p>University of Pennsylvania, '20</p>
                            </div>
                        </div>
                    </div>

                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>I've definitely grown with Athena and I'm just my version 2.0. Here the team focuses on enhancement, not on altering what one wants to say. Rahul sir’s various productivity hacks and obsession with striving for 100% is what I truly admire.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Daksh Chokra</h4>
                                <p>University of Pennsylvania, '20</p>
                            </div>
                        </div>
                    </div>

                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>I've definitely grown with Athena and I'm just my version 2.0. Here the team focuses on enhancement, not on altering what one wants to say. Rahul sir’s various productivity hacks and obsession with striving for 100% is what I truly admire.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Daksh Chokra</h4>
                                <p>University of Pennsylvania, '20</p>
                            </div>
                        </div>
                    </div>

                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>I've definitely grown with Athena and I'm just my version 2.0. Here the team focuses on enhancement, not on altering what one wants to say. Rahul sir’s various productivity hacks and obsession with striving for 100% is what I truly admire.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Daksh Chokra</h4>
                                <p>University of Pennsylvania, '20</p>
                            </div>
                        </div>
                    </div>

                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>I've definitely grown with Athena and I'm just my version 2.0. Here the team focuses on enhancement, not on altering what one wants to say. Rahul sir’s various productivity hacks and obsession with striving for 100% is what I truly admire.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Daksh Chokra</h4>
                                <p>University of Pennsylvania, '20</p>
                            </div>
                        </div>
                    </div>

                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>I've definitely grown with Athena and I'm just my version 2.0. Here the team focuses on enhancement, not on altering what one wants to say. Rahul sir’s various productivity hacks and obsession with striving for 100% is what I truly admire.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Daksh Chokra</h4>
                                <p>University of Pennsylvania, '20</p>
                            </div>
                        </div>
                    </div>

                </Carousel>
            </div>
        )
    }
}