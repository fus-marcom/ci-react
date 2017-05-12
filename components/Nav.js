import React, { Component } from 'react';
class Nav extends Component {

  render() {
    return (
      <header className={this.props.headerType}>
        <div>
        <nav className="main-nav search-nav">
            <div className="nav-wrapper">
              <a className="fus-branding" href="https://www.franciscan.edu" title="Franciscan University of Steubenville">Franciscan University of Steubenville</a>
                <a href="#" className="brand-logo"><img src="/static/img/ci-logo.png"/></a>
                <a href="#" data-activates="mobile-demo" className="button-collapse">
                  <svg viewBox="0 0 24 24" fill="#fff" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                  </svg>
                </a>
            </div>
          </nav>
        </div>
              <ul className="side-nav" id="mobile-demo" style={{width: '300px'}}>
                <li className="logo">
                  <a id="logo-container" href="#" className="brand-logo">
                    <img src="/static/img/side-nav-logo.jpg" />
                  </a>
                </li>
                <li> <a href="/about.html">About</a> </li>
                <li> <a href="/team.html">Team</a> </li>
                <li> <a href="/courses.html">Courses</a> </li>
                <li> <a href="/events.html">Events</a> </li>
                <li> <a href="/resources.html">Resources</a> </li>
                <li> <a href="/announcements.html">Announcements</a> </li>
                <li> <a href="/newest-additions.html">Newest Additions</a> </li>
            </ul>

      </header>
    );
  }
}

export default Nav;
