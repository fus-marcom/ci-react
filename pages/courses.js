/* global initCourseSections */
import React from 'react'
import Layout from '../components/Layout'
import StickyNav from '../components/StickyNav'
import Title from '../components/Title'
import ExpandingSection from '../components/ExpandingSection'
import 'isomorphic-fetch'
import { logPageView } from '../utils/analytics'

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
              <a
                href='https://franciscanathome.com/'
                title='Franciscan at Home'
                target='_blank'
              >
                <h2
                  className='light center white-text'
                  style={{ marginBottom: '0px' }}
                >
                  Franciscan at Home
                </h2>
              </a>
              <span className='sub-heading center'>
                Online Learning at Your Convenience
              </span>
              <a
                href='https://franciscanathome.com/'
                title='Franciscan at Home'
                target='_blank'
              >
                <button
                  className='btn waves-effect waves-light btn-inverted-white'
                  style={{
                    margin: '0 auto',
                    lineHeight: '34px',
                    display: 'block'
                  }}
                >
                  Come Explore
                </button>
              </a>
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
                .map((post, i) =>
                  <ExpandingSection
                    index={i}
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
