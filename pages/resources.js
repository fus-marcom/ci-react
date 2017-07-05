/* global initTabs */
import React from 'react'
import Layout from '../components/Layout'
import StickyNav from '../components/StickyNav'
import Title from '../components/Title'
import ResourceCard from '../components/ResourceCard'
import 'isomorphic-fetch'
import { logPageView } from '../utils/analytics'
import { getJSON } from '../utils/fetch'
import Masonry from 'react-masonry-component'

export default class extends React.Component {
  state = {
    activeTab: 'all',
    data: [],
    price: 'paid',
    category: 'all',
    type: 'all'
  }

  static async getInitialProps () {
    const apiUrl = 'https://wp.catechetics.com/wp-json/wp/v2/'
    const params =
      'resource?per_page=100&fields=title,acf,better_featured_image'
    const res = await fetch(apiUrl + params)
    const data = await res.json()
    return { data }
  }

  componentDidMount = () => {
    this.setState({ data: this.props.data })
    initTabs()
    logPageView()
  }

  getSearchResults = () => {
    /* Get input value
        Make api call based on value
        Render cards from api data
     */
    const searchTerm = document.getElementById('search').value
    console.log(searchTerm)

    const apiUrl = 'https://wp.catechetics.com/wp-json/wp/v2/'
    const params = `resource?search=${searchTerm}&per_page=100&fields=title,acf,better_featured_image`

    getJSON(apiUrl + params).then(data => this.setState({ data }))
  }

  pricePicker = () => {
    this.setState({ price: 'free' })
  }

  render () {
    const { activeTab } = this.state
    const tabs = {
      all: 'All',
      audio: 'Audio',
      text: 'Text',
      video: 'Video'
    }
    const massonryComp = (
      <Masonry>
        {this.state.data
          .filter(post => activeTab === 'all' || activeTab === post.acf.type)
          .filter(post => post.acf.price === this.state.price)
          .map((post, i) =>
            <div className='col s12 m6 l4 xl3' key={i}>
              <ResourceCard
                title={post.title.rendered}
                type={post.acf.type}
                content={post.acf.description}
                url={post.acf.url}
                price={post.acf.price}
                img={
                  post.better_featured_image !== null
                    ? post.better_featured_image.source_url
                    : ''
                }
                imgWidth={
                  post.better_featured_image !== null
                    ? post.better_featured_image.media_details.width
                    : '1'
                }
              />
            </div>
          )}
      </Masonry>
    )

    return (
      <Layout
        headerType='interior'
        title='Resources | Catechetical Institute at Franciscan University'
        description='Franciscan University has produced a prodigious amount of material over the years that can help you be a better catechist. Here you will find videos, audio clips, magazines, books, brochures, and other resources produced by University faculty, conference speakers, and an array of collaborators.'
      >
        <main id='resources'>
          <StickyNav />
          <Title
            title='Resources'
            imgPath='/static/img/campus-11.jpg'
            posY='-44vh'
          />
          <div className='section valign-wrapper white-background-flourish'>
            <div className='valign container'>

              <div className='row light flow-text'>
                <div className='col s12'>
                  <p className='flow-text'>
                    Franciscan University has produced a prodigious amount of
                    material over the years that can help you be a better
                    catechist. Here you will find videos, audio clips,
                    magazines, books, brochures, and other resources produced by
                    University faculty, conference speakers, and an array of
                    collaborators. We are pleased to make much of it available
                    for free, with a handful of items requiring a subscription
                    or purchase.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className='section banner valign-wrapper red-background-flourish'
            id='banner'
          >

            <div className='valign container container-wide'>
              <div className='row center white-text '>
                <h2 className='light flourish-white'>Featured Resources</h2>
                <p className='flow-text'>
                  Resources marked with{' '}
                  <svg
                    fill='#fff'
                    height='24'
                    viewBox='0 0 24 24'
                    width='24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M0 0h24v24H0z' fill='none' />
                    <path d='M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z' />
                  </svg>{' '}
                  are offered at no charge.
                </p>
              </div>
              <div className='row'>
                {this.props.data.map(function (post, i) {
                  if (post.acf.featured) {
                    for (let f = 0; f < 4; f++) {
                      return (
                        <div className='col s12 m6 l6 xl3' key={i}>
                          <ResourceCard
                            title={post.title.rendered}
                            type={post.acf.type}
                            content={post.acf.description}
                            url={post.acf.url}
                            price={post.acf.price}
                            img={
                              post.better_featured_image !== null
                                ? post.better_featured_image.source_url
                                : ''
                            }
                            imgWidth={
                              post.better_featured_image !== null
                                ? post.better_featured_image.media_details.width
                                : '1'
                            }
                          />
                        </div>
                      )
                    }
                  }
                })}
              </div>
            </div>
          </div>
          <div
            className='section white-background-flourish'
            style={{ minHeight: '500px' }}
          >
            <div className='container container-wide'>
              <div className='row'>
                <div class='col s12 m2 offset-m4'>
                  <div class='switch'>
                    <label>
                      Free
                      <input type='checkbox' onClick={this.pricePicker} />
                      <span class='lever' />
                      Paid
                    </label>
                  </div>
                </div>
                <div className='input-field col s12 m6 offset-m6'>
                  <input
                    id='search'
                    type='search'
                    onKeyUp={this.getSearchResults}
                    style={{ width: '100%', paddingLeft: '4px' }}
                  />
                  <label htmlFor='search'>Search</label>
                  <svg
                    fill='rgba(0, 0, 0, 0.57)'
                    height='24'
                    viewBox='0 0 24 24'
                    width='24'
                  >
                    <path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' />
                    <path d='M0 0h24v24H0z' fill='none' />
                  </svg>
                </div>
              </div>
              <div className='row'>
                <div className='col s12'>
                  <ul className='tabs'>
                    {Object.keys(tabs).map(tabKey =>
                      <li className='tab col s3' key={tabKey + 'li'}>
                        <a
                          key={tabKey}
                          href={'#' + tabKey}
                          className={tabKey === activeTab && 'active'}
                          onClick={() => this.setState({ activeTab: tabKey })}
                        >
                          {tabs[tabKey]}
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              {/* For each tab, we generate a row */}
              {Object.keys(tabs).map(tabKey =>
                <div className='row' id={tabKey} key={tabKey}>
                  {/* We render masonry comp only if we are in current active tab key */}
                  {activeTab === tabKey && massonryComp}
                </div>
              )}

            </div>
          </div>

          <style jsx>
            {`
              @media only screen and (min-width: 993px) {
                .container-wide {
                  width: 85%;
                  max-width: 2000px;
                }
                .tab a {
                  font-size: 18px;
                }
              }

              .input-field input[type=search]:focus {
                background-color: transparent;
                box-shadow: none;
                color: color: rgba(68, 68, 68, 0.57);
              }

              .input-field svg {
                position: absolute;
                right: 16px;
                top: 15px;
                width: 30px;
                height: auto;
              }
            `}
          </style>
        </main>
      </Layout>
    )
  }
}
