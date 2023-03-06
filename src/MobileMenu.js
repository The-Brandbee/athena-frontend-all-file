import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from './img/logo.png';


class MobileMenu extends React.Component {
  constructor() {
    super();

    this.state = {
      displayMenu: false,
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

  };

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
      <div className="mobile-menu-header">
        <div className="container--">
          <div className="col-md-2--">
            <div className="header-logo-mobile">
              <Link to="/">
                <img src={Logo} alt="" />
              </Link>
            </div>
          </div>
          <div className="col-md-10--">
            <div className="dropdown" >
              <div className="button" onClick={this.showDropdownMenu}><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span> </div>

              {this.state.displayMenu ? (
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
              ) :
                (
                  null
                )
              }

            </div>
          </div>
        </div>

      </div>

    );
  }
}

export default MobileMenu;