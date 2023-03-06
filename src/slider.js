import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import ArrowOne from './img/arrow-1.png';
import Arrowtwo from './img/arrow-2.png';
import BannerOne from './img/banner-1.jpg';
import BannerTwo from './img/banner-2.jpg';
import BannerVideo from './img/atheena-video.mp4';
import SliderRight from './SliderRight';

export default class slider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,

    };

    return (
      <div className='slider-banner'>

        <Slider className='sliderTest' {...settings}>
          <div className='first-slide'>
            <div className='banner-image'>

              <video width="100%" poster={BannerOne} playsInline
                autoPlay
                loop
                muted>
                <source src={BannerVideo} type="video/mp4" />
              </video>
              <div className='video-background-banner-new'></div>
              <div className='banner-text-middle'>
                <div className='banner-text-middle-in'>
                  <h2><span>7x more chances</span>
                    To Gain Admission Into Your<br /> Dream University!</h2>
                  <p>Transforming the Indian education system by cultivating the<br /> intellectually curious scholars and leaders of tomorrow.</p>
                  <p>
                    <a className='footer-top-map-img-button-link ' href='#'> Know more <span><img src={Arrowtwo} className="normal" alt="" /><img src={Arrowtwo} className="normal-ho" alt="" /></span></a>
                  </p>
                </div>
              </div>
            </div>

          </div>
          <div className='first-slide second'>
            <div className='banner-image'>
              <img src={BannerTwo} alt="" />
            </div>
            <div className='second-banner-changehover'>
              <div className='container'>
                <div className='second-banner-changehover-main'>
                  <div className='second-banner-changehover-left'>
                    <div className='second-banner-changehover-left2'>
                      <h3>7x more chances</h3>
                      <h2>To Gain Admission<br /> Into Your Dream<br /> University!</h2>
                      <p>Transforming the Indian education system by cultivating the intellectually curious<br /> scholars and leaders of tomorrow.</p>
                      <p>
                        <a className='footer-top-map-img-button-link ' href='#'> Know More <span><img src={ArrowOne} className="normal" alt="" /><img src={Arrowtwo} className="normal-ho" alt="" /></span></a>
                      </p>
                    </div>
                  </div>
                  <div className='second-banner-changehover-right'>
                    <SliderRight />

                  </div>
                </div>
              </div>
            </div>
          </div>


        </Slider>
      </div>
    )
  }
}