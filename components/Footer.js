import React, { Component } from 'react'
import ReactGA from 'react-ga'

class Footer extends Component {
  currentYear () {
    let dateToday = new Date()
    let currentYear = dateToday.getFullYear()
    return currentYear
  }

  render () {
    return (
      <footer className='page-footer'>
        <div className='container'>
          <div className='row white-text'>
            <div className='col s12 m3'>
              <h5 className='light'>Contact</h5>
              <address>
                <p typeof='schema:PostalAddress'>
                  <span property='schema:streetAddress'>
                    1235 University Boulevard
                  </span>
                  <br />
                  <span property='schema:addressLocality'>
                    Steubenville
                  </span>,{' '}
                  <abbr title='Ohio' property='schema:addressRegion'>
                    OH
                  </abbr>{' '}
                  <span property='schema:postalCode'>43952</span>{' '}
                  <abbr property='schema:addressCountry'>USA</abbr><br />
                  <a
                    href='tel:+17402836754'
                    property='telephone'
                    className='white-text'
                  >
                    740.283.6754
                  </a>
                  <br />
                  <a
                    href='mailto:ci@franciscan.edu'
                    property='email'
                    className='white-text'
                  >
                    ci@franciscan.edu
                  </a>
                </p>
              </address>
            </div>
            <div className='col s12 m6'>
              <h5 className='light'>About the Catechetical Institute</h5>
              <p>
                The Catechetical Institute at Franciscan University exists to
                train and support the key catechists in any situation—priests,
                deacons, parents, or laity, whether professional or volunteer.
                Through conferences, online workshops, videos, audio, personal
                mentorship, and a wealth of resources produced by Franciscan
                University, all involved in the work of catechesis will find new
                ideas, new approaches, new techniques, and a new confidence to
                do the work of catechesis.
              </p>
            </div>
            <div className='col s12 m3'>
              <h5 className='light'>Related Links</h5>
              <ul>
                {/*  <li><a href="http://www.franciscanathome.com/" title="Franciscan at Home" target="_blank">Franciscan at Home</a></li> */}
                <li>
                  <ReactGA.OutboundLink
                    eventLabel='toMainSite'
                    to='https://www.franciscan.edu/'
                    title='Franciscan University of Steubenville'
                    target='_blank'
                  >
                    Franciscan University
                  </ReactGA.OutboundLink>
                </li>
                <li>
                  <a
                    href='https://www.steubenvilleconferences.com/'
                    title='Steubenville Conferences'
                    target='_blank'
                  >
                    Steubenville Conferences
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.franciscan.edu/veritas'
                    title='Veritas Center'
                    target='_blank'
                  >
                    Veritas Center for Ethics in Public Life
                  </a>
                </li>
                <li>
                  <a
                    href='http://www.faithandreason.com/'
                    title='Faith and Reason'
                    target='_blank'
                  >
                    Faith and Reason
                  </a>
                </li>
                <li>
                  <a
                    href='https://review.catechetics.com/'
                    title='The Catechetical Review'
                    target='_blank'
                  >
                    The Catechetical Review
                  </a>
                </li>
                <li style={{ marginTop: '8px' }}>
                  <a
                    href='https://giving.franciscan.edu/'
                    title='Donate'
                    target='_blank'
                  >
                    <button className='btn waves-effect waves-light btn-inverted-white'>
                      Donate
                    </button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='footer-copyright'>
          <div className='container'>
            <div className='row hide-on-large-only center'>
              <a
                href='https://www.franciscan.edu/ferpa/'
                title='Privacy Policy'
                target='_blank'
              >
                Privacy Policy
              </a>
              <a
                href='https://www.franciscan.edu/consumer-information/non-discrimination/'
                title='Nondiscrimination Statement'
                target='_blank'
              >
                Nondiscrimination Statement
              </a>
            </div>
            © <span id='copyright-date'>{this.currentYear()}</span> Franciscan
            University of Steubenville
          </div>
          <a
            className='hide-on-med-and-down'
            href='https://www.franciscan.edu/ferpa/'
            title='Privacy Policy'
            target='_blank'
          >
            Privacy Policy
          </a>
          <a
            className='hide-on-med-and-down'
            href='https://www.franciscan.edu/consumer-information/non-discrimination/'
            title='Nondiscrimination Statement'
            target='_blank'
          >
            Nondiscrimination Statement
          </a>
        </div>
        <script
          dangerouslySetInnerHTML={{
            __html: `  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
               (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
               m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
               })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
               ga('create', 'UA-5819863-21', 'auto');
               ga('send', 'pageview');
      `
          }}
        />
      </footer>
    )
  }
}

export default Footer
