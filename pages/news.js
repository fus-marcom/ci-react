import React from 'react'
import Layout from '../components/Layout'
import StickyNav from '../components/StickyNav'
import Title from '../components/Title'
import Blog from '../components/Blog'
import 'isomorphic-fetch'
import { logPageView } from '../utils/analytics'

export default class extends React.Component {
  static async getInitialProps () {
    const apiUrl = 'https://wp.catechetics.com/wp-json/wp/v2/'
    const params = 'posts'
    const res = await fetch(apiUrl + params)
    const data = await res.json()
    return { data }
  }

  componentDidMount () {
    logPageView()
  }

  render () {
    return (
      <Layout
        headerType='interior'
        title='News | Catechetical Institute at Franciscan University'
        description='The latest news and announcements from the Catechetical Institute at Franciscan University of Steubenville.'
      >
        <main id='news'>
          <StickyNav />
          <Title
            title='News'
            imgPath='/static/img/campus-11.jpg'
            posY='-44vh'
          />
          <div className='container'>
            <div className='section'>
              {this.props.data.map(function (post, i) {
                return (
                  <Blog
                    slug={post.slug}
                    title={post.title.rendered}
                    content={post.content.rendered}
                    excerpt={post.acf.excerpt}
                    date={new Date(post.date)}
                    homepageOnly={post.acf.homepage_only}
                    url={post.acf.url}
                    key={i}
                  />
                )
              })}
            </div>
          </div>
          {/* Finish this when there is enough content to justify it.
            <div className='section' style={{ backgroundColor: '#000' }}>
              <div className='container'>
            <div className='row white-text'>
            <div className='col s12 m4'>
            <h5>Categories</h5>
            <ul>
            <li>Category</li>
            <li>Category</li>
            <li>Category</li>
            </ul>
            </div>
            <div className='col s12 m4'>
            <h5>Tags</h5>
            <ul>
            <li>Tag</li>
            <li>Tag</li>
            <li>Tag</li>
            </ul>
            </div>
            <div className='col s12 m4'>
            <h5>Archives</h5>
            <ul>
            <li>May</li>
            <li>April</li>
            <li>March</li>
            </ul>
            </div>
            </div>
              </div>

            </div>
          */}

        </main>
      </Layout>
    )
  }
}
