import React from 'react';
import Cal from '../img/cla-b.png';
import ArrowOne from '../img/arrow-1.png';
import Arrowtwo from '../img/arrow-2.png';


const Posts = ({ posts, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <>

            {
                posts.map(post => (
                    <div key={post.id} >

                        <div className="presscoverage-main-frame-middle">
                            <div className="presscoverage-main-frame-middle-left">
                                <div className="presscoverage-main-frame-middle-left-heading">
                                    <h3 className="none">Category</h3>
                                    <h2>{post.heading}</h2>
                                </div>
                                <div className="presscoverage-main-frame-middle-left-heading-middle">
                                    <h5><img src={Cal} /> {post.date}</h5>
                                    <p>{post.description} ...</p>
                                </div> 
                                <div className='track-your-college-left-link'>
                                    <a className='footer-top-map-img-button-link' href={`/blog-detail?blogid=${post._id}`}> Read more <span><img src={ArrowOne} className="normal" alt="" /><img src={Arrowtwo} className="normal-ho" alt="" /></span></a>
                                </div>
                            </div>
                            <div className="presscoverage-main-frame-middle-right">
                                <img src={"https://delos.athenaeducation.co.in/" + post.detailimage} />
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    );
};

export default Posts;