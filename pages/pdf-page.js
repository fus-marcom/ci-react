import React from 'react'
import Layout from '../components/Layout'
import StickyNav from '../components/StickyNav'
import Error404 from '../components/Error404'
import 'isomorphic-fetch'
import { logPageView } from '../utils/analytics'

export default class extends React.Component {
  static async getInitialProps ({ query: { id } }) {
    const apiUrl = 'https://wp.catechetics.com/wp-json/wp/v2/'
    const params = `pdf-page?filter[name]=${id}&fields=title,content,acf`
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
    return `Information | Catechetical Institute at Franciscan University`
  }

  render () {
    return (
      <Layout headerType='interior' title={this.titleTag()}>
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
              {this.props.data[0].acf.pdf_upload
                  ? <a
                    style={{ color: '#a61f26' }}
                    href={this.props.data[0].acf.pdf_upload}
                    target='_blank'
                    >
                      Download PDF Version
                    </a>
                  : ''}

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
