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
          <li><Link prefetch href="/about" title="About"><a>About</a></Link></li>
          <li><Link prefetch href="/team" title="Team"><a>Team</a></Link></li>
          <li><Link prefetch href="/courses" title="Courses"><a>Courses</a></Link></li>
          <li><Link prefetch href="/events" title="Events"><a>Events</a></Link></li>
          <li><Link prefetch href="/resources" title="Resources"><a>Resources</a></Link></li>
          <li><Link prefetch href="/news" title="News"><a>News</a></Link></li>
        </ul>
      </div>
    );
  }
}

export default StickyNav;
