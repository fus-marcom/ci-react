import React, { Component } from 'react';
import Link from 'next/link'

class StickyNav extends Component {

  componentDidMount() {
    stickyNav();
  }

  render() {
    return (
      <div className="section bottom-nav">
        <ul className="hide-on-med-and-down">
          <li><Link href="/about" title="About"><a>About</a></Link></li>
          <li><Link href="/team" title="Team"><a>Team</a></Link></li>
          <li><Link href="/courses" title="Courses"><a>Courses</a></Link></li>
          <li><Link href="/events" title="Events"><a>Events</a></Link></li>
          <li><Link href="/resources" title="Resources"><a>Resources</a></Link></li>
          <li><Link href="/news" title="News"><a>News</a></Link></li>
        </ul>
      </div>
    );
  }
}

export default StickyNav;
