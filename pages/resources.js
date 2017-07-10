/* global initTabs */
import React from 'react'
import Layout from '../components/Layout'
import StickyNav from '../components/StickyNav'
import Title from '../components/Title'
import 'isomorphic-fetch'
import { logPageView } from '../utils/analytics'
import { getJSON } from '../utils/fetch'

export default class extends React.Component {
  state = {
    activeTab: 'all',
    data: [],
    price: 'all',
    category: 0,
    type: 'all',
    categories: []
  }

  static async getInitialProps () {
    const apiUrl = 'https://wp.catechetics.com/wp-json/wp/v2/'
    const params =
      'resource?per_page=100&fields=title,acf,better_featured_image,date,resource-category'
    const res = await fetch(apiUrl + params)
    const data = await res.json()
    return { data }
  }

  componentDidMount = () => {
    this.setState({ data: this.props.data })
    initTabs()
    logPageView()
    this.getCategories()
  }

  getCategories = () => {
    const apiUrl = 'https://wp.catechetics.com/wp-json/wp/v2/'
    const params = `resource-category`
    getJSON(apiUrl + params).then(categories => this.setState({ categories }))
  }

  getSearchResults = () => {
    /* Get input value
        Make api call based on value
        Render cards from api data
     */
    const searchTerm = document.getElementById('search').value
    const apiUrl = 'https://wp.catechetics.com/wp-json/wp/v2/'
    const params = `resource?search=${searchTerm}&per_page=100&fields=title,acf,better_featured_image`

    getJSON(apiUrl + params).then(data => this.setState({ data }))
  }

  pricePicker = e => {
    const freeVal = document.getElementById('free').checked
    const paidVal = document.getElementById('paid').checked

    if ((freeVal && paidVal) || (!freeVal && !paidVal)) {
      this.setState({ price: 'all' })
    } else if (freeVal) {
      this.setState({ price: 'free' })
    } else {
      this.setState({ price: 'paid' })
    }
  }

  priceFilter = post => {
    if (this.state.price === 'all') {
      return true
    } else if (post.acf.price === this.state.price) {
      return true
    } else {
      return false
    }
  }

  filterByCategory = post => {
    if (this.state.category === 0) {
      return true
    } else if (post['resource-category'] !== undefined) {
      return post['resource-category'].some(
        category => category === this.state.category
      )
    } else {
      return false
    }
  }

  render () {
    const { activeTab } = this.state
    const tabs = {
      all: 'All',
      audio: 'Audio',
      text: 'Text',
      video: 'Video'
    }

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
            className='section banner white-text'
            style={{ backgroundColor: '#000', padding: '0' }}
          >
            <div className='container container-wide'>
              <div className='row'>
                <div
                  class='input-field col s12 m4'
                  style={{ paddingRight: '16px' }}
                >
                  <select>
                    <option value='' disabled selected>
                      Choose a category
                    </option>
                    <option value='0'>All</option>
                    {this.state.categories !== ''
                      ? this.state.categories.map(category =>
                        <option value={category.id} key={category.id}>
                          {category.name}
                        </option>
                        )
                      : ''}
                  </select>
                </div>
                <div class='col s12 m2' style={{ textAlign: 'center' }}>
                  <p>
                    <input
                      type='checkbox'
                      id='free'
                      onChange={this.pricePicker}
                    />
                    <label for='free'>Free</label>
                  </p>
                  <p>
                    <input
                      type='checkbox'
                      id='paid'
                      onChange={this.pricePicker}
                    />
                    <label for='paid'>Paid</label>
                  </p>
                </div>
                <div className='input-field col s12 m6'>
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
            </div>
          </div>
          <div
            className='section white-background-flourish'
            style={{ minHeight: '500px' }}
          >
            <div className='container container-wide'>

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
                  {this.state.data.map(post =>
                    <div
                      class='valign-wrapper col s12 resource-row'
                      style={{
                        borderBottom: '1px solid rgba(0, 0, 0, 0.54)',
                        padding: '16px'
                      }}
                    >
                      <div class='col s12 m3'>
                        <img
                          src={
                            post.better_featured_image !== null
                              ? post.better_featured_image
                              : ''
                          }
                          style={{ maxHeight: '200px' }}
                        />

                      </div>
                      <div class='col s12 m9 valign'>
                        <h4 style={{ marginBottom: '4px', marginTop: '0px' }}>
                          <a
                            href={post.acf.url}
                            title={post.title.rendered}
                            style={{ color: '#8e1b21' }}
                          >
                            {post.title.rendered}
                          </a>
                        </h4>
                        <span
                          class='author'
                          style={{
                            color: '#998643',
                            display: 'block',
                            fontSize: '20px'
                          }}
                        >
                          Author:{' '}
                          {post.acf.hasOwnProperty('author')
                            ? post.acf.author
                            : ''}
                        </span>
                        <span
                          class='type'
                          style={{
                            color: '#998643',
                            fontSize: '20px',
                            display: 'block'
                          }}
                        >
                          {post.acf.type}
                        </span>
                        <span
                          class='read-more'
                          style={{
                            color: '#8e1b21',
                            cursor: 'pointer',
                            marginTop: '16px',
                            display: 'block'
                          }}
                        >
                          Read More
                        </span>
                        <p
                          class='description'
                          style={{ display: 'none' }}
                          dangerouslySetInnerHTML={{
                            __html: post.acf.description
                          }}
                        />
                      </div>
                    </div>
                  )}

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
                color: #fff;
              }
              .input-field svg {
                position: absolute;
                right: 16px;
                top: 15px;
                width: 30px;
                height: auto;
              }
              [type="checkbox"]:checked + label:before {
                border-right: 2px solid #a61f26;
                border-bottom: 2px solid #a61f26;
              }
              .resource-row:first-of-type {
                border-top: 1px solid rgba(0, 0, 0, 0.54);
              }
            `}
          </style>
        </main>
      </Layout>
    )
  }
}
