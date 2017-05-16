import React from 'react'
import Nav from '../components/Nav';
import StickyNav from '../components/StickyNav';
import Footer from '../components/Footer';
import Title from '../components/Title';
import Head from 'next/head'
import 'isomorphic-fetch'

export default class extends React.Component {

//   static async getInitialProps () {
//   const apiUrl = '';
//   const params = '';
//   const res = await fetch(apiUrl + params)
//   const data = await res.json()
//   return { data }
// }

  render () {
    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <Head>
          <meta charset="utf-8" />
          <title>Resources | Catechetical Institute at Franciscan University</title>
          <meta name="description" content="A static html template for Franciscan University websites." />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
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
                    Welcome to the Formation Resources section of our website!  Here on the campus of Franciscan University, the Catechetical Institute has the joyful task of making available to you a tremendous wealth of resources to build you up in your Catholic faith and help you to pass on that faith to other souls.  This section contains an immense array of options for free, for sale, and for subscription to explore for every level of Catholic formation: hundreds of talks from Franciscan University conferences, symposia, and other events; current and past articles from dozens of issues of the Catechetical Review and Sower catechetical journals; outstanding books and ebooks; webisodes and creative evangelizing media; interview series with some of the finest Catholic thinkers, catechetical experts, and creative evangelists in the Church today, and even a selection of musical artists who work regularly with the Institute.  All these resources are arranged in a highly user-friendly searchable format, so that anyone from a busy monsignor to a busy mother can locate useful things.  We invite you to dive in and explore this treasure trove of good things, and we hope it is a blessing to you!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="section banner valign-wrapper red-background-flourish" id="banner">

            <div className="valign container">
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
                <div className="col s12 m6 l4 xl3">
                  <div className="card hoverable">
                    <a href="#" className="resource-modal-trigger">
                      <div className="card-content">
                        <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 0h24v24H0z" fill="none"/>
                          <path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"/>
                        </svg>
                        <span className="resource-type">Video </span>
                        <span className="resource-name">Resource Name</span>
                        <p className="resource-description">I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col s12 m6 l4 xl3">
                  <div className="card hoverable">
                    <a href="#">
                      <div className="card-content">
                        <span className="resource-type">Audio</span>
                        <span className="resource-name">Resource Name</span>
                        <p className="resource-description">I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col s12 m6 l4 xl3">
                  <div className="card hoverable">
                    <a href="#">
                      <div className="card-content">
                        <span className="resource-type">Text</span>
                        <span className="resource-name">Resource Name</span>
                        <p className="resource-description">I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col s12 m6 l4 xl3">
                  <div className="card hoverable">
                    <a href="#">
                      <div className="card-content">
                        <span className="resource-type">Audio</span>
                        <span className="resource-name">Resource Name</span>
                        <p className="resource-description">I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="section valign-wrapper white-background-flourish">
            <div className="valign container">
              <div className="row">
                <div col="s12">
                  <ul className="tabs">
                    <li className="tab col s3"><a href="#">All</a></li>
                    <li className="tab col s3"><a className="active" href="#">Audio</a></li>
                    <li className="tab col s3"><a href="#">Text</a></li>
                    <li className="tab col s3"><a href="#">Video</a></li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col s12 m6 l4 xl3">
                  <div className="card hoverable">
                    <a href="#" className="resource-modal-trigger">
                      <div className="card-content">
                        <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 0h24v24H0z" fill="none"/>
                          <path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"/>
                        </svg>
                        <span className="resource-type">Video </span>
                        <span className="resource-name">Resource Name</span>
                        <p className="resource-description">I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col s12 m6 l4 xl3">
                  <div className="card hoverable">
                    <a href="#">
                      <div className="card-content">
                        <span className="resource-type">Audio</span>
                        <span className="resource-name">Resource Name</span>
                        <p className="resource-description">I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col s12 m6 l4 xl3">
                  <div className="card hoverable">
                    <a href="#">
                      <div className="card-content">
                        <span className="resource-type">Text</span>
                        <span className="resource-name">Resource Name</span>
                        <p className="resource-description">I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col s12 m6 l4 xl3">
                  <div className="card hoverable">
                    <a href="#">
                      <div className="card-content">
                        <span className="resource-type">Audio</span>
                        <span className="resource-name">Resource Name</span>
                        <p className="resource-description">I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col s12 m6 l4 xl3">
                  <div className="card hoverable">
                    <a href="#" className="resource-modal-trigger">
                      <div className="card-content">
                        <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 0h24v24H0z" fill="none"/>
                          <path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"/>
                        </svg>
                        <span className="resource-type">Video </span>
                        <span className="resource-name">Resource Name</span>
                        <p className="resource-description">I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col s12 m6 l4 xl3">
                  <div className="card hoverable">
                    <a href="#">
                      <div className="card-content">
                        <span className="resource-type">Audio</span>
                        <span className="resource-name">Resource Name</span>
                        <p className="resource-description">I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col s12 m6 l4 xl3">
                  <div className="card hoverable">
                    <a href="#">
                      <div className="card-content">
                        <span className="resource-type">Text</span>
                        <span className="resource-name">Resource Name</span>
                        <p className="resource-description">I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col s12 m6 l4 xl3">
                  <div className="card hoverable">
                    <a href="#">
                      <div className="card-content">
                        <span className="resource-type">Audio</span>
                        <span className="resource-name">Resource Name</span>
                        <p className="resource-description">I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col s12 m6 l4 xl3">
                  <div className="card hoverable">
                    <a href="#" className="resource-modal-trigger">
                      <div className="card-content">
                        <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 0h24v24H0z" fill="none"/>
                          <path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"/>
                        </svg>
                        <span className="resource-type">Video </span>
                        <span className="resource-name">Resource Name</span>
                        <p className="resource-description">I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col s12 m6 l4 xl3">
                  <div className="card hoverable">
                    <a href="#">
                      <div className="card-content">
                        <span className="resource-type">Audio</span>
                        <span className="resource-name">Resource Name</span>
                        <p className="resource-description">I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col s12 m6 l4 xl3">
                  <div className="card hoverable">
                    <a href="#">
                      <div className="card-content">
                        <span className="resource-type">Text</span>
                        <span className="resource-name">Resource Name</span>
                        <p className="resource-description">I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col s12 m6 l4 xl3">
                  <div className="card hoverable">
                    <a href="#">
                      <div className="card-content">
                        <span className="resource-type">Audio</span>
                        <span className="resource-name">Resource Name</span>
                        <p className="resource-description">I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                      </div>
                    </a>
                  </div>
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
