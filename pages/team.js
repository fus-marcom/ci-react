import React from 'react'
import Nav from '../components/Nav';
import StickyNav from '../components/StickyNav';
import TeamCard from '../components/TeamCard';
import Footer from '../components/Footer';
import Title from '../components/Title';
import Head from 'next/head'
import 'isomorphic-fetch'

export default class extends React.Component {

  static async getInitialProps () {
    const apiUrl = 'https://wp.catechetics.com/wp-json/wp/v2/';
    const params = 'team-member?per_page=100&filter[order]=ASC&fields=title,slug,content,better_featured_image,acf';
    const res = await fetch(apiUrl + params)
    const data = await res.json()
    return { data }
  }

  componentDidMount() {
    teamModalInit();
  }

  render () {
    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <Head>
          <meta charset="utf-8" />
          <title>Team | Catechetical Institute at Franciscan University</title>
          <meta name="description" content="A static html template for Franciscan University websites." />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <link href="https://fonts.googleapis.com/css?family=Cinzel" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
          <link href="/static/css/materialize.css" rel="stylesheet" />
          <link href="/static/css/style.css" rel="stylesheet" />
        </Head>
        <Nav headerType="interior" />
        <main id="team">
          <StickyNav />
          <Title title="Team" imgPath="/static/img/campus-7.jpg" posY="-44vh" />
          <div className="container">
            <div className="section">
              <div className="row valign-wrapper">
                <div className="col s12 valign">
                  <p className="flow-text">
                    Franciscan University of Steubenville houses the largest Catechetics Program in the United States, with more catechetics students and more catechetics faculty members than any other college or university.  Our world-class faculty of catechists and theologians have taught, presented, and worked in universities, schools, and parishes around the world.  More than solely academicians, our faculty are also practitioners, who bring decades of experience in youth ministry, catechetical leadership, and faith formation.  To facilitate offering assistance to dioceses, this section of our website lists the members of our catechetics faculty, along with a number of key collaborators in the Institute’s work, from within the University and in the field as professionals at all levels of ministry.  All of those listed here are proven and skilled at training others towards greater levels of excellence in the work of passing on the faith.  We welcome invitations to assist dioceses and other Catholic institutions in training and forming those who form others.  We greatly value those called to pass on the faith in local communities:  in school classrooms, in adult formation settings, in sacramental programs, in homes.  Our goal is to foster growth, build competence, and inspire confidence in those called to serve and teach their neighbors, families, and fellow parishioners.
                  </p>
                  <p className="flow-text">
                    If you'd like to contact us to invite one or a team of our presenters or faculty, please email us at: CI@franciscan.edu
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container team-card-container">
            <div className="section black-text open">
              <div className="row light flow-text title-row">
                <div className="col s12">
                  <h2 className="light">
                    <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                      <path d="M0 0h24v24H0z" fill="none"/>
                    </svg>Franciscan University Catechetics Faculty and Staff</h2>
                </div>
              </div>
              <div className="row light">
                {this.props.data.map(function(post, i) {
                  if (post.acf.category[0] === 'fus-staff') {
                    return <div className="col s12 l6" key={i}>
                        <TeamCard name={post.acf.name} title={post.acf.title} org={post.acf.organization} cat={post.acf.category} imgUrl={post.better_featured_image !== null ? post.better_featured_image.source_url : ''} content={post.content.rendered} slug={post.slug} />
                    </div>
                  }
                })}
              </div>
              </div>

            <div className="section black-text">
              <div className="row light flow-text title-row">
                <div className="col s12">
                  <h2 className="light"><svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                    <path d="M0 0h24v24H0z" fill="none"/>
                  </svg>St. John Bosco Conference Track Managers and Online Workshop Presenters</h2>
                </div>
              </div>
              <div className="row light">
                {this.props.data.map(function(post, i) {
                  if (post.acf.category[0] === 'conf-staff') {
                    return <div className="col s12 l6" key={i}>
                        <TeamCard name={post.acf.name} title={post.acf.title} org={post.acf.organization} cat={post.acf.category} imgUrl={post.better_featured_image !== null ? post.better_featured_image.source_url : ''} content={post.content.rendered} slug={post.slug} />
                    </div>
                  }
                })}
              </div>
            </div>

            <div className="section black-text">
              <div className="row light flow-text title-row">
                <div className="col s12">
                  <h2 className="light"><svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                    <path d="M0 0h24v24H0z" fill="none"/>
                  </svg>Catechetical Institute Staff</h2>
                </div>
              </div>
              <div className="row light">
                {this.props.data.map(function(post, i) {
                  if (post.acf.category[0] === 'ci-staff') {
                    return <div className="col s12 l6" key={i}>
                        <TeamCard name={post.acf.name} title={post.acf.title} org={post.acf.organization} cat={post.acf.category} imgUrl={post.better_featured_image !== null ? post.better_featured_image.source_url : ''} content={post.content.rendered} slug={post.slug} />
                    </div>
                  }
                })}
              </div>
            </div>

            <div className="section black-text">

              <div className="row light flow-text title-row">
                <div className="col s12">
                  <h2 className="light">
                    <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                      <path d="M0 0h24v24H0z" fill="none"/>
                    </svg>Catechetical Institute Mentors</h2>
                </div>
              </div>
              <div className="row light">
                {this.props.data.map(function(post, i) {
                  if (post.acf.category[0] === 'ci-mentors') {
                    return <div className="col s12 l6" key={i}>
                        <TeamCard name={post.acf.name} title={post.acf.title} org={post.acf.organization} cat={post.acf.category} imgUrl={post.better_featured_image !== null ? post.better_featured_image.source_url : ''} content={post.content.rendered} slug={post.slug} />
                    </div>
                  }
                })}
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
