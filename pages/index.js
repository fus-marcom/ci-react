import React from 'react'
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import StickyNav from '../components/StickyNav';
import Section from '../components/Section';
import TeamCard from '../components/TeamCard';
import Footer from '../components/Footer';
import Title from '../components/Title';
import TextRevealImageCard from '../components/TextRevealImageCard';
import TextCard from '../components/TextCard';
import Head from 'next/head'

export default class extends React.Component {

  componentDidMount() {
    bgScrollEffect();
    initTabs();
  }

  render () {
    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <Head>
          <meta charset="utf-8" />
          <title>Catechetical Institute - Franciscan University</title>
          <meta name="description" content="A static html template for Franciscan University websites." />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <link href="https://fonts.googleapis.com/css?family=Cinzel" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Tangerine" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Allura" rel="stylesheet" />
          <link href="/static/css/materialize.css" rel="stylesheet" />
          <link href="/static/css/style.css" rel="stylesheet" />

        </Head>
        <Nav />
        <main>
        <Hero />
        <StickyNav />
          <div className="section valign-wrapper black-text white-background-flourish" style={{padding: '60px 0'}}>
           <div className="valign container">
             <div className="row">
               <div className="col s12">
                 <h2 className="light center">Mission</h2>
                 <p className="flow-text">
                   The Franciscan University Catechetical Institute forms Catholics who form others in the faith. Through courses, conferences, advice, and resources, the institute supports clergy, parents, and all those responsible for the work of catechesis and evangelization, as they carry out Christ’s command to make disciples of all nations.
                 </p>
               </div>
             </div>
           </div>
         </div>
         <div className="section valign-wrapper white-text black" id="san-damiano" style={{padding: '0'}}>
           <div className="valign container">
             <div className="row light flow-text">
               <div className="col s12 l6">
               </div>
               <div className="col s12 l6">
                 <blockquote className="flow-text" style={{borderLeft: '5px solid #a61f26'}}>
                   “The definitive aim of catechesis is to put people not only in touch, but in communion and intimacy, with Jesus Christ: only he can lead us to the love of the Father in the Spirit and make us share in the life of the Holy Trinity.”
                   <br />—Saint John Paul II, <span style={{fontStyle: 'italic'}}>Catechesi Tradendae</span>, No. 5
                 </blockquote>
               </div>
             </div>
           </div>
           <style jsx>{`

              #san-damiano {
                min-height: 708px;
              }

               blockquote {
                 font-size: 130%;
               }

               @media and screen (max-width: 1088px) {
                 background-position-x: 3%;
                 background-size: 481px;
               }
            `}</style>
          </div>
          <div className="section banner valign-wrapper red-background-flourish" id="banner">
            <div className="valign container">
              <div className="row center">
                <h2 className="light flourish-white white-text">Formation</h2>
              </div>
              <div className="row light">
                <div className="col s12 m6">
                  <TextRevealImageCard cardTitle="Courses" cardImg="/static/img/st._john_bosco.jpeg" cardContent="
There are many avenues through which catechists can get formal training. Our principal training vehicle, Franciscan at Home, draws together the best of the Franciscan University Catechetics Program, the St. John Bosco Conference, and the latest in online education. There also are opportunities for homeschool families, online graduate studies, and more from Franciscan University of Steubenville." />
                </div>
                <div className="col s12 m6">
                  <TextRevealImageCard cardTitle="Resources" cardImg="/static/img/resources.jpg" cardContent="Franciscan University has produced a prodigious amount of material over the years that can help you be a better catechist. Here you will find videos, audio clips, magazines, books, brochures, and other resources produced by University faculty, conference speakers, and an array of collaborators. We are pleased to make much of it available for free, with a handful of items requiring a subscription or purchase." />
                </div>
              </div>
              <div className="row light">
                <div className="col s12 m6">
                    <TextRevealImageCard cardTitle="Events" cardImg="/static/img/adoration.jpg" cardContent="The annual St. John Bosco Conference for Catechists and Religious Educators at Franciscan University is our premier event, bringing catechetical experts from all over to share their expertise through general sessions and specialized tracks. We also host on-campus academic conferences on catechetical topics, and speak all over." />
                </div>
                <div className="col s12 m6">
                  <TextRevealImageCard cardTitle="Teams" cardImg="/static/img/synaxis.jpeg" cardContent="The Catechetical Institute brings together the world-class faculty of Franciscan University’s Catechetics Program with key collaborators from all levels of ministry. These skilled professionals teach our Franciscan at Home online courses and speak at our St. John Bosco Conference, academic conferences, and other events around the country. Through the Catechetical Institute, they can also assist your diocese, parish, institution, or local community in achieving greater excellence in passing on the faith." />
                </div>
              </div>
            </div>
          </div>
          <div className="section valign-wrapper black-text white-background-flourish">
           <div className="valign container">
             <div className="row">
               <div className="col s12">
                 <ul className="tabs" style={{backgroundColor: 'transparent'}}>
                  <li className="tab col s6"><a href="#">Announcements</a></li>
                  <li className="tab col s6"><a className="active" href="#">Newest Additions</a></li>
                </ul>
               </div>
             </div>
             <div className="row">
               <div className="col s12 m6 l4 xl3">
                 <TextCard />
               </div>
               <div className="col s12 m6 l4 xl3">
                 <TextCard />
               </div>
               <div className="col s12 m6 l4 xl3">
                 <TextCard />
               </div>
               <div className="col s12 m6 l4 xl3">
                 <TextCard />
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
