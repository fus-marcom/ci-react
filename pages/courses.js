/* global initCourseSections */
import React from 'react'
import Layout from '../components/Layout'
import StickyNav from '../components/StickyNav'
import Title from '../components/Title'
import ExpandingSection from '../components/ExpandingSection'
import 'isomorphic-fetch'
import { logPageView } from '../utils/analytics'
import OutLink from '../components/OutLink'

export default class extends React.Component {
  static async getInitialProps () {
    const apiUrl = 'https://wp.catechetics.com/wp-json/wp/v2/'
    const params =
      'multiple-post-type?per_page=100&type[]=page&type[]=track&type[]=program'
    const res = await fetch(apiUrl + params)
    const data = await res.json()
    return { data }
  }

  componentDidMount () {
    initCourseSections()
    logPageView()
  }

  render () {
    return (
      <Layout
        headerType='interior'
        title='Courses | Catechetical Institute at Franciscan University'
        description='There are many avenues through which catechists can get formal training. Our principal training vehicle, Franciscan at Home, draws together the best of the Franciscan University Catechetics Program, the St. John Bosco Conference, and the latest in online education. There also are opportunities for homeschool families, online graduate studies, and more from Franciscan University of Steubenville.'
      >
        <main id='courses'>
          <StickyNav />
          <Title
            title='Courses'
            imgPath='/static/img/campus-6.jpg'
            posY='-44vh'
          />
          <div className='section valign-wrapper black-text white-background-flourish'>
            <div className='valign container'>

              <div className='row light flow-text'>
                {this.props.data
                  .filter(post => post.slug === 'courses-intro')
                  .map(post =>
                    <div
                      key={post.id}
                      className='col s12 valign flow-text'
                      dangerouslySetInnerHTML={{
                        __html: post.content.rendered
                      }}
                    />
                  )}
              </div>
            </div>
          </div>
          <div className='section red-background-flourish white-text'>
            <div className='container wide-container'>
              <h2 className='light center' style={{ marginBottom: '0px' }}>
                Franciscan at Home
              </h2>
              <span className='sub-heading center'>
                Online Learning at Your Convenience
              </span>
              <div className='row valign-wrapper'>
                <div className='col s12 m4 order-1 center'>
                  <img
                    className='responsive-img'
                    style={{ margin: '0 auto', width: '400px' }}
                    src='/static/img/fah-img.jpg'
                    alt='Speaking the Truth in Love Conference Flyer.'
                    title='Speaking the Truth in Love'
                  />
                  <a
                    href='http://en.calameo.com/read/00005685416f121522341'
                    title='Franciscan at Home'
                    target='_blank'
                  >
                    <button
                      className='btn waves-effect waves-light btn-inverted-white'
                      style={{
                        margin: '0 auto',
                        marginTop: '16px',
                        display: 'block'
                      }}
                    >
                      Learn More
                    </button>
                  </a>
                </div>
                {this.props.data
                  .filter(post => post.slug === 'courses-section-2')
                  .map(post =>
                    <div
                      key={post.id}
                      className='col s12 m8 valign flow-text'
                      dangerouslySetInnerHTML={{
                        __html: post.content.rendered
                      }}
                    />
                  )}

              </div>
            </div>
          </div>
          <div className='section valign-wrapper black-text white-background-flourish'>
            <div className='container wide-container'>

              <div className='row'>
                {this.props.data
                  .filter(post => post.slug === 'courses-section-3')
                  .map(post =>
                    <div
                      key={post.id}
                      className='col s12 valign flow-text'
                      dangerouslySetInnerHTML={{
                        __html: post.content.rendered
                      }}
                    />
                  )}
              </div>
              {this.props.data
                .filter(post => post.type === 'track')
                .map(post =>
                  <ExpandingSection
                    title={post.title.rendered}
                    content={post.content.rendered}
                    key={post.id}
                    url={post.acf.hasOwnProperty('url') ? post.acf.url : ''}
                    img={
                      post.featured_media !== 0
                        ? post.better_featured_image.source_url
                        : ''
                    }
                    imgAlt={
                      post.featured_media !== 0
                        ? post.better_featured_image.alt_text
                        : ''
                    }
                    imgTitle={
                      post.featured_media !== 0 ? post.title.rendered : ''
                    }
                  />
                )}

            </div>
          </div>
          <div className='section valign-wrapper black-text white-background-flourish'>
            <div className='container wide-container'>
              <h2 className='light center' style={{ marginBottom: '0px' }}>
                A Complete Catechetical Formation
              </h2>
              {this.props.data
                .filter(post => post.type === 'program')
                .map(post =>
                  <ExpandingSection
                    title={post.title.rendered}
                    content={post.content.rendered}
                    key={post.id}
                    url={post.acf.hasOwnProperty('url') ? post.acf.url : ''}
                    img={
                      post.featured_media !== 0
                        ? post.better_featured_image.source_url
                        : ''
                    }
                    imgAlt={
                      post.featured_media !== 0
                        ? post.better_featured_image.alt_text
                        : ''
                    }
                    imgTitle={
                      post.featured_media !== 0 ? post.title.rendered : ''
                    }
                  />
                )}

              <div className='sub-section'>
                <h3>
                  <svg
                    fill='#000000'
                    height='24'
                    viewBox='0 0 24 24'
                    width='24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z' />
                    <path d='M0 0h24v24H0z' fill='none' />
                  </svg>Franciscan Fast-track
                </h3>
                <div className='row valign-wrapper'>
                  <div className='col s12 m6 order-1'>
                    <img
                      className='responsive-img z-depth-1'
                      src='/static/img/new/fast-track.jpg'
                      alt='Student studying.'
                      title='Franciscan Fast Track'
                    />
                  </div>
                  <div className='col s12 m6 valign order-2'>

                    <p className='flow-text'>
                      Courses for high school and homeschool students available
                      for all subjects from math to science, from literature to
                      language, from theology to philosophy, and so much more.
                      Franciscan University is committed to making available the
                      best Catholic instructors at the most affordable price for
                      the family budget, aimed at an educational formation that
                      explicitly serves the new evangelization.
                    </p>
                    <OutLink
                      to='https://www.franciscan.edu/fasttrack/'
                      title='Franciscan University Fast Track'
                      label='toFastTrackFromCourses'
                    >
                      <button className='btn waves-effect waves-light'>
                        Learn More
                      </button>
                    </OutLink>
                  </div>
                </div>
              </div>
              <div className='sub-section'>
                <h3>
                  <svg
                    fill='#000000'
                    height='24'
                    viewBox='0 0 24 24'
                    width='24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z' />
                    <path d='M0 0h24v24H0z' fill='none' />
                  </svg>Online Degree Programs
                </h3>
                <div className='row valign-wrapper'>
                  <div className='col s12 m6 valign order-2'>

                    <p className='flow-text'>
                      Whether you are right out of high school, right in the
                      middle of your life, or right about ready to try a new
                      direction or a next step, Franciscan University has
                      programs that meet you where God has you. Franciscan
                      offers online associate’s and master’s degrees in
                      theology, philosophy, education, and catechetics. On
                      campus, we also offer a full spread of 39 undergraduate
                      majors, and seven master’s programs. Our graduates are
                      prepared to “cast out into the deep” and bring the light
                      of Christ to the ends of the earth.
                    </p>
                    <OutLink
                      to='https://www.franciscan.edu/admissions/online/'
                      title='Franciscan University Online Programs'
                      label='toOnlineFromCourses'
                    >
                      <button className='btn waves-effect waves-light'>
                        Learn More
                      </button>
                    </OutLink>
                  </div>
                  <div className='col s12 m6 order-1'>
                    <img
                      className='responsive-img'
                      src='/static/img/new/online-degree.jpg'
                      alt='Working at a computer.'
                      title='Online Degree'
                    />
                  </div>
                </div>
              </div>
              <div className='sub-section'>
                <h3>
                  <svg
                    fill='#000000'
                    height='24'
                    viewBox='0 0 24 24'
                    width='24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z' />
                    <path d='M0 0h24v24H0z' fill='none' />
                  </svg>Priestly Vocational Formation
                </h3>
                <div className='row valign-wrapper'>
                  <div className='col s12'>

                    <p className='flow-text'>
                      The Priestly Discernment Program (PDP), part of the
                      bachelor’s degree experience at the University, helps men
                      to grow in holiness and listen for the “still, small
                      voice” of a vocation to the priesthood or religious life.
                      The University is also seeking to develop an Institute for
                      Priestly Renewal (IPR), a summer residency program for
                      seminarians and priests that would reach out to assist
                      diocesan bishops and religious superiors to provide a
                      high-quality curriculum for clergy desiring superlative,
                      efficient, and pragmatic formation for their leadership
                      roles in the new evangelization.
                    </p>
                    <OutLink
                      to='https://www.franciscan.edu/pdp/'
                      title='Priestly Discernment Program'
                      label='toPDPFromCourses'
                    >
                      <button className='btn waves-effect waves-light'>
                        Learn More
                      </button>
                    </OutLink>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <style jsx>{`
            .sub-section p {
              margin-top: 0;
            }
            .sub-section .col {
              display: none;
            }
            .sub-section.open .col {
              display: block;
            }
            .sub-section h3 {
              cursor: pointer;
            }
            .sub-section.open h3 svg {
              transform: rotate(90deg);
            }
          `}</style>
        </main>
      </Layout>
    )
  }
}
