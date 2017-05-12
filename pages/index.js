import React from 'react'
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import StickyNav from '../components/StickyNav';
import Section from '../components/Section';
import TeamCard from '../components/TeamCard';
import Footer from '../components/Footer';
import Title from '../components/Title';
import TextRevealImageCard from '../components/TextRevealImageCard';
import Head from 'next/head'

export default class extends React.Component {

  render () {
    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <Head>
          <meta charset="utf-8" />
          <title>Catechetical Institute - Franciscan University</title>
          <meta name="description" content="A static html template for Franciscan University websites." />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <link href="https://fonts.googleapis.com/css?family=Cinzel" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Tangerine" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
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
                 <h2 className="light center">Building the Church</h2>
               </div>
             </div>
             <div className="row hide-on-med-and-down">
               <div className="col s12 m4">
                 <div className="icon-block">
                   <h4 className="light">Conferences</h4>
                   <p className="flow-text">Franciscan University offers unique and inspiring conference experiences.</p>
                 </div>
               </div>
               <div className="col s12 m4">
                 <div className="icon-block">
                   <h4 className="light">Workshops</h4>
                   <p className="flow-text">Explore our rich and varied corpus of many hundreds of workshops for all areas of ministry with <a href="http://www.franciscanathome.com/" title="Franciscan at Home" target="_blank">Franciscan at Home</a>.</p>
                 </div>
               </div>
               <div className="col s12 m4">
                 <div className="icon-block">
                   <h4 className="light">Magazine</h4>
                   <p className="flow-text">Take a look at the latest issue of our long-running magazine,
                    <a href="https://review.catechetics.com/" title="The Catechetical Review" target="_blank">The Catechetical Review</a>.</p>
                 </div>
               </div>
             </div>
           </div>
         </div>
         <div className="section valign-wrapper white-text black" id="san-damiano">
           <div className="valign container">
             <div className="row light flow-text">
               <div className="col s12 m6">
               </div>
               <div className="col s12 m6">
                 <h2 className="light">Mission</h2>
                 <p className="flow-text">
                   The Franciscan University Catechetical Institute serves Christ in His Church by forming those who form others. It supports clergy, parents, and all those responsible for the work of evangelization and catechesis through the provision of courses, conferences, advice, and resources. In fidelity to the primary sources of faith and the pastoral wisdom of the Church's magisterium, the Institute's expert faculty and experienced field mentors seek to be guided by the Holy Spirit as they make these riches available for all whom Christ is gathering into one by his love, making disciples of all nations.
                 </p>
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

        </main>
        <Footer />


        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/js/materialize.min.js"></script>
        <script src="static/js/app.js"></script>

      </div>
    )
  }
}
