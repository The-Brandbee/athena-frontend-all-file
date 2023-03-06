import React, { Component } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import Logo from './img/logo.png';

class Navbar extends React.Component {
  test(event) {
    document.getElementById('test2').classList.remove('show');
  }
  test2(event) {
    document.getElementById('test2').classList.add('show');
  }
  render() {
    return (
      <div>

        <header>
          <div className="container">
            <div className="row">
              <div className="col-md-2">
                <div className="header-logo">
                  <Link to="/">
                    <img src={Logo} alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-md-10">
                <div className="right-top-bar">
                  <ul>
                    <li>
                      <Link to="/">
                        Book a free consultation
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        Events
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        Enrol Now
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="navbar-menu-header">
                  <ul>
                    <li>
                      <Link to="/">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        Personal Mentorship Program
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        Personal Mentorship Program
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        Resources
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        Testiomonials
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        Blogs
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row--">
              <MobileMenu />
            </div>
          </div>
        </header>
      </div>
    );
  }
}
export default Navbar;
