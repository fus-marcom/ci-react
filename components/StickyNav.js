/* global stickyNav */
import React, { Component } from 'react'
import Link from 'next/link'

class StickyNav extends Component {
  componentDidMount () {
    stickyNav()
  }

  render () {
    return (
      <div className='section bottom-nav'>
        <ul className='hide-on-med-and-down'>
          <li>
            <Link prefetch href='/about' title='About'><a>About</a></Link>
          </li>
          <li><Link prefetch href='/team' title='Team'><a>Team</a></Link></li>
          <li>
            <Link prefetch href='/courses' title='Courses'><a>Courses</a></Link>
          </li>
          <li>
            <Link prefetch href='/events' title='Events'><a>Events</a></Link>
          </li>
          <li>
            <Link prefetch href='/resources' title='Resources'>
              <a>Resources</a>
            </Link>
          </li>
          <li><a href='/#news' title='News'>News</a></li>
        </ul>
        <style jsx>
          {`
            ul li {
              float: left;
              line-height: 8px;
              padding: 6px 0 0 0;
            }
            ul li a {
              color: #fff;
              text-transform: uppercase;
              font-size: 22px;
              font-family: 'Cinzel', serif;
              cursor: pointer;
              padding: 6px 12px 7px 12px;
              line-height: 19px;
              transition: .3s ease-in-out;
              font-weight: 600;
            }
            .bottom-nav ul li a:hover {
              background-color: hsla(357, 68%, 28%, 1);
            }
          `}
        </style>
      </div>
    )
  }
}

export default StickyNav
