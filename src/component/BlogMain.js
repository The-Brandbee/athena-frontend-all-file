import React, { Component } from "react";
import { Link } from "react-router-dom";
import BlogL from '../img/blog.jpg';
import BannerTwo from '../img/banner/blog.jpg';
import Cal from '../img/cla-b.png';
import ArrowOne from '../img/arrow-1.png';
import Arrowtwo from '../img/arrow-2.png';
import Search from '../img/search.png';

import MobileTop from '../img/mobilebanner/mobile-blog.jpg';

class BlogMain extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    // Constructor 
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch(
            "http://35.154.10.243:7036/api/blogs/")
            .then((res) => res.json())
            .then((json) => {

                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Plese wait some time.... </h1> </div>;
        return (
            <div className="pmp-profile-page">
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
                                            <h2>Stay updated on the </h2>
                                            <h3>LATEST TRENDS IN COLLEGE ADMISSIONS!</h3>
                                            <br />
                                            <br />
                                            <p>Enhance your application with our blogs.</p>
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
                <section className="presscoverage-main-frame">
                    <div className='container'>
                        <div className="row">
                            <div className="col-md-8">

                                {
                                    items.map((item) => (
                                        <div key={item._id} >

                                            <div className="presscoverage-main-frame-middle">
                                                <div className="presscoverage-main-frame-middle-left">
                                                    <div className="presscoverage-main-frame-middle-left-heading">
                                                        <h3 className="none">Category</h3>
                                                        <h2>{item.heading}</h2>
                                                    </div>
                                                    <div className="presscoverage-main-frame-middle-left-heading-middle">
                                                        <h5><img src={Cal} /> {item.date}</h5>
                                                        <p>{item.description} ...</p>
                                                    </div>
                                                    <div className='track-your-college-left-link'>
                                                        <a className='footer-top-map-img-button-link' href={`/blog-detail?blogid=${item._id}`}> Read more <span><img src={ArrowOne} className="normal" alt="" /><img src={Arrowtwo} className="normal-ho" alt="" /></span></a>
                                                    </div>
                                                </div>
                                                <div className="presscoverage-main-frame-middle-right">
                                                    <img src={"http://35.154.10.243:7036/" + item.detailimage} />
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>
                            <div className="col-md-4">
                                <div className="search-box-blog-right-main">
                                    <div className="search-box-blog">
                                        <form action="#">
                                            <input type="text" id="fname" name="fname" placeholder="SEARCH" required />
                                            <button><img src={Search} /></button>
                                        </form>
                                    </div>
                                    <div className="blog-list-frame-right none">
                                        <h4>Category</h4>
                                        <ul>
                                            <li>Category 1 (00)</li>
                                            <li>Category 2 (00)</li>
                                            <li>Category 3 (00)</li>
                                            <li>Category 4 (00)</li>
                                            <li>Category 5 (00)</li>
                                        </ul>
                                    </div>
                                    <div className="blog-list-frame-right bottom">
                                        <h4>Recent posts</h4>
                                        <ul>
                                            <li>00-00-0000</li>
                                            <li>Name of the blog goes here</li>
                                            <li>00-00-0000</li>
                                            <li>Name of the blog goes here</li>
                                            <li>00-00-0000</li>
                                            <li>Name of the blog goes here</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="bread-crma-last-frame">
                                    <ul>
                                        <li className="active">1</li>
                                        <li>2</li>
                                        <li>3</li>
                                        <li>4</li>
                                        <li>5</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="admission-to-your-dream-university-frame color-change">
                    <div className="admission-to-your-dream-university-frame-middle container">
                        <div className="admission-to-your-dream-university-frame-middle-left">
                            <p>You are just a step away from your  <span>dream university.</span></p>
                        </div>
                        <div className="admission-to-your-dream-university-frame-middle-right what-we-do-section-page">
                            <div className='footer-top-map-img-button'>

                                <a target="_blank" className='footer-top-map-img-button-link' href='https://calendly.com/athenaeducation/counseling-webinar'> Book a Consultation
                                    <span><img src={Arrowtwo} className="normal" alt="" /><img src={Arrowtwo} className="normal-ho" alt="" /></span></a>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}
export default BlogMain;  
