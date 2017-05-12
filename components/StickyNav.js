import React, { Component } from 'react';
class StickyNav extends Component {

  render() {
    return (
      <div className="section bottom-nav">
        <ul className="hide-on-med-and-down">
          <li><a href="/about" title="About">About</a></li>
          <li><a href="/team" title="Team">Team</a></li>
          <li><a href="/courses" title="Courses">Courses</a></li>
          <li><a href="/events" title="Events">Events</a></li>
          <li><a href="/resources" title="Resources">Resources</a></li>
          <li><a href="/news" title="News">News</a></li>
        </ul>
      </div>
    );
  }
}

export default StickyNav;
