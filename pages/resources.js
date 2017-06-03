import React from 'react'
import Nav from '../components/Nav';
import StickyNav from '../components/StickyNav';
import Footer from '../components/Footer';
import Title from '../components/Title';
import ResourceCard from '../components/ResourceCard';
import Head from 'next/head'
import 'isomorphic-fetch'
import ReactGA from 'react-ga'
import Masonry from 'react-masonry-component';

export const initGA = () => {
  console.log('GA init')
  ReactGA.initialize('UA-5819863-21')
}
export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

export default class extends React.Component {

  static async getInitialProps () {
    const apiUrl = 'https://wp.catechetics.com/wp-json/wp/v2/';
    const params = 'resource?per_page=100&fields=title,acf';
    const res = await fetch(apiUrl + params)
    const data = await res.json()
    return { data }
  }

  componentDidMount() {
    initTabs();
    initGA()
    logPageView()
  }

  render () {
    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <Head>
          <meta charset="utf-8" />
          <title>Resources | Catechetical Institute at Franciscan University</title>
          <meta name="description" content="A static html template for Franciscan University websites." />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <link href="https://fonts.googleapis.com/css?family=Cinzel" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
          <link href="/static/css/materialize.css" rel="stylesheet" />
          <link href="/static/css/style.css" rel="stylesheet" />
        </Head>
        <Nav headerType="interior" />
        <main id="resources">
          <StickyNav />
          <Title title="Resources" imgPath="/static/img/campus-11.jpg" posY="-44vh" />
          <div className="section valign-wrapper white-background-flourish">
            <div className="valign container">

              <div className="row light flow-text">
                <div className="col s12 center">
                  <p className="flow-text">
                    Franciscan University has produced a prodigious amount of material over the years that can help you be a better catechist. Here you will find videos, audio clips, magazines, books, brochures, and other resources produced by University faculty, conference speakers, and an array of collaborators. We are pleased to make much of it available for free, with a handful of items requiring a subscription or purchase.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="section banner valign-wrapper red-background-flourish" id="banner">

            <div className="valign container container-wide">
              <div className="row center white-text ">
                <h2 className="light flourish-white">Featured Resources</h2>
                <p className="flow-text">
                  Resources marked with <svg fill="#fff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"/>
                  </svg> are offered at no charge.
                </p>
              </div>
              <div className="row">
                {this.props.data.map(function(post, i) {
                  if (post.acf.featured) {
                    for (let f = 0; f < 4; f++) {
                      return <div className="col s12 m12 l6 xl3" key={i}>
                        <ResourceCard title={post.title.rendered} type={post.acf.type} content={post.acf.description} url={post.acf.url} price={post.acf.price} />
                      </div>
                    }
                  }
                })}
              </div>
            </div>
          </div>
          <div className="section valign-wrapper white-background-flourish">
            <div className="valign container container-wide">
              <div className="row">
                <div className="col s12">
                  <ul className="tabs">
                    <li className="tab col s3"><a href="#all" className="active">All</a></li>
                    <li className="tab col s3"><a href="#audio">Audio</a></li>
                    <li className="tab col s3"><a href="#text">Text</a></li>
                    <li className="tab col s3"><a href="#video">Video</a></li>
                  </ul>
                </div>
              </div>
              <div className="row" id="all">
                <Masonry>
                  {this.props.data.map(function(post, i) {
                    return <div className="col s12 m12 l6 xl3" key={i}>
                      <ResourceCard title={post.title.rendered} type={post.acf.type} content={post.acf.description} url={post.acf.url} price={post.acf.price} />
                    </div>
                  })}
                </Masonry>
              </div>
              <div className="row" id="audio">
                <Masonry>
                  {this.props.data.map(function(post, i) {
                    if (post.acf.type === 'audio') {
                      return <div className="col s12 m12 l6 xl3" key={i}>
                        <ResourceCard title={post.title.rendered} type={post.acf.type} content={post.acf.description} url={post.acf.url} price={post.acf.price} />
                      </div>
                    }
                  })}
                </Masonry>
                </div>
                <div className="row" id="text">

                {this.props.data.map(function(post, i) {
                  if (post.acf.type === 'text') {
                    return <div className="col s12 m12 l6 xl3" key={i}>
                      <ResourceCard title={post.title.rendered} type={post.acf.type} content={post.acf.description} url={post.acf.url} price={post.acf.price} />
                    </div>
                  }
                })}
              </div>
              <div className="row" id="video">

                {this.props.data.map(function(post, i) {
                  if (post.acf.type === 'video') {
                    return <div className="col s12 m12 l6 xl3" key={i}>
                      <ResourceCard title={post.title.rendered} type={post.acf.type} content={post.acf.description} url={post.acf.url} price={post.acf.price} />
                    </div>
                  }
                })}
              </div>

            </div>
          </div>

          <style jsx>{`
            @media only screen and (min-width: 993px) {
              .container-wide {
                width: 85%;
                max-width: 2000px;
              }
                `}
          </style>
        </main>
        <Footer />


        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/js/materialize.min.js"></script>
        <script src="static/js/app.js"></script>

      </div>
    )
  }
}
