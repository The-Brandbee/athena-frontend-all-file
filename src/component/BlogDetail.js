import React, { Component } from "react";
import { Link } from "react-router-dom";
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
    render() {
        return (
            <div className="pmp-profile-page">

                <section className="presscoverage-main-frame">
                    <div className='container'>
                        <div className="row">
                            <div className="col-md-8 blog-detail">
                                <div className="presscoverage-main-frame-middle">
                                    <div className="presscoverage-main-frame-middle-right">
                                        <img src={BlogL} />
                                    </div>
                                    <div className="presscoverage-main-frame-middle-left">
                                        <div className="presscoverage-main-frame-middle-left-heading">
                                            <h3>Category</h3>
                                            <h2>Name of the blog goes here</h2>
                                        </div>
                                        <div className="presscoverage-main-frame-middle-left-heading-middle">
                                            <h5><img src={Cal} />00-00-0000</h5>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.

                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.

                                            </p>
                                            <p>

                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                                            </p>
                                        </div>

                                    </div>

                                </div>


                            </div>
                            <div className="col-md-4">
                                <div className="search-box-blog-right-main">
                                    <div className="search-box-blog">
                                        <form action="#">
                                            <input type="text" id="fname" name="fname" placeholder="SEARCH" required />
                                            <button><img src={Search} /></button>
                                        </form>
                                    </div>
                                    <div className="blog-list-frame-right">
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

                            </div>
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}
export default BlogDetail;  
