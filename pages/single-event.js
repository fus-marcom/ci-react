import React from 'react'
import Layout from '../components/Layout';
import StickyNav from '../components/StickyNav';
import Title from '../components/Title';
import Error404 from '../components/Error404';
import 'isomorphic-fetch'
import { logPageView } from '../utils/analytics'

export default class extends React.Component {

  static async getInitialProps ({ query: { id } }) {
    const apiUrl = 'https://wp.catechetics.com/wp-json/wp/v2/';
    const params = `major-event?filter[name]=${id}&fields=title,content,better_featured_image,acf`;
    const res = await fetch(apiUrl + params)
    const data = await res.json()
    return { data }
  }

  componentDidMount () {
    logPageView()
  }

  titleTag(props) {
    if (this.props.data.length > 0) {
      return `${this.props.data[0].title.rendered} | Catechetical Institute at Franciscan University`;
    }
    return `News | Catechetical Institute at Franciscan University`;
  }

  descriptionTag(props) {
    if (this.props.data.length > 0) {
      return `${this.props.data[0].acf.seo_description}`;
    }
    return ` `;
  }

  render () {
    return (
      <Layout headerType="interior"
        title={{this.titleTag()}}
        description={{this.descriptionTag()}}>
        {this.props.data.length === 0 ? <Error404 /> : <main id="single-event"><StickyNav />

          <h1 className="center light valign" style={{fontSize: '50px'}}>{this.props.data[0].title.rendered}</h1>
          <div className="container">

            <div className="row" >
              <div className="center" style={{marginTop: '16px'}}>
                <a href={this.props.data[0].acf.registration_link} title={`Register for the ${this.props.data[0].title.rendered}`} target="_blank"><button className="btn waves-effect waves-light">Register</button></a>

              </div>

              <div className="col s12 flow-text" dangerouslySetInnerHTML={{__html: this.props.data[0].content.rendered}}>

              </div>
              <div className="center">
                {this.props.data[0].better_featured_image !== null ? <img className="responsive-img" src={this.props.data[0].better_featured_image.source_url} /> : ''}
              </div>
              <div className="center" style={{marginBottom: '16px', marginTop: '16px'}}>
                <a href={this.props.data[0].acf.registration_link} title={`Register for the ${this.props.data[0].title.rendered}`} target="_blank"><button className="btn waves-effect waves-light">Register</button></a>

              </div>
            </div>
          </div>
          <style jsx>{`
            h2 {
              font-size: 44px;
            }

            h3 {
              font-size: 40px;
            }
          `}</style>
          </main> }
      </Layout>
    )
  }
}
