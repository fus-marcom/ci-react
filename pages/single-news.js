import React from 'react'
import Nav from '../components/Nav';
import StickyNav from '../components/StickyNav';
import Footer from '../components/Footer';
import Title from '../components/Title';
import Error404 from '../components/Error404';
import Head from 'next/head'
import 'isomorphic-fetch'
import { logPageView } from '../utils/analytics'

export default class extends React.Component {

  static async getInitialProps ({ query: { id } }) {
    const apiUrl = 'https://wp.catechetics.com/wp-json/wp/v2/';
    const params = `posts?filter[name]=${id}&fields=title,featured_media,better_featured_image,categories,tags,id,excerpt,content,acf,pure_taxonomies`;
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
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <Head>
          <meta charset="utf-8" />
          <title dangerouslySetInnerHTML={{__html : this.titleTag()}}></title>
          <meta name="description" content={{__html : this.descriptionTag()}} />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <link href="https://fonts.googleapis.com/css?family=Cinzel" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
          <link href="/static/css/materialize.css" rel="stylesheet" />
          <link href="/static/css/style.css" rel="stylesheet" />
        </Head>
        <Nav headerType="interior" />
          {this.props.data.length === 0 ? <Error404 /> : <main className="single-post"><StickyNav />
            {this.props.data[0].better_featured_image !== null && this.props.data[0].better_featured_image.media_details.sizes.hasOwnProperty('large') ? <Title title={this.props.data[0].title.rendered} imgPath={this.props.data[0].better_featured_image.media_details.sizes.large.source_url} posY="-44vh" /> : <Title title={this.props.data[0].title.rendered} imgPath="/static/img/campus-7.jpg" posY="-44vh" />
            }

            <div className="container">
              <div className="row" >
                <div className="col s12 flow-text" dangerouslySetInnerHTML={{__html: this.props.data[0].content.rendered}}>

                </div>
              </div>
            </div>
          </main> }
        <Footer />

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/js/materialize.min.js"></script>
        <script src="/static/js/app.js"></script>

      </div>
    )
  }
}
