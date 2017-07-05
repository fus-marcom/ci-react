/* global initTabs */
import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import StickyNav from '../components/StickyNav'
import TextRevealImageCard from '../components/TextRevealImageCard'
import TextCard from '../components/TextCard'
import 'isomorphic-fetch'
import { logPageView } from '../utils/analytics'

export default class extends React.Component {
  // static async getInitialProps () {
  //   const apiUrl = 'https://wp.catechetics.com/wp-json/wp/v2/'
  //   const params = 'pages?slug=home-black-banner&fields=acf,type,slug'
  //   const res = await fetch(apiUrl + params)
  //   const data = await res.json()
  //   return { data }
  // }

  componentDidMount () {
    initTabs()
    logPageView()
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
                src='https://www.youtube.com/embed/RQzw0RPpVVs?controls=0&showinfo=0&rel=0&loop=1'
                frameborder='0'
                allowfullscreen
              />
            </div>
          </div>
          <div className='section red-background-flourish white-text'>
            <div className='container'>
              <div className='row'>
                <div className='col s12 l6'>
                  <h4>Franciscan at Home</h4>
                  <p className='flow-text'>
                    Online learning at your convenience with a rich and varied
                    corpus of many hundreds of workshops spread across a variety
                    of ministry areas, which can accessed by individuals, or
                    used in any way a diocese wishes.
                  </p>
                  <a
                    href='http://en.calameo.com/read/00005685416f121522341'
                    title='Franciscan at Home'
                    target='_blank'
                  >
                    <button
                      className='btn waves-effect waves-light btn-inverted-white'
                      style={{
                        marginTop: '16px',
                        display: 'block'
                      }}
                    >
                      Learn More
                    </button>
                  </a>
                </div>
                <div className='col s12 l6'>
                  <h4>Catechetical Review</h4>
                  <p className='flow-text'>
                    An international quarterly catechetical journal primarily
                    written for Directors of Religious Education, catechetical
                    leaders, religious educators, youth ministers, RCIA
                    coordinators and anyone involved in faith formation.
                  </p>
                  <a
                    href='https://review.catechetics.com/'
                    title='Catechetical Review'
                    target='_blank'
                  >
                    <button
                      className='btn waves-effect waves-light btn-inverted-white'
                      style={{
                        marginTop: '16px',
                        display: 'block'
                      }}
                    >
                      Learn More
                    </button>
                  </a>
                </div>
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
                  <blockquote
                    className='flow-text'
                    style={{ borderLeft: '5px solid #a61f26' }}
                  >
                    <h3>Mission</h3>
                    The Franciscan University Catechetical Institute forms
                    Catholics who form others in the faith. Through courses,
                    conferences, advice, and resources, the institute supports
                    clergy, parents, and all those responsible for the work of
                    catechesis and evangelization, as they carry out Christ’s
                    command to make disciples of all nations.
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
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
                <div className='col s12 m6'>
                  <TextRevealImageCard
                    cardTitle='Courses'
                    cardImg='/static/img/st._john_bosco.jpg'
                    cardContent='There are many avenues through which catechists can get formal training. Our principal training vehicle, Franciscan at Home, draws together the best of the Franciscan University Catechetics Program, the St. John Bosco Conference, and the latest in online education. There also are opportunities for homeschool families, online graduate studies, and more from Franciscan University of Steubenville.'
                    url='/courses'
                  />
                </div>
                <div className='col s12 m6'>
                  <TextRevealImageCard
                    cardTitle='Resources'
                    cardImg='/static/img/resources.jpg'
                    cardContent='Franciscan University has produced a prodigious amount of material over the years that can help you be a better catechist. Here you will find videos, audio clips, magazines, books, brochures, and other resources produced by University faculty, conference speakers, and an array of collaborators. We are pleased to make much of it available for free, with a handful of items requiring a subscription or purchase.'
                    url='/resources'
                  />
                </div>
              </div>
              <div className='row light'>
                <div className='col s12 m6'>
                  <TextRevealImageCard
                    cardTitle='Events'
                    cardImg='/static/img/adoration.jpg'
                    cardContent='The annual St. John Bosco Conference for Catechists and Religious Educators at Franciscan University is our premier event, bringing catechetical experts from all over to share their expertise through general sessions and specialized tracks. We also host on-campus academic conferences on catechetical topics, and speak all over.'
                    url='/events'
                  />
                </div>
                <div className='col s12 m6'>
                  <TextRevealImageCard
                    cardTitle='Teams'
                    cardImg='/static/img/synaxis.jpg'
                    cardContent='The Catechetical Institute brings together the world-class faculty of Franciscan University’s Catechetics Program with key collaborators from all levels of ministry. These skilled professionals teach our Franciscan at Home online courses and speak at our St. John Bosco Conference, academic conferences, and other events around the country. Through the Catechetical Institute, they can also assist your diocese, parish, institution, or local community in achieving greater excellence in passing on the faith.'
                    url='/team'
                  />
                </div>
              </div>
            </div>
          </div>
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
                <div className='col s12 m6 l4 xl3'>
                  <TextCard
                    title='New Website!'
                    content="This website has just launched—going live on May 25, 2017—so that Franciscan University's new Catechetical Institute can more greatly serve the Church!"
                    url=''
                  />
                </div>
                <div className='col s12 m6 l4 xl3'>
                  <TextCard
                    title='Catechist Formation'
                    content='Our first collection of 50 workshops—those of our Catechist Formation Track—will be posted on “Franciscan At Home” on July 15. See what you can expect right here.'
                    url='http://en.calameo.com/read/00005685416f121522341?page=7'
                  />
                </div>
                <div className='col s12 m6 l4 xl3'>
                  <TextCard
                    title='Bosco Conference'
                    content='The annual “St. John Bosco Conference for Evangelization and Catechesis” will take place July 17-20, 2017.  Come join us in the sunny height of summertime!&quot;'
                    url='/events/st-john-bosco-conference'
                  />
                </div>
                <div className='col s12 m6 l4 xl3'>
                  <TextCard
                    title='Catechism Conference'
                    content='“Speaking the Truth in Love,” an international catechetical conference celebrating 25 years of the Catechism will be held October 13-15, 2017. Join us!&quot;'
                    url='/events/speaking-the-truth-in-love-conference'
                  />
                </div>
              </div>
              <div className='row' id='news-tab'>
                <div className='col s12 m6 l4 xl3'>
                  <TextCard
                    title='Resources Available'
                    content='You will find an ever-increasing array of materials—audio, video, and print—on our Formation Resources page.'
                    url='/resources'
                  />
                </div>
                <div className='col s12 m6 l4 xl3'>
                  <TextCard
                    title='Catechetical Review'
                    content='Take a look at the latest issue of our long-running magazine, The Catechetical Review.'
                    url='https://review.catechetics.com/'
                  />
                </div>
              </div>
            </div>
          </div>
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
