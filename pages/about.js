import React from 'react'
import Layout from '../components/Layout'
import StickyNav from '../components/StickyNav'
import Title from '../components/Title'
import 'isomorphic-fetch'
import { logPageView } from '../utils/analytics'
import TeamCard from '../components/TeamCard'

export default class extends React.Component {
  static async getInitialProps () {
    const apiUrl = 'https://wp.catechetics.com/wp-json/wp/v2/'
    const params =
      'multiple-post-type?per_page=100&type[]=pdf-page&type[]=page&type[]=collaborator&type[]=prayer-intercessor'
    const res = await fetch(apiUrl + params)
    const data = await res.json()
    return { data }
  }

  componentDidMount = () => {
    logPageView()
  }

  render () {
    return (
      <Layout
        headerType='interior'
        title='About | Catechetical Institute at Franciscan University'
        description='The Catechetical Institute at Franciscan University exists to train and support the key catechists in any situation—priests, deacons, parents, or laity, whether professional or volunteer. Through conferences, online workshops, videos, audio, personal mentorship, and a wealth of resources produced by Franciscan University, all involved in the work of catechesis will find new ideas, new approaches, new techniques, and a new confidence to do the work of catechesis.'
      >
        <main id='about'>
          <StickyNav />
          <Title
            title='About'
            imgPath='/static/img/campus-11.jpg'
            posY='-44vh'
          />
          <div className='section white-background-flourish'>
            <div className='container'>
              <div className='row valign-wrapper'>
                {this.props.data
                  .filter(post => post.slug === 'about-intro')
                  .map(post => (
                    <div
                      key={post.id}
                      className='col s12 valign flow-text'
                      dangerouslySetInnerHTML={{
                        __html: post.content.rendered
                      }}
                    />
                  ))}
              </div>
            </div>
          </div>
          <div className='section red-background-flourish white-text'>
            <div className='container wide-container'>
              <div className='row valign-wrapper'>
                {this.props.data
                  .filter(post => post.slug === 'about-section-2')
                  .map(post => (
                    <div
                      key={post.slug}
                      className='col s12 flow-text'
                      dangerouslySetInnerHTML={{
                        __html: post.content.rendered
                      }}
                    />
                  ))}
              </div>
            </div>
          </div>
          <div className='section white-background-flourish'>
            <div className='container wide-container'>
              <div className='row center'>
                <div className='col s12'>
                  <h2>An Online Hub for Local Learning</h2>
                </div>
              </div>
              <div className='row valign-wrapper'>
                <div className='col s12 m6 order-1'>
                  <img
                    className='responsive-img'
                    src='/static/img/online-learning-700w.jpg'
                    alt='A woman sitting at a table working on a computer.'
                    title='Online Learning'
                  />
                </div>
                {this.props.data
                  .filter(post => post.slug === 'about-section-3')
                  .map(post => (
                    <div
                      key={post.slug}
                      className='col s12 m6 valign order-2 flow-text'
                      dangerouslySetInnerHTML={{
                        __html: post.content.rendered
                      }}
                    />
                  ))}
              </div>
            </div>
          </div>
          <div
            className='section banner white-text'
            style={{ backgroundColor: '#000', marginBottom: '50px' }}
          >
            <div className='container wide-container'>
              <div className='row valign-wrapper'>
                <div className='col s12 m6 valign order-2'>
                  {this.props.data
                    .filter(post => post.slug === 'about-quote-banner')
                    .map(post => (
                      <blockquote
                        key={post.slug}
                        className='flow-text'
                        style={{ borderLeft: '5px solid #a61f26' }}
                        dangerouslySetInnerHTML={{
                          __html: post.content.rendered
                        }}
                      />
                    ))}
                </div>
              </div>
            </div>
          </div>
          <div className='section white-background-flourish banner'>
            <div className='container wide-container'>
              <div className='row'>
                <div className='col s12 center'>
                  <h2>Institute Leadership</h2>
                </div>
              </div>
              <div className='row'>
                <div className='col s12 m4'>
                  <div className='card leader-card'>
                    <div className='card-image'>
                      <img
                        src='/static/img/fr-nathan.jpg'
                        srcSet='/static/img/fr-nathan.jpg 300w, /static/img/fr-nathan.jpg 600w, /static/img/fr-nathan.jpg 800w, /static/img/fr-nathan.jpg 1200w'
                        sizes='(min-width: 600px) 50vw, 100vw'
                        alt='Diners eating at a restaurant.'
                        title='Restaurant'
                      />
                    </div>
                    <div className='card-content'>
                      <span className='caption caption-name card-title'>
                        Fr. Nathan Malavolti, TOR
                      </span>
                      <span className='caption caption-title'>
                        Vice President
                      </span>
                      <span className='caption caption-dept'>
                        Pastoral Care and Evangelization
                      </span>
                      <span className='caption caption-org'>
                        Franciscan University of Steubenville
                      </span>
                    </div>
                  </div>
                </div>
                <div className='col s12 m4'>
                  <div className='card leader-card'>
                    <div className='card-image'>
                      <img
                        src='/static/img/petroc-about.jpg'
                        srcSet='/static/img/petroc-about.jpg 300w, /static/img/petroc-about.jpg 600w, /static/img/petroc-about.jpg 800w, /static/img/petroc-about.jpg 1200w'
                        sizes='(min-width: 600px) 50vw, 100vw'
                        alt='Diners eating at a restaurant.'
                        title='Restaurant'
                      />
                    </div>
                    <div className='card-content'>
                      <span className='caption caption-name card-title'>
                        Petroc Willey, STL, PhD
                      </span>
                      <span className='caption caption-title'>Director</span>
                      <span className='caption caption-dept'>
                        Catechetical Institute, Office of Catechetics
                      </span>
                      <span className='caption caption-org'>
                        Franciscan University of Steubenville
                      </span>
                    </div>
                  </div>
                </div>
                <div className='col s12 m4'>
                  <div className='card leader-card'>
                    <div className='card-image'>
                      <img
                        src='/static/img/keimig-about.jpg'
                        srcSet='/static/img/keimig-about.jpg 300w, /static/img/keimig-about.jpg 600w, /static/img/keimig-about.jpg 800w, /static/img/keimig-about.jpg 1200w'
                        sizes='(min-width: 600px) 50vw, 100vw'
                        alt='Diners eating at a restaurant.'
                        title='Restaurant'
                      />
                    </div>
                    <div className='card-content'>
                      <span className='caption caption-name card-title'>
                        William Keimig, MPM, MA
                      </span>
                      <span className='caption caption-title'>
                        Assistant Director
                      </span>
                      <span className='caption caption-dept'>
                        Catechetical Institute
                      </span>
                      <span className='caption caption-org'>
                        Franciscan University of Steubenville
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {this.props.data.some(post => post.type === 'pdf-page') ? (
            <div className='section pdf-links red-background-flourish white-text'>
              <div className='container wide-container'>
                <div className='row center' style={{ marginBottom: '0' }}>
                  <h2
                    className='light flourish-white'
                    style={{ marginBottom: '0' }}
                  >
                    Information
                  </h2>
                </div>
                <div className='row valign-wrapper center'>
                  <div className='col s12 m6'>
                    <ul>
                      {this.props.data
                        .filter(post => post.type === 'pdf-page')
                        .filter((post, i) => i % 2 === 0)
                        .map(post => (
                          <li key={post.id}>
                            <a
                              href={`/i/${post.slug}`}
                              dangerouslySetInnerHTML={{
                                __html: post.title.rendered
                              }}
                            />
                          </li>
                        ))}
                    </ul>
                  </div>
                  <div className='col s12 m6'>
                    <ul>
                      {this.props.data
                        .filter(post => post.type === 'pdf-page')
                        .filter((post, i) => i % 2 === 1)
                        .map(post => (
                          <li key={post.id}>
                            <a
                              href={`/i/${post.slug}`}
                              dangerouslySetInnerHTML={{
                                __html: post.title.rendered
                              }}
                            />
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ''
          )}

          <div className='section valign-wrapper black-text white-background-flourish'>
            <div className='valign container'>
              <div className='row center'>
                <div class='col s12'>
                  <h2
                    className='light flourish-white'
                    style={{ fontSize: '38px' }}
                  >
                    Collaborators
                  </h2>
                </div>
              </div>
              <div className='row light flow-text'>
                {this.props.data
                  .filter(post => post.type === 'collaborator')
                  .map(post => (
                    <div className='col s6 m3' key={post.id}>
                      <div
                        className='card hoverable'
                        style={{ cursor: 'pointer' }}
                      >
                        <div className='card-image'>
                          <a
                            href={post.acf.url}
                            title={post.title.rendered}
                            target='_blank'
                          >
                            <img
                              src={
                                post.better_featured_image &&
                                post.better_featured_image.source_url &&
                                post.better_featured_image.source_url
                              }
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <div className='row center'>
                <div class='col s12'>
                  <h2
                    className='light flourish-white'
                    style={{ fontSize: '38px' }}
                  >
                    Prayer Intercessors
                  </h2>
                </div>
              </div>
              <div className='row light flow-text'>
                <ul>
                  {this.props.data
                    .filter(post => post.type === 'prayer-intercessor')
                    .map(post => (
                      <li key={post.id}>
                        <a
                          style={{ color: 'rgb(142, 27, 33)' }}
                          href={post.acf.url}
                          dangerouslySetInnerHTML={{
                            __html: post.title.rendered
                          }}
                        />
                      </li>
                    ))}
                </ul>
              </div>
              <div className='row center'>
                <div class='col s12'>
                  <h2
                    className='light flourish-white'
                    style={{ fontSize: '38px' }}
                  >
                    Partner Doiceses
                  </h2>
                </div>
              </div>
              <div className='row light flow-text'>
                <div className='col s12 l6'>
                  <TeamCard
                    name='Steubenville'
                    title='Test'
                    org='test org'
                    cat='test cat'
                    imgUrl='https://picsum.photos/200/200/?random'
                    content='test test tset'
                    slug='test slug'
                  />
                </div>
                <div className='col s12 l6'>
                  <TeamCard
                    name='Steubenville'
                    title='Test'
                    org='test org'
                    cat='test cat'
                    imgUrl='https://picsum.photos/200/200/?random'
                    content='test test tset'
                    slug='test slug'
                  />
                </div>
                <div className='col s12 l6'>
                  <TeamCard
                    name='Steubenville'
                    title='Test'
                    org='test org'
                    cat='test cat'
                    imgUrl='https://picsum.photos/200/200/?random'
                    content='test test tset'
                    slug='test slug'
                  />
                </div>
                <div className='col s12 l6'>
                  <TeamCard
                    name='Steubenville'
                    title='Test'
                    org='test org'
                    cat='test cat'
                    imgUrl='https://picsum.photos/200/200/?random'
                    content='test test tset'
                    slug='test slug'
                  />
                </div>
              </div>
            </div>
          </div>
          <style jsx>{`
            .leader-card {
              min-height: 432px;
            }
            span.caption {
              display: block;
            }
            main div ul.disc-list li {
              list-style-type: disc !important;
              margin-left: 35px !important;
            }
            .pdf-links ul li a {
              color: #fff;
              font-size: 22px;
              padding: 8px;
            }
          `}</style>
        </main>
      </Layout>
    )
  }
}
