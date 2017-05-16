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
          <title>About | Catechetical Institute at Franciscan University</title>
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
          <Title title="About" imgPath="/static/img/campus-11.jpg" posY="-44vh" />
          <div className="section white-background-flourish">
            <div className="container">
              <div className="row valign-wrapper">
                <div className="col s12 valign">
                  <p className="flow-text">
                    The Institute serves the key catechists in any situation -- this means priests, deacons, parents, those in lay ecclesial ministry.  And it serves these key catechists through formation workshops not only in already-defined areas of ministry training, but also in no-less critical areas for the work of successfully evangelizing and discipling souls:  team building, speaking skills, basic evangelization skills, mentoring, spiritual guidance, counseling, spiritual combat, deliverance, healing, vocational discernment, and so on.  Workshops on these and many other topics are offered by the Institute, designed not for niche professionals in each of these fields, but for parents, catechists, school teachers, parish clergy -- the people who first encounter souls who need understanding and gentle ministers, good advice, good listeners, and leaders who can authentically accompany others on the spiritual journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="section red-background-flourish white-text">
            <div className="container wide-container">
              <div className="row valign-wrapper">
                <div className="col s12 m6 valign order-2">
                  <p className="flow-text">
                    Franciscan University’s priority in founding the Catechetical Institute is specifically to serve diocesan bishops, and assist them in forming those who can form others in the Catholic faith, from priests to parents to paid catechists to generous volunteers.  Our work as an Institute is to encourage in the field a deep confidence in the Church’s way of effective catechetical formation, by offering a substantive, richly diverse, and engaging supporting role to help the local work happen well.  All of the Catechetical Institute’s online formation is designed to support and enhance the formation that is being undertaken locally and personally, in parishes, families, schools and communities.  Franciscan University is guided by a vision that sees catechetical formation as an act of trust in people.  The Institute’s approach is based on person-to-person engagement over extended periods of formation, using carefully-designed online workshops.
                  </p>
                </div>
                <div className="col s12 m6 order-1">
                  <img className="responsive-img materialboxed" src="/static/img/father-malavolti.jpg" srcSet="img//static/img/father-malavolti.jpg 300w, /static/img/father-malavolti.jpg 600w, /static/img/father-malavolti.jpg 800w, /static/img/father-malavolti.jpg 1200w" sizes="(min-width: 600px) 50vw, 100vw" alt="Diners eating at a restaurant." title="Restaurant" />
                </div>
              </div>
            </div>
          </div>
          <div className="section white-background-flourish">
            <div className="container wide-container">
              <div className="row valign-wrapper">
                <div className="col s12 m6 order-1">
                  <img className="responsive-img materialboxed" src="/static/img/petroc-about.jpg" srcSet="/static/img/petroc-about.jpg 300w, /static/img/petroc-about.jpg 600w, /static/img/petroc-about.jpg 800w, /static/img/petroc-about.jpg 1200w" sizes="(min-width: 600px) 50vw, 100vw" alt="Crowd at an event." title="Event" />
                </div>
                <div className="col s12 m6 valign order-2">
                  <p className="flow-text">
                    The Institute serves the key catechists in any situation -- this means priests, deacons, parents, those in lay ecclesial ministry.  And it serves these key catechists through formation workshops not only in already-defined areas of ministry training, but also in no-less critical areas for the work of successfully evangelizing and discipling souls:  team building, speaking skills, basic evangelization skills, mentoring, spiritual guidance, counseling, spiritual combat, deliverance, healing, vocational discernment, and so on.  Workshops on these and many other topics are offered by the Institute, designed not for niche professionals in each of these fields, but for parents, catechists, school teachers, parish clergy -- the people who first encounter souls who need understanding and gentle ministers, good advice, good listeners, and leaders who can authentically accompany others on the spiritual journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="section red-background-flourish banner white-text">
            <div className="container wide-container">
              <div className="row valign-wrapper">
                <div className="col s12 m6 valign order-2">
                  <p className="flow-text">
                    We welcome you to explore our website, which provides access to these formation workshops, as well as a rich array of catechetical resources in all forms of media, information about outstanding events and conference opportunities, and an introduction to the many skilled leaders, presenters, staff, and mentors that work together to bring you Franciscan University's best effort to serve the Church in the new evangelization.
                  </p>
                </div>
                <div className="col s12 m6 order-1">
                  <img className="responsive-img materialboxed" src="/static/img/keimig-about.jpg" srcSet="/static/img/keimig-about.jpg 300w, /static/img/keimig-about.jpg 600w, /static/img/keimig-about.jpg 800w, /static/img/keimig-about.jpg 1200w" sizes="(min-width: 600px) 50vw, 100vw" alt="Diners eating at a restaurant." title="Restaurant" />
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
                      <a href="#" title="Steubenville Conferences" target="_blank">
                        <img src="/static/img/fc-logo.jpg" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col s6 m3">
                  <div className="card hoverable" style={{cursor: 'pointer'}}>
                    <div className="card-image">
                      <a href="#" title="Language and Catechetical Institute" target="_blank">
                        <img src="/static/img/lci-logo.png" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col s6 m3">
                  <div className="card hoverable" style={{cursor: 'pointer'}}>
                    <div className="card-image">
                      <a href="#" title="Life Teen" target="_blank">
                        <img src="/static/img/lt-logo.jpg" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col s6 m3">
                  <div className="card hoverable" style={{cursor: 'pointer'}}>
                    <div className="card-image">
                      <a href="#" title="St. Paul Center for Biblical Theology" target="_blank">
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
                      <a href="#" title="Inscape" target="_blank">
                        <img src="/static/img/inscape-logo.png" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col s6 m3">
                  <div className="card hoverable" style={{cursor: 'pointer'}}>
                    <div className="card-image">
                      <a href="#" title="Our Sunday Visitor" target="_blank">
                        <img src="/static/img/osv-logo.png" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col s6 m3">
                  <div className="card hoverable" style={{cursor: 'pointer'}}>
                    <div className="card-image">
                      <a href="#" title="Homeschool Connections" target="_blank">
                        <img src="/static/img/hsc-logo.png" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col s6 m3">
                  <div className="card hoverable" style={{cursor: 'pointer'}}>
                    <div className="card-image">
                      <a href="#" title="The Association for Catechumenal Ministry" target="_blank">
                        <img src="/static/img/acm-logo.jpg" />
                                      </a>
                                    </div>
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
