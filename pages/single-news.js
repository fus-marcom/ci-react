import React from 'react'
import Layout from '../components/Layout'
import StickyNav from '../components/StickyNav'
import Error404 from '../components/Error404'
import 'isomorphic-fetch'
import { logPageView } from '../utils/analytics'

export default class extends React.Component {
  static async getInitialProps ({ query: { id } }) {
    const apiUrl = 'https://wp.catechetics.com/wp-json/wp/v2/'
    const params = `posts?filter[name]=${id}&fields=title,featured_media,better_featured_image,categories,tags,id,excerpt,content,acf,pure_taxonomies`
    const res = await fetch(apiUrl + params)
    const data = await res.json()
    return { data }
  }

  componentDidMount () {
    logPageView()
  }

  titleTag (props) {
    if (this.props.data.length > 0) {
      return `${this.props.data[0].title
        .rendered} | Catechetical Institute at Franciscan University`
    }
    return `News | Catechetical Institute at Franciscan University`
  }

  descriptionTag (props) {
    if (this.props.data.length > 0) {
      return `${this.props.data[0].acf.seo_description}`
    }
    return ` `
  }

  render () {
    return (
      <Layout
        headerType='interior'
        title={this.titleTag()}
        description={this.descriptionTag()}
      >
        {this.props.data.length === 0
          ? <Error404 />
          : <main className='single-post'>
            <StickyNav />

            <div className='container'>
              <h1
                dangerouslySetInnerHTML={{
                  __html: this.props.data[0].title.rendered
                }}
                />
              <div className='row'>
                <div
                  className='col s12 flow-text'
                  dangerouslySetInnerHTML={{
                    __html: this.props.data[0].content.rendered
                  }}
                  />
              </div>
            </div>
          </main>}
      </Layout>
    )
  }
}
