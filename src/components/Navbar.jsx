import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Navbar.css";
import { HiOutlineMail, HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropdown: false,
      mobileMenuOpen: false
    };
  }

  handleMouseEnter = () => {
    if (window.innerWidth > 900) {
      this.setState({ showDropdown: true });
    }
  };

  handleMouseLeave = () => {
    if (window.innerWidth > 900) {
      this.setState({ showDropdown: false });
    }
  };

  handleDropdownToggle = () => {
    if (window.innerWidth <= 900) {
      this.setState((prevState) => ({
        showDropdown: !prevState.showDropdown
      }));
    }
  };

  handleMobileMenuToggle = () => {
    this.setState((prevState) => ({
      mobileMenuOpen: !prevState.mobileMenuOpen
    }));
  };

  closeMenus = () => {
    this.setState({
      mobileMenuOpen: false,
      showDropdown: false
    });
  };

  handleScrollTop = () => {
    window.scrollTo(0, 0);
    this.closeMenus();
  };

  render() {
    const { logoSrc, logoAlt } = this.props;
    const { showDropdown, mobileMenuOpen } = this.state;

    return (
      <nav className="navbar">
        <div className="navbar-overlay"></div>

        <div className="navbar-container">
          <div className="navbar-logo">
            <Link to="/" onClick={this.handleScrollTop}>
              <img src={logoSrc} alt={logoAlt} />
            </Link>
          </div>

          <button
            className="menu-toggle"
            onClick={this.handleMobileMenuToggle}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>

          <div className={`navbar-links ${mobileMenuOpen ? "active" : ""}`}>
            <Link to="/stores" onClick={this.handleScrollTop}>
              Stores
            </Link>

            <div
              className="dropdown-wrapper"
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
            >
              <button
                type="button"
                className="has-dropdown dropdown-trigger"
                onClick={this.handleDropdownToggle}
              >
                Happenings <span className={`dropdown-arrow ${showDropdown ? "rotate" : ""}`}>⌄</span>
              </button>

              {showDropdown && (
                <div className="dropdown-menu">
                  <Link to="/happenings/events" onClick={this.handleScrollTop}>
                    Events
                  </Link>
                  <Link
                    to="/happenings/news-spotlight"
                    onClick={this.handleScrollTop}
                  >
                    News & Spotlight
                  </Link>
                  <Link
                    to="/happenings/promotions-offers"
                    onClick={this.handleScrollTop}
                  >
                    Promotions & Offers
                  </Link>
                </div>
              )}
            </div>

            <div className="navbar-contact mobile-contact">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=vikaasamall@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HiOutlineMail className="mail-icon" />
              </a>
            </div>
          </div>

          <div className="navbar-contact desktop-contact">
            <span className="contact-divider"></span>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=vikaasamall@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HiOutlineMail className="mail-icon" />
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logoSrc: PropTypes.string,
  logoAlt: PropTypes.string
};

Navbar.defaultProps = {
  logoSrc:
    "https://t4.ftcdn.net/jpg/04/06/91/91/360_F_406919161_J0pGxe1sewqnk5dnvyRS77MKmEd6SVac.jpg",
  logoAlt: "Vikaasa Mall logo"
};

export default Navbar;