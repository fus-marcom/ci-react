/* global initTeamCardSections, teamModalInit */
import React from 'react'
import Layout from '../components/Layout'
import StickyNav from '../components/StickyNav'
import TeamCard from '../components/TeamCard'
import Title from '../components/Title'
import 'isomorphic-fetch'
import { logPageView } from '../utils/analytics'

export default class extends React.Component {
  static async getInitialProps () {
    const apiUrl = 'https://wp.catechetics.com/wp-json/wp/v2/'
    const params =
      'multiple-post-type?per_page=100&filter[order]=ASC&type[]=team-member&type[]=page'
    const res = await fetch(apiUrl + params)
    const data = await res.json()
    return { data }
  }

  componentDidMount () {
    initTeamCardSections()
    teamModalInit()
    logPageView()
  }

  render () {
    return (
      <Layout
        headerType='interior'
        title='Team | Catechetical Institute at Franciscan University'
        description='The Catechetical Institute brings together the world-class faculty of Franciscan University’s Catechetics Program with key collaborators from all levels of ministry. These skilled professionals teach our Franciscan at Home online courses and speak at our St. John Bosco Conference, academic conferences, and other events around the country.'
      >
        <main id='team'>
          <StickyNav />
          <Title title='Team' imgPath='/static/img/campus-7.jpg' posY='-44vh' />
          <div className='section white-background-flourish'>
            <div className='container'>
              <div className='row valign-wrapper'>
                <div className='col s12 valign'>
                  <p className='flow-text'>
                    The Catechetical Institute brings together the world-class
                    faculty of Franciscan University’s Catechetics Program with
                    key collaborators from all levels of ministry. These skilled
                    professionals teach our Franciscan at Home online courses
                    and speak at our St. John Bosco Conference, academic
                    conferences, and other events around the country. Through
                    the Catechetical Institute, they can also assist your
                    diocese, parish, institution, or local community in
                    achieving greater excellence in passing on the faith.
                  </p>
                  <p className='flow-text'>
                    To invite one or a team of our presenters or faculty, please
                    email us at:{' '}
                    <a href='mailto:CI@franciscan.edu'>CI@franciscan.edu</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='container team-card-container'>
            <div className='section black-text open'>
              <div className='row light flow-text title-row'>
                <div className='col s12'>
                  <h2 className='light'>
                    <svg
                      fill='#000000'
                      height='24'
                      viewBox='0 0 24 24'
                      width='24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z' />
                      <path d='M0 0h24v24H0z' fill='none' />
                    </svg>Franciscan University Catechetics Faculty and Staff
                  </h2>
                </div>
              </div>
              <div className='row light'>
                {this.props.data
                  .filter(post => post.type === 'team-member')
                  .filter(post => post.acf.category[0] === 'fus-staff')
                  .map(post =>
                    <div className='col s12 l6' key={post.id}>
                      <TeamCard
                        name={post.acf.name}
                        title={post.acf.title}
                        org={post.acf.organization}
                        cat={post.acf.category}
                        imgUrl={
                          post.better_featured_image !== null
                            ? post.better_featured_image.source_url
                            : ''
                        }
                        content={post.content.rendered}
                        slug={post.slug}
                      />
                    </div>
                  )}

              </div>
            </div>

            <div className='section black-text'>
              <div className='row light flow-text title-row'>
                <div className='col s12'>
                  <h2 className='light'>
                    <svg
                      fill='#000000'
                      height='24'
                      viewBox='0 0 24 24'
                      width='24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z' />
                      <path d='M0 0h24v24H0z' fill='none' />
                    </svg>St. John Bosco Conference Track Managers and Online
                    Workshop Presenters
                  </h2>
                </div>
              </div>
              <div className='row light'>
                {this.props.data
                  .filter(post => post.type === 'team-member')
                  .filter(post => post.acf.category[0] === 'conf-staff')
                  .map(post =>
                    <div className='col s12 l6' key={post.id}>
                      <TeamCard
                        name={post.acf.name}
                        title={post.acf.title}
                        org={post.acf.organization}
                        cat={post.acf.category}
                        imgUrl={
                          post.better_featured_image !== null
                            ? post.better_featured_image.source_url
                            : ''
                        }
                        content={post.content.rendered}
                        slug={post.slug}
                      />
                    </div>
                  )}
              </div>
            </div>

            <div className='section black-text'>
              <div className='row light flow-text title-row'>
                <div className='col s12'>
                  <h2 className='light'>
                    <svg
                      fill='#000000'
                      height='24'
                      viewBox='0 0 24 24'
                      width='24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z' />
                      <path d='M0 0h24v24H0z' fill='none' />
                    </svg>Catechetical Institute Staff
                  </h2>
                </div>
              </div>
              <div className='row light'>
                {this.props.data
                  .filter(post => post.type === 'team-member')
                  .filter(post => post.acf.category[0] === 'ci-staff')
                  .map(post =>
                    <div className='col s12 l6' key={post.id}>
                      <TeamCard
                        name={post.acf.name}
                        title={post.acf.title}
                        org={post.acf.organization}
                        cat={post.acf.category}
                        imgUrl={
                          post.better_featured_image !== null
                            ? post.better_featured_image.source_url
                            : ''
                        }
                        content={post.content.rendered}
                        slug={post.slug}
                      />
                    </div>
                  )}

              </div>
            </div>

            <div className='section black-text'>

              <div className='row light flow-text title-row'>
                <div className='col s12'>
                  <h2 className='light'>
                    <svg
                      fill='#000000'
                      height='24'
                      viewBox='0 0 24 24'
                      width='24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z' />
                      <path d='M0 0h24v24H0z' fill='none' />
                    </svg>Catechetical Institute Mentors
                  </h2>
                </div>
              </div>
              <div className='row light'>
                {this.props.data
                  .filter(post => post.type === 'team-member')
                  .filter(post => post.acf.category[0] === 'ci-mentors')
                  .map(post =>
                    <div className='col s12 l6' key={post.id}>
                      <TeamCard
                        name={post.acf.name}
                        title={post.acf.title}
                        org={post.acf.organization}
                        cat={post.acf.category}
                        imgUrl={
                          post.better_featured_image !== null
                            ? post.better_featured_image.source_url
                            : ''
                        }
                        content={post.content.rendered}
                        slug={post.slug}
                      />
                    </div>
                  )}

              </div>
            </div>
          </div>
        </main>
      </Layout>
    )
  }
}
