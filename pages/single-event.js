import React from 'react'
import Nav from '../components/Nav'
import StickyNav from '../components/StickyNav'
import Footer from '../components/Footer'
import Error404 from '../components/Error404'
import Head from 'next/head'
import 'isomorphic-fetch'
import ReactGA from 'react-ga'

export const initGA = () => {
  console.log('GA init')
  ReactGA.initialize('UA-5819863-21')
}
export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

export default class extends React.Component {
  static async getInitialProps ({ query: { id } }) {
    const apiUrl = 'https://wp.catechetics.com/wp-json/wp/v2/'
    const params = `major-event?filter[name]=${id}&fields=title,content,better_featured_image,acf`
    const res = await fetch(apiUrl + params)
    const data = await res.json()
    return { data }
  }

  componentDidMount () {
    initGA()
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
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Head>
          <meta charset='utf-8' />
          <title dangerouslySetInnerHTML={{ __html: this.titleTag() }} />
          <meta
            name='description'
            content={{ __html: this.descriptionTag() }}
          />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          <link rel='shortcut icon' href='/static/favicon.ico' />
          <link
            href='https://fonts.googleapis.com/css?family=Cinzel'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/icon?family=Material+Icons'
            rel='stylesheet'
          />
          <link href='/static/css/materialize.css' rel='stylesheet' />
          <link href='/static/css/style.css' rel='stylesheet' />
        </Head>
        <Nav headerType='interior' />
        {this.props.data.length === 0
          ? <Error404 />
          : <main id='single-event'>
            <StickyNav />

            <h1 className='center light valign' style={{ fontSize: '50px' }}>
              {this.props.data[0].title.rendered}
            </h1>
            <div className='container'>

              <div className='row'>
                <div className='center' style={{ marginTop: '16px' }}>
                  <a
                    href={this.props.data[0].acf.registration_link}
                    title={`Register for the ${this.props.data[0].title
                        .rendered}`}
                    target='_blank'
                    >
                    <button className='btn waves-effect waves-light'>
                        Register
                      </button>
                  </a>

                </div>

                <div
                  className='col s12 flow-text'
                  dangerouslySetInnerHTML={{
                    __html: this.props.data[0].content.rendered
                  }}
                  />
                <div className='center'>
                  {this.props.data[0].better_featured_image !== null
                      ? <img
                        className='responsive-img'
                        src={
                            this.props.data[0].better_featured_image.source_url
                          }
                        />
                      : ''}
                </div>
                <div
                  className='center'
                  style={{ marginBottom: '16px', marginTop: '16px' }}
                  >
                  <a
                    href={this.props.data[0].acf.registration_link}
                    title={`Register for the ${this.props.data[0].title
                        .rendered}`}
                    target='_blank'
                    >
                    <button className='btn waves-effect waves-light'>
                        Register
                      </button>
                  </a>

                </div>
              </div>
            </div>
          </main>}
        <Footer />

        <script src='https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js' />
        <script src='https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/js/materialize.min.js' />
        <script src='/static/js/app.js' />

      </div>
    )
  }
}
