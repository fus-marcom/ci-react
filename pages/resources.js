/* global initTabs */
import 'isomorphic-fetch'
import React from 'react'
import debounce from 'lodash.debounce'

import { logPageView } from '../utils/analytics'
import { getJSON } from '../utils/fetch'
import Layout from '../components/Layout'
import StickyNav from '../components/StickyNav'
import Title from '../components/Title'
import ResourceRow from '../components/ResourceRow'
import MaterialSelect from '../components/MaterialSelect'

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

  /**
   * Make api call based on searchTerm
   * Render cards from api data
   */
  fetchSearchTerm = searchTerm => {
    console.log(searchTerm)
    const apiUrl = 'https://wp.catechetics.com/wp-json/wp/v2/'
    const params = `resource?search=${searchTerm}&per_page=100&fields=title,acf,better_featured_image`
    getJSON(apiUrl + params).then(data => this.setState({ data }))
  }

  // Get a new function that is debounced when called
  debouncedSearch = debounce(this.fetchSearchTerm, 700)

  /**
   * Called onSubmit event
   */
  formGetResults = e => {
    e.preventDefault()
    const { search } = e.target
    // unfocusing input makes soft keyboard to close
    window.outerWidth < 1024 && search.blur()
    // cancel any pending search
    this.debouncedSearch.cancel()
    this.fetchSearchTerm(search.value)
  }

  /**
   * Called onChange event
   */
  getSearchResults = e => {
    var { value } = e.target
    if (value.length < 3) return
    this.debouncedSearch(value)
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

  setCategory = catNum => {
    console.log(catNum)
    this.setState({ category: parseInt(catNum) })
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
            className='section banner white-text red-background-flourish'
            style={{ padding: '8px 0' }}
          >
            <div className='container container-wide'>
              <div className='row'>
                <div class='col s12 m4' style={{ paddingRight: '16px' }}>
                  <MaterialSelect
                    categories={this.state.categories}
                    setCategory={catNum => {
                      this.setCategory(catNum)
                    }}
                  />
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
                  <form onSubmit={this.formGetResults}>
                    <input
                      id='search'
                      name='search'
                      onChange={this.getSearchResults}
                      type='search'
                      style={{ width: '100%', paddingLeft: '4px' }}
                    />
                    <label htmlFor='search'>Search</label>
                    <svg fill='#fff' height='24' viewBox='0 0 24 24' width='24'>
                      <path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' />
                      <path d='M0 0h24v24H0z' fill='none' />
                    </svg>
                  </form>
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
                  {this.state.data
                    .filter(post => this.priceFilter(post))
                    .filter(post => this.filterByCategory(post))
                    .filter(
                      post => activeTab === 'all' || activeTab === post.acf.type
                    )
                    .map((post, idx) =>
                      <div key={idx}>
                        <ResourceRow
                          title={post.title.rendered}
                          type={post.acf.type}
                          author={
                            post.acf.hasOwnProperty('author')
                              ? post.acf.author
                              : ''
                          }
                          content={post.acf.description}
                          url={post.acf.url}
                          price={post.acf.price}
                          img={
                            post.better_featured_image !== null
                              ? post.better_featured_image.source_url
                              : ''
                          }
                        />
                        {idx + 1 !== this.state.data.length &&
                          <hr className='resource-divider' />}
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
              .input-field input[type=search] {
                border-bottom: 1px solid #fff;
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
                border-right: 2px solid #998643;
                border-bottom: 2px solid #998643;
              }
              .resource-divider {
                height: 1px;
                border: 1px solid transparent;
                background: -webkit-gradient(
                  linear,
                  0 0,
                  100% 0,
                  from(rgb(245, 245, 245)),
                  color-stop(0.5, rgba(0, 0, 0, 0.05)),
                  to(rgb(245, 245, 245))
                );
              }
            `}
          </style>
        </main>
      </Layout>
    )
  }
}
