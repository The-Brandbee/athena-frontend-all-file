import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";
import BlogL from '../img/blog2.png';
import BannerTwo from '../img/banner-2.jpg';
import Cal from '../img/cla-b.png';
import ArrowOne from '../img/arrow-1.png';
import Arrowtwo from '../img/arrow-2.png';
import Search from '../img/search.png';

class BlogDetail extends React.Component {
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
                <section className="presscoverage-main-frame">
                    <div className='container'>
                        <div className="row">
                            <div className="col-md-8 blog-detail">
                                {
                                    items.map((item) => (
                                        <div key={item._id} >
                                            <div className="presscoverage-main-frame-middle">
                                                <div className="presscoverage-main-frame-middle-right">
                                                    <img src={"http://35.154.10.243:7036/" + item.image} />
                                                </div>
                                                <div className="presscoverage-main-frame-middle-left">
                                                    <div className="presscoverage-main-frame-middle-left-heading">

                                                        <h2>{item.heading}</h2>
                                                    </div>
                                                    <div className="presscoverage-main-frame-middle-left-heading-middle">
                                                        <h5><img src={Cal} /> {item.date}</h5>
                                                        <p>
                                                            {item.description2}
                                                        </p>
                                                    </div>

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

                            </div>
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}
export default BlogDetail;  
