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
          <title>Courses | Catechetical Institute at Franciscan University</title>
          <meta name="description" content="A static html template for Franciscan University websites." />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <link href="https://fonts.googleapis.com/css?family=Cinzel" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
          <link href="/static/css/materialize.css" rel="stylesheet" />
          <link href="/static/css/style.css" rel="stylesheet" />
        </Head>
        <Nav headerType="interior" />
        <main id="courses">
          <StickyNav />
          <Title title="Courses" imgPath="/static/img/campus-6.jpg" posY="-44vh" />
          <div className="section valign-wrapper black-text white-background-flourish">
            <div className="valign container">
              <h4>Our All-Embracing Vision to Serve the Church</h4>
              <div className="row light flow-text">
                <div className="col s12">
                  <p className="flow-text">
                    The Catechetical Institute is part of a larger vision at Franciscan University.  In the silver anniversary year of the Catechism of the Catholic Church, the Institute was launched as part of an all-embracing effort to place the University on a missionary footing.  This website draws together some elements in the University’s ministry of outreach.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="section red-background-flourish white-text">
            <div className="container wide-container">
              <h2 className="light center" style={{marginBottom: '0px'}}>Franciscan at Home</h2>
              <span className="sub-heading center">Online Learning at Your Convenience</span>
              <div className="row valign-wrapper">
                <div className="col s12 m4 order-1">
                  <img className="responsive-img materialboxed" style={{margin:'0 auto'}} src="/static/img/fah-img.jpg" srcSet="/static/img/fah-img.jpg 300w, /static/img/fah-img.jpg 600w, /static/img/fah-img.jpg 800w, /static/img/fah-img.jpg 1200w" sizes="(min-width: 600px) 50vw, 100vw" alt="Speaking the Truth in Love Conference Flyer." title="Speaking the Truth in Love" />
                  <a href="http://www.franciscanathome.com/" title="Franciscan at Home" target="_blank"><button className="btn waves-effect waves-light btn-inverted-white" style={{margin: '0 auto', marginTop: '16px', display: 'block'}}>Learn More</button></a>
                </div>
                <div className="col s12 m8 valign order-2">
                  <p className="flow-text">
                    The Institute’s collection of offerings includes workshops for general catechists, parish catechetical leaders, RCIA directors and teams, Catholic school teachers, youth ministers, and campus ministers. The Institute also offers workshops for priests and deacons, formation for the ministry of parenting, skills development for those in pro-life ministry, and training in first proclamation for anyone engaged in aspects of evangelization and outreach. This makes available a rich and varied corpus of many hundreds of workshops spread across all these ministry areas, which can accessed by individuals, or used in any way a diocese wishes.  Come explore!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="section valign-wrapper black-text white-background-flourish">
            <div className="container wide-container">
              <h2 className="light center" style={{marginBottom: '0px'}}>A Complete Catechetical Formation</h2>
              <div className="row valign-wrapper">
                <div className="col s12 m6 valign order-2">
                  <h3>Catechetics Program</h3>
                  <p className="flow-text">
                    The Catechetics Program at Franciscan University is the largest in the country, and one of the finest in the world.  We offer bachelor’s degrees in catechetics, online and on-campus master’s degrees in Catechetics and Evangelization (MACE), specializations in fields such as youth ministry and music ministry, diverse opportunities for field experience, and individual assistance with field placement.  Our students graduate with the tools necessary to go forth and proclaim the Good News of Jesus Christ in a way that is faithful to the Church and advances the Kingdom of God.
                  </p>
                  <a href="https://www.cvent.com/events/st-john-bosco-conference-july-17-20-2017/registration-fd101066745c42f099a1fade8be9ed1c.aspx?fqp=true%C2%A0" title="Register for the St. John Bosco Conference" target="_blank"><button className="btn waves-effect waves-light">Learn More</button></a>
                </div>
                <div className="col s12 m6 order-1">
                  <img className="responsive-img materialboxed z-depth-1" src="/static/img/port.jpg" srcSet="/static/img/port.jpg 300w, /static/img/port.jpg 600w, /static/img/port.jpg 800w, /static/img/port.jpg 1200w" sizes="(min-width: 600px) 50vw, 100vw" alt="Speaking the Truth in Love Conference Flyer." title="Speaking the Truth in Love" />
                </div>
              </div>
              <div className="row valign-wrapper">
                <div className="col s12 m6 order-1">
                  <img className="responsive-img materialboxed z-depth-1" src="/static/img/fast-track.jpg" srcSet="/static/img/fast-track.jpg 300w, /static/img/fast-track.jpg 600w, /static/img/fast-track.jpg 800w, /static/img/fast-track.jpg 1200w" sizes="(min-width: 600px) 50vw, 100vw" alt="Speaking the Truth in Love Conference Flyer." title="Speaking the Truth in Love" />
                </div>
                <div className="col s12 m6 valign order-2">
                  <h3>Franciscan Fast-track</h3>
                  <p className="flow-text">
                    Courses for high school and homeschool students available for all subjects from math to science, from literature to language, from theology to philosophy, and so much more.  Franciscan University is committed to making available the best Catholic instructors at the most affordable price for the family budget, aimed at an educational formation that explicitly serves the new evangelization.
                  </p>
                  <a href="https://www.cvent.com/events/st-john-bosco-conference-july-17-20-2017/registration-fd101066745c42f099a1fade8be9ed1c.aspx?fqp=true%C2%A0" title="Register for the St. John Bosco Conference" target="_blank"><button className="btn waves-effect waves-light">Learn More</button></a>
                </div>
              </div>
              <div className="row valign-wrapper">
                <div className="col s12 m6 valign order-2">
                  <h3>Online Degree Programs</h3>
                  <p className="flow-text">
                    Whether you are right out of high school, right in the middle of your life, or right about ready to try a new direction or a next step, Franciscan University has programs that meet you where God has you.  Franciscan offers online associate’s and master’s degrees in theology, philosophy, education, and catechetics.  On campus, we also offer a full spread of over forty undergraduate majors, and seven master’s programs. Our graduates are prepared to “cast out into the deep” and bring the light of Christ to the ends of the earth.
                  </p>
                  <a href="https://www.cvent.com/events/st-john-bosco-conference-july-17-20-2017/registration-fd101066745c42f099a1fade8be9ed1c.aspx?fqp=true%C2%A0" title="Register for the St. John Bosco Conference" target="_blank"><button className="btn waves-effect waves-light">Learn More</button></a>
                </div>
                <div className="col s12 m6 order-1">
                  <img className="responsive-img materialboxed" src="/static/img/degree.jpg" srcSet="/static/img/degree.jpg 300w, /static/img/degree.jpg 600w, /static/img/degree.jpg 800w, /static/img/degree.jpg 1200w" sizes="(min-width: 600px) 50vw, 100vw" alt="Speaking the Truth in Love Conference Flyer." title="Speaking the Truth in Love" />
                </div>
              </div>
              <div className="row valign-wrapper">
                <div className="col s12 m6 order-1">
                  <img className="responsive-img materialboxed" src="/static/img/pdp.jpg" srcSet="/static/img/pdp.jpg 300w, /static/img/pdp.jpg 600w, /static/img/pdp.jpg 800w, /static/img/pdp.jpg 1200w" sizes="(min-width: 600px) 50vw, 100vw" alt="Speaking the Truth in Love Conference Flyer." title="Speaking the Truth in Love" />
                </div>
                <div className="col s12 m6 valign order-2">
                  <h3>Priestly Vocational Formation</h3>
                  <p className="flow-text">
                    The Priestly Discernment Program (PDP), part of the bachelor’s degree experience at the University, helps men to grow in holiness and listen for the “still, small voice” of a vocation to the priesthood or religious life.  The University is also seeking to develop an Institute for Priestly Renewal (IPR), a summer residency program for seminarians and priests that would reach out to assist diocesan bishops and religious superiors to provide a high-quality curriculum for clergy desiring superlative, efficient, and pragmatic formation for their leadership roles in the new evangelization.
                  </p>
                  <a href="https://www.cvent.com/events/st-john-bosco-conference-july-17-20-2017/registration-fd101066745c42f099a1fade8be9ed1c.aspx?fqp=true%C2%A0" title="Register for the St. John Bosco Conference" target="_blank"><button className="btn waves-effect waves-light">Learn More</button></a>
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
