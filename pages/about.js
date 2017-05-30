import React from 'react'
import Nav from '../components/Nav';
import StickyNav from '../components/StickyNav';
import Footer from '../components/Footer';
import Title from '../components/Title';
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

//   static async getInitialProps () {
//   const apiUrl = '';
//   const params = '';
//   const res = await fetch(apiUrl + params)
//   const data = await res.json()
//   return { data }
// }

componentDidMount () {
    initGA()
    logPageView()
  }

  render () {
    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <Head>
          <meta charset="utf-8" />
          <title>About | Catechetical Institute at Franciscan University</title>
          <meta name="description" content="A static html template for Franciscan University websites." />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <link href="https://fonts.googleapis.com/css?family=Cinzel" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
          <link href="/static/css/materialize.css" rel="stylesheet" />
          <link href="/static/css/style.css" rel="stylesheet" />
        </Head>
        <Nav headerType="interior" />
        <main id="about">
          <StickyNav />
          <Title title="About" imgPath="/static/img/campus-11.jpg" posY="-44vh" />
          <div className="section white-background-flourish">
            <div className="container">
              <div className="row valign-wrapper">
                <div className="col s12 valign">
                  <p className="flow-text">
                    The Catechetical Institute at Franciscan University exists to train and support the key catechists in any situation—priests, deacons, parents, or laity, whether professional or volunteer. Through conferences, online workshops, videos, audio, personal mentorship, and a wealth of resources produced by Franciscan University, all involved in the work of catechesis will find new ideas, new approaches, new techniques, and a new confidence to do the work of catechesis.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="section red-background-flourish white-text">
            <div className="container wide-container">
              <div className="row valign-wrapper">
                <div className="col s12">
                  <p className="flow-text">
                    Officially launched in 2016, the Franciscan University Catechetical Institute seeks to serve Christ and his Church by forming those Catholics entrusted with the formation of others.  This includes priests, deacons, and parents, as well as lay ecclesial ministers, teachers, religious, and parish catechists.
                  </p>
                  <p className="flow-text">
                    Through conferences, online courses, personal support, and new catechetical resources, we make the riches of the Catholic faith more available and accessible to clergy and lay catechists alike.
                  </p>
                  <p className="flow-text">
                    To this end, our expert faculty and experienced lay mentors work in close partnerships with both dioceses and catechists, offering individualized formation tools designed to meet a variety of catechetical needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="section white-background-flourish">
            <div className="container wide-container">
              <div className="row center">
                <div className="col s12">
                  <h2>An Online Hub for Local Learning</h2>
                </div>
              </div>
              <div className="row valign-wrapper">
                <div className="col s12 m6 order-1">
                  <img className="responsive-img" src="/static/img/online-learning-700w.jpg" alt="A woman sitting at a table working on a computer." title="Online Learning" />
                </div>
                <div className="col s12 m6 valign order-2">
                  <p className="flow-text">
                    The cornerstone of the institute’s work is our online library of video-based catechetical workshops. Designed to complement and supplement diocesan formation and continuing education programs already in place, the Catechetical Institute’s online programming makes the best of Franciscan University available to dioceses everywhere.
                  </p>
                  <p className="flow-text">
                    It accomplishes this by offering:
                    <ul className="disc-list flow-text">
                      <li>catechist formation tools that are wide in their reach, designed to help all those Catholics responsible for helping others, not just catechists.</li>
                      <li>a broad range of workshops, making use of Franciscan’s many experts in fields outside of catechetics and theology: counseling, education, life sciences, communication, and more. </li>
                      <li>a degree of formation that goes deep, exploring topics you won’t find in other </li>
                      <li>online formation programs, including basic evangelization skills, mentoring, spiritual guidance, team building, and many others.</li>
                    </ul>
                  </p>
                  <p className="flow-text">
                    In the emerging field of online formation, Franciscan University’s Catechetical Institute stands apart.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="section banner white-text" style={{backgroundColor: '#000', marginBottom: '50px'}}>
            <div className="container wide-container">
              <div className="row valign-wrapper">
                <div className="col s12 m6 valign order-2">
                  <blockquote className="flow-text" style={{borderLeft: '5px solid #a61f26'}}>
                    “Being a Christian is not the result of an ethical choice or a lofty idea, but the encounter with an event, a person, which gives life a new horizon and a decisive direction.”
	                   —Pope Benedict XVI, <span style={{fontStyle: 'italic'}}>Deus Caritas Est</span>, No. 1
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
          <div className="section white-background-flourish banner">
            <div className="container wide-container">
              <div className="row">
                <div className="col s12 m4">
                  <div className="card" style={{height: '419px', maxHeight: '419px'}}>
                    <div className="card-image">
                      <img src="/static/img/fr-nathan.jpg" srcSet="/static/img/fr-nathan.jpg 300w, /static/img/fr-nathan.jpg 600w, /static/img/fr-nathan.jpg 800w, /static/img/fr-nathan.jpg 1200w" sizes="(min-width: 600px) 50vw, 100vw" alt="Diners eating at a restaurant." title="Restaurant" />
                    </div>
                    <div className="card-content">
                      <span className="caption caption-name card-title">Fr. Nathan Malavolti, TOR</span>
                      <span className="caption caption-title">Vice President of Pastoral Care and Evangelization</span>
                      <span className="caption caption-org">Franciscan University</span>
                    </div>
                  </div>
                </div>
                <div className="col s12 m4">
                  <div className="card" style={{height: '419px', maxHeight: '419px'}}>
                    <div className="card-image">
                      <img src="/static/img/petroc-about.jpg" srcSet="/static/img/petroc-about.jpg 300w, /static/img/petroc-about.jpg 600w, /static/img/petroc-about.jpg 800w, /static/img/petroc-about.jpg 1200w" sizes="(min-width: 600px) 50vw, 100vw" alt="Diners eating at a restaurant." title="Restaurant" />
                    </div>
                    <div className="card-content">
                      <span className="caption caption-name card-title">Petroc Willey, STL, PhD</span>
                      <span className="caption caption-title">Director</span>
                      <span className="caption caption-org">Catechetical Institute and Office of Catechetics</span>
                    </div>
                  </div>
                </div>
                <div className="col s12 m4">
                  <div className="card" style={{height: '419px', maxHeight: '419px'}}>
                    <div className="card-image">
                      <img src="/static/img/keimig-about.jpg" srcSet="/static/img/keimig-about.jpg 300w, /static/img/keimig-about.jpg 600w, /static/img/keimig-about.jpg 800w, /static/img/keimig-about.jpg 1200w" sizes="(min-width: 600px) 50vw, 100vw" alt="Diners eating at a restaurant." title="Restaurant" />
                    </div>
                    <div className="card-content">
                      <span className="caption caption-name card-title">William Keimig, MPM, MA</span>
                      <span className="caption caption-title">Assistant Director</span>
                      <span className="caption caption-org">Catechetical Institute</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section valign-wrapper black-text white-background-flourish">
            <div className="valign container">
              <div className="row center">
                <h2 className="light flourish-white">Collaborators</h2>
              </div>
              <div className="row light flow-text">
                <div className="col s6 m3">
                  <div className="card hoverable" style={{cursor: 'pointer'}}>
                    <div className="card-image">
                      <a href="https://steubenvilleconferences.com/" title="Steubenville Conferences" target="_blank">
                        <img src="/static/img/fc-logo.jpg" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col s6 m3">
                  <div className="card hoverable" style={{cursor: 'pointer'}}>
                    <div className="card-image">
                      <a href="https://lciaustria.org/" title="Language and Catechetical Institute" target="_blank">
                        <img src="/static/img/lci-logo.png" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col s6 m3">
                  <div className="card hoverable" style={{cursor: 'pointer'}}>
                    <div className="card-image">
                      <a href="http://lifeteen.com/" title="Life Teen" target="_blank">
                        <img src="/static/img/lt-logo.jpg" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col s6 m3">
                  <div className="card hoverable" style={{cursor: 'pointer'}}>
                    <div className="card-image">
                      <a href="https://stpaulcenter.com/" title="St. Paul Center for Biblical Theology" target="_blank">
                        <img src="/static/img/spc-logo.png" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row light flow-text">
                <div className="col s6 m3">
                  <div className="card hoverable" style={{cursor: 'pointer'}}>
                    <div className="card-image">
                      <a href="https://www.inscapevocations.com/" title="Inscape" target="_blank">
                        <img src="/static/img/inscape-logo.jpg" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col s6 m3">
                  <div className="card hoverable" style={{cursor: 'pointer'}}>
                    <div className="card-image">
                      <a href="https://www.osv.com/default.aspx" title="Our Sunday Visitor" target="_blank">
                        <img src="/static/img/osv-logo.png" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col s6 m3">
                  <div className="card hoverable" style={{cursor: 'pointer'}}>
                    <div className="card-image">
                      <a href="https://homeschoolconnectionsonline.com/" title="Homeschool Connections" target="_blank">
                        <img src="/static/img/hsc-logo.png" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col s6 m3">
                  <div className="card hoverable" style={{cursor: 'pointer'}}>
                    <div className="card-image">
                      <a href="https://acmrcia.org/" title="The Association for Catechumenal Ministry" target="_blank">
                        <img src="/static/img/acm-logo.jpg" />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <style jsx>{`
                              span.caption {
                                display: block;
                              }

                              main div ul.disc-list li{
                                list-style-type: disc !important;
                                margin-left: 35px !important;
                              }

                                `}</style>
        </main>
        <Footer />


        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/js/materialize.min.js"></script>
        <script src="static/js/app.js"></script>

      </div>
    )
  }
}
