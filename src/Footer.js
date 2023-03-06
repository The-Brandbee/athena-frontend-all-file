import React, { Component } from "react";
import { Link } from "react-router-dom";
import Facebook from './img/facebook.png';
import IN from './img/in.png';
import Insta from './img/insta.png';
import Tw from './img/tw.png';
import Youtube from './img/youtube.png';
import RightArrow from './img/right-arrow.png';

export default class Footer extends Component {
  render() {
    return (
      <div>

        <footer>
          <div className="container">
            <div className="row">

              <div className="col-md-9">
                <div className="row">
                  <div className="col-md-3">
                    <div className="middle-footer">
                      <h4>ABOUT US</h4>
                      <ul>
                        <li><a href="#">Our Story</a></li>
                        <li><a href="#">What We Do?</a></li>
                        <li><a href="#">Why Us?</a></li>
                        <li><a href="#">Our Philosophy</a></li>
                        <li><a href="#">Our Team</a></li>
                        <li><a href="#">Our Student Success</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="middle-footer">
                      <h4>ABOUT PROGRAMME</h4>
                      <ul>
                        <li><a href="#">Personal Mentorship </a></li>
                        <li><a href="#">Program</a></li>
                        <li><a href="#">Program Benefits</a></li>
                        <li><a href="#">How To Apply</a></li>
                        <li><a href="#">Application Essentials</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="middle-footer">
                      <h4>RESOURCES</h4>
                      <ul>
                        <li><a href="#">Webinar & Workshop</a></li>
                        <li><a href="#">Admission Calendar</a></li>
                        <li><a href="#">University Profiles</a></li>
                        <li><a href="#">College Admission Calculator</a></li>
                        <li><a href="#">Extracurricular Opportunities</a></li>
                        <li><a href="#">FAQs</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="middle-footer">
                      <h4>USEFUL LINKS</h4>
                      <ul>
                        <li><a href="#">Blogs</a></li>
                        <li><a href="#">Events</a></li>
                        <li><a href="#">In The News</a></li>
                        <li><a href="#">Testimonials</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Contact</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="footer-right-frame">
                  <div className="subsc">
                    <form>
                      <h4>Get the latest updates & stories</h4>
                      <input className="Email" type="text" placeholder="Email" name="fname" required="" />
                      <button><img src={RightArrow} alt="" /></button>
                    </form>
                  </div>
                  <div className="clear"></div>
                  <div className="touch">

                    <ul>
                      <li>
                        <a href="#" target="_blank">
                          <img src={Facebook} alt="" />
                        </a>

                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <img src={IN} alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <img src={Insta} alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <img src={Tw} alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <img src={Youtube} alt="" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer >
        <div className="copyright-sec">
          <div className="row--">
            <p>Copyright © 2022 Athena Education. All Rights Reserved.</p>
          </div>
        </div>





      </div >
    );
  }
}
