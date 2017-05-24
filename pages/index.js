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
                   The Franciscan University Catechetical Institute forms Catholics who form others in the Faith. Through courses, conferences, advice, and resources, the Institute supports clergy, parents, and all those responsible for the work of catechesis and evangelization, as they carry out Christ’s command to make disciples of all nations.
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
                   “The definitive aim of catechesis is to put people not only in touch, but in communion and intimacy, with Jesus Christ: only He can lead us to the love of the Father in the Spirit and make us share in the life of the of the Holy Trinity.”
                   —<cite>Saint John Paul II, Catechesi Tradendae, No. 5</cite>
                 </blockquote>
               </div>
             </div>
           </div>
          </div>
          <div className="section banner valign-wrapper red-background-flourish" id="banner">
            <div className="valign container">
              <div className="row center">
                <h2 className="light flourish-white white-text">Formation</h2>
              </div>
              <div className="row light">
                <div className="col s12 m6">
                  <TextRevealImageCard />
                </div>
                <div className="col s12 m6">
                  <TextRevealImageCard />
                </div>
              </div>
              <div className="row light">
                <div className="col s12 m6">
                    <TextRevealImageCard />
                </div>
                <div className="col s12 m6">
                  <TextRevealImageCard />
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
