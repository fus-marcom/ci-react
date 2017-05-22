import React from 'react'
import Nav from '../components/Nav';
import StickyNav from '../components/StickyNav';
import Footer from '../components/Footer';
import Title from '../components/Title';
import Head from 'next/head'
import 'isomorphic-fetch'

export default class extends React.Component {

  static async getInitialProps () {
    const apiUrl = 'https://wp.catechetics.com/wp-json/wp/v2/';
    const params = 'posts';
    const res = await fetch(apiUrl + params)
    const data = await res.json()
    return { data }
  }

  render () {
    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <Head>
          <meta charset="utf-8" />
          <title>News | Catechetical Institute at Franciscan University</title>
          <meta name="description" content="A static html template for Franciscan University websites." />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <link href="https://fonts.googleapis.com/css?family=Cinzel" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
          <link href="/static/css/materialize.css" rel="stylesheet" />
          <link href="/static/css/style.css" rel="stylesheet" />
        </Head>
        <Nav headerType="interior" />
        <main>
          <StickyNav />
          <Title title="News" imgPath="/static/img/campus-11.jpg" posY="-44vh" />
          <div className="container">
            <div className="section">
              {this.props.data.map(function(post, i) {
                return <div className="row" key={i}>
                  <div className="col s12">
                    <a href={`/news/${post.slug}`}><h2>{post.title.rendered}</h2></a>
                    <div className="flow-text" dangerouslySetInnerHTML={{__html: post.content.rendered}}></div>
                  </div>
                </div>
              })}
            </div>
          </div>
          <div className="section" style={{backgroundColor: '#000'}}>
            <div className="container">
              <div className="row white-text">
                <div className="col s12 m4">
                  <h5>Categories</h5>
                  <ul>
                    <li>Category</li>
                    <li>Category</li>
                    <li>Category</li>
                  </ul>
                </div>
                <div className="col s12 m4">
                  <h5>Tags</h5>
                  <ul>
                    <li>Tag</li>
                    <li>Tag</li>
                    <li>Tag</li>
                  </ul>
                </div>
                <div className="col s12 m4">
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
        </main>
        <Footer />

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/js/materialize.min.js"></script>
        <script src="static/js/app.js"></script>

      </div>
    )
  }
}
