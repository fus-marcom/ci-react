/* global initTabs checkUserStatus */
import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import StickyNav from '../components/StickyNav'
import TextRevealImageCard from '../components/TextRevealImageCard'
import TextCard from '../components/TextCard'
import 'isomorphic-fetch'
import { logPageView } from '../utils/analytics'

export default class extends React.Component {
  static async getInitialProps () {
    const apiUrl = 'https://wp.catechetics.com/wp-json/wp/v2/'
    const params =
      'multiple-post-type?per_page=100&type[]=post&type[]=page&type[]=formation-card'
    const res = await fetch(apiUrl + params)
    const data = await res.json()
    return { data }
  }

  state = {
    returnUser: false
  }

  componentDidMount () {
    initTabs()
    logPageView()
    this.checkUserStatus()
  }

  checkUserStatus = () => {
    // Check local storage for user
    if (window.localStorage.getItem('returnUser')) {
      this.setState({ returnUser: true })
    } else {
      window.localStorage.setItem('returnUser', 'true')
    }
  }

  render () {
    return (
      <Layout
        title='Catechetical Institute - Franciscan University'
        description='The Franciscan University Catechetical Institute forms Catholics who form others in the faith. Through courses, conferences, advice, and resources, the institute supports clergy, parents, and all those responsible for the work of catechesis and evangelization, as they carry out Christ’s command to make disciples of all nations.'
      >
        <main>
          <Hero />
          <StickyNav />
          {this.state.returnUser && (
            <div
              className='section valign-wrapper black-text white-background-flourish'
              id='news'
            >
              <div className='valign container'>
                <div className='row'>
                  <div className='col s12'>
                    <ul
                      className='tabs'
                      style={{ backgroundColor: 'transparent' }}
                    >
                      <li className='tab col s6'>
                        <a href='#announcements' className='active'>
                          Announcements
                        </a>
                      </li>
                      <li className='tab col s6'>
                        <a href='#news-tab'>Newest Additions</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='row' id='announcements'>
                  {this.props.data
                    .filter(post => post.type === 'post')
                    .filter(post => post.acf.type === 'announcement')
                    .map(post => (
                      <div className='col s12 m6 l4 xl3' key={post.id}>
                        <TextCard
                          title={post.title.rendered}
                          content={post.acf.excerpt}
                          url={
                            post.acf.hasOwnProperty('url')
                              ? post.acf.url
                              : `/news/${post.slug}`
                          }
                        />
                      </div>
                    ))}
                </div>
                <div className='row' id='news-tab'>
                  {this.props.data
                    .filter(post => post.type === 'post')
                    .filter(post => post.acf.type === 'news')
                    .map(post => (
                      <div className='col s12 m6 l4 xl3' key={post.id}>
                        <TextCard
                          title={post.title.rendered}
                          content={post.acf.excerpt}
                          url={
                            post.acf.hasOwnProperty('url')
                              ? post.acf.url
                              : `/news/${post.slug}`
                          }
                        />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}

          {!this.state.returnUser && (
            <div
              className='section'
              style={{ padding: '0', backgroundColor: '#a61f26' }}
            >
              <div
                style={{
                  position: 'relative',
                  height: '0',
                  overflow: 'hidden',
                  paddingBottom: '56.25%'
                }}
              >
                <iframe
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: '0',
                    left: '0'
                  }}
                  src='https://www.youtube.com/embed/MfHhqMMQVBQ?&modestbranding=1&rel=0&loop=1'
                  frameBorder='0'
                  allowFullScreen
                />
              </div>
            </div>
          )}

          <div
            className='section banner valign-wrapper red-background-flourish'
            id='banner'
          >
            <div className='valign container'>
              <div className='row center'>
                <h2 className='light flourish-white white-text'>
                  <img
                    src='/static/img/squiggly3-reverse.png'
                    style={{
                      marginBottom: '10px',
                      width: '63px',
                      marginRight: '8px'
                    }}
                  />Formation<img
                    src='/static/img/squiggly3.png'
                    style={{
                      marginBottom: '10px',
                      width: '63px',
                      marginLeft: '8px'
                    }}
                  />
                </h2>
              </div>
              <div className='row light'>
                {this.props.data
                  .filter(post => post.type === 'formation-card')
                  .map(post => (
                    <div className='col s12 m6' key={post.id}>
                      <TextRevealImageCard
                        cardTitle={post.title.rendered}
                        cardImg={
                          post.featured_media !== 0
                            ? post.better_featured_image.source_url
                            : ''
                        }
                        cardContent={post.content.rendered}
                        url={post.acf.link}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div
            className='section valign-wrapper white-text black'
            id='san-damiano'
            style={{ padding: '0' }}
          >
            <div className='valign container'>
              <div className='row light flow-text'>
                <div className='col s12 l6' />
                <div className='col s12 l6'>
                  {this.props.data
                    .filter(post => post.slug === 'home-black-banner')
                    .map(post => (
                      <blockquote
                        className='flow-text'
                        style={{ borderLeft: '5px solid #a61f26' }}
                        dangerouslySetInnerHTML={{
                          __html: post.content.rendered
                        }}
                        key={post.id}
                      />
                    ))}
                </div>
              </div>
            </div>
          </div>

          {!this.state.returnUser && (
            <div
              className='section valign-wrapper black-text white-background-flourish'
              id='news'
            >
              <div className='valign container'>
                <div className='row'>
                  <div className='col s12'>
                    <ul
                      className='tabs'
                      style={{ backgroundColor: 'transparent' }}
                    >
                      <li className='tab col s6'>
                        <a href='#announcements' className='active'>
                          Announcements
                        </a>
                      </li>
                      <li className='tab col s6'>
                        <a href='#news-tab'>Newest Additions</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='row' id='announcements'>
                  {this.props.data
                    .filter(post => post.type === 'post')
                    .filter(post => post.acf.type === 'announcement')
                    .map(post => (
                      <div className='col s12 m6 l4 xl3' key={post.id}>
                        <TextCard
                          title={post.title.rendered}
                          content={post.acf.excerpt}
                          url={
                            post.acf.hasOwnProperty('url')
                              ? post.acf.url
                              : `/news/${post.slug}`
                          }
                        />
                      </div>
                    ))}
                </div>
                <div className='row' id='news-tab'>
                  {this.props.data
                    .filter(post => post.type === 'post')
                    .filter(post => post.acf.type === 'news')
                    .map(post => (
                      <div className='col s12 m6 l4 xl3' key={post.id}>
                        <TextCard
                          title={post.title.rendered}
                          content={post.acf.excerpt}
                          url={
                            post.acf.hasOwnProperty('url')
                              ? post.acf.url
                              : `/news/${post.slug}`
                          }
                        />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}

          {this.state.returnUser && (
            <div
              className='section'
              style={{ padding: '0', backgroundColor: '#a61f26' }}
            >
              <div
                style={{
                  position: 'relative',
                  height: '0',
                  overflow: 'hidden',
                  paddingBottom: '56.25%'
                }}
              >
                <iframe
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: '0',
                    left: '0'
                  }}
                  src='https://www.youtube.com/embed/MfHhqMMQVBQ?&modestbranding=1&rel=0&loop=1'
                  frameBorder='0'
                  allowFullScreen
                />
              </div>
            </div>
          )}

          <style jsx>{`
            @media screen and (max-width: 500px) {
              h2 img {
                display: none;
              }
            }
            #san-damiano {
              min-height: 708px;
            }
            blockquote {
              font-size: 130%;
            }
            @media screen and (max-width: 1088px) {
              #san-damiano {
                background-position-x: 3%;
                background-size: 481px;
              }
            }
            .tab a {
              font-size: 18px;
            }
          `}</style>
        </main>
      </Layout>
    )
  }
}
