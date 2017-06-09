import React from 'react'
import Nav from '../components/Nav';
import StickyNav from '../components/StickyNav';
import Footer from '../components/Footer';
import Title from '../components/Title';
import Head from 'next/head'
import 'isomorphic-fetch'
import { logPageView } from '../utils/analytics'

export default class extends React.Component {

//   static async getInitialProps () {
//   const apiUrl = '';
//   const params = '';
//   const res = await fetch(apiUrl + params)
//   const data = await res.json()
//   return { data }
// }

componentDidMount() {
  initCourseSections();
  logPageView()
}

  render () {
    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <Head>
          <meta charset="utf-8" />
          <title>Courses | Catechetical Institute at Franciscan University</title>
          <meta name="description" content="There are many avenues through which catechists can get formal training. Our principal training vehicle, Franciscan at Home, draws together the best of the Franciscan University Catechetics Program, the St. John Bosco Conference, and the latest in online education. There also are opportunities for homeschool families, online graduate studies, and more from Franciscan University of Steubenville." />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <link rel="shortcut icon" href="/static/favicon.ico" />
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
                    There are many avenues through which catechists can get formal training. Our principal training vehicle, Franciscan at Home, draws together the best of the Franciscan University Catechetics Program, the St. John Bosco Conference, and the latest in online education. There also are opportunities for homeschool families, online graduate studies, and more from Franciscan University of Steubenville.
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
                <div className="col s12 m4 order-1 center">
                  <img className="responsive-img" style={{margin:'0 auto', width: '400px'}} src="/static/img/fah-img.jpg" alt="Speaking the Truth in Love Conference Flyer." title="Speaking the Truth in Love" />
                  <a href="http://en.calameo.com/read/00005685416f121522341" title="Franciscan at Home" target="_blank"><button className="btn waves-effect waves-light btn-inverted-white" style={{margin: '0 auto', marginTop: '16px', display: 'block'}}>Learn More</button></a>
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
              <h2 className="light center" style={{marginBottom: '0px'}}>Ministry Tracks</h2>
              <div className="row">
                <div className="col s12">
                  <p className="flow-text">
                    The Catechetical Institute has developed 12 distinct ministry tracks to meet a variety of catechetical needs. These tracks,
                    however, are merely options. Dioceses are free to select any workshops from any track to add to any aspect of its existing
                    certification programs, continuing education requirements, or adult formation
                    outreach. Dioceses are also free to create their own track from the workshops
                    offered within various pre-designed tracks.
                  </p>
                </div>
              </div>
              {/*}<div className="sub-section open">
                <h3><svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                  <path d="M0 0h24v24H0z" fill="none"/>
                </svg>Priestly Renewal (PR) Track</h3>
                <div className="row valign-wrapper">
                  <div className="col s12">
                    <p className="flow-text">
                      Franciscan University has recently created an Institute for Priestly Renewal (IPR) that assists diocesan bishops and religious superiors as they work to form their priests and seminarians for leadership roles in the new evangelization. The courses and resources available through the IPR seek to provide seminarians and priests with deeper formation for missionary outreach. They also aim to help them create a parish culture of discipleship and outward-oriented evangelization. In partnership with the IPR, the Catechetical Institute helps seminarians and priests understand authentically Catholic approaches to outreach and inculturation, as well as communicate the kerygma effectively with strong follow-up.
                    </p>
                    <p className="flow-text">
                      By using a summertime on-campus format, the design of the IPR closely accords with the timeframes and structure used by the Institute for Priestly Formation (IPF) of Omaha, Nebraska. The formation IPR offers is not redundant with IPF’s goals, but instead complements its outstanding work in spiritual formation, spiritual direction, and the interior life of clergy. The format used by Franciscan’s IPR draws from the catechumenal model (the three-fold liturgical, catechetical, pastoral pattern), and depends upon expertise from many directions within and outside of the Franciscan University family. The most critical human component of this structure is its dependence on priestly mentorship. It is a “like-to-like” learning model, relying on bringing in priests in the field with reputations for excellence in areas the IPR addresses.

                    </p>
                    <p className="flow-text">
                      To support the IPR’s summertime on-campus work, the Catechetical Institute offers
                      online workshops that may be used in whatever way a bishop deems best as
                      preamble or follow-up to a summer experience, or simply as enrichment for clergy.
                    </p>
                  </div>
                </div>
              </div> */}
            <div className="sub-section open">
              <h3><svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
              </svg>Ministry of Parenting (MP) Track</h3>
              <div className="row valign-wrapper">
                <div className="col s12">
                  <p className="flow-text">
                    In his landmark document on family life, <span style={{fontStyle: 'italic'}}>Familiaris Consortio</span>, Pope St. John Paul II
                    stated:
                  </p>
                  <blockquote className="flow-text" style={{borderLeft: '5px solid #000'}}>
                    “The sacrament of marriage gives to the educational role the dignity and

                    vocation of being really and truly a ‘ministry’ of the Church at the service of

                    the building up of her members. So great and splendid is the educational

                    ministry of Christian parents that St. Thomas has no hesitation in comparing

                    it with the ministry of priests: ‘Some only propagate and guard spiritual life

                    by a spiritual ministry: this is the role of the sacrament of orders; others do

                    this for both corporal and spiritual life, and this is brought about by the

                    sacrament of marriage, by which a man and a woman join in order to beget

                    offspring and bring them up to worship God.’”
                  </blockquote>
                  <p className="flow-text">
                    Working with this understanding, the Catechetical Institute views parenting as the

                    critical catechetical role in the Church. Our desire is to help families in our

                    challenging modern culture see God’s plan for the domestic church and the school of

                    holiness it creates as the decisive element in bringing about a culture of life. The

                    workshops in this track are not intended to result in any certification, but instead

                    aim at a far more fundamental end: forming adults who know how to live a

                    missionary life in marriage and judge nothing in life as great as the work of parenting

                    toward sainthood and striving for spousal sanctity. To foster this, a great variety of

                    pragmatic and imaginative workshops are offered by the Catechetical Institute as

                    electives in every track and collected together in this track.
                  </p>
                </div>
              </div>
            </div>
            <div className="sub-section">
              <h3><svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
              </svg>Catechist (CT) Track</h3>
              <div className="row valign-wrapper">
                <div className="col s12">
                  <p className="flow-text">
                    Directed to any person engaged in teaching ministries at any level, this three-part

                    comprehensive program offers spiritual, methodological, philosophical, and

                    doctrinal topics essential to the teaching of the Catholic faith. Believing that the most

                    significant factor in the catechetical endeavor is the individual catechist passing on

                    the witness of a lived faith, this track aims to complement basic diocesan catechist

                    certification. It does this by enriching in-diocese teaching with workshops designed

                    to: 1) Take catechists to the next step in formation in key areas; 2) Address target

                    areas needing strengthening in our current cultural context; and 3) Enable catechists

                    to continue growing their skills and understanding in the years following completion

                    of diocesan certification.
                  </p>
                </div>
              </div>
            </div>
            <div className="sub-section">
              <h3><svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
              </svg>Parish Catechetical Leader (PCL) Track</h3>
              <div className="row valign-wrapper">
                <div className="col s12">
                  <p className="flow-text">
                    This all-encompassing three-part series of workshops addresses the spiritual,

                    catechetical, relational, and philosophical topics essential to leadership in parish

                    catechetical programs. Whether a catechetical leader is tasked with ministry to

                    adults, teens, children, or all three, the workshops in this track cover vital

                    administrative skills, including recruitment and training of catechists, planning and

                    evaluation of curriculum and programs, and managing pastoral and parental

                    relationships. Additionally, this track addresses areas such as evangelization and its

                    link to catechesis, catechetical program organization and assessment, working with

                    people from diverse cultural backgrounds, serving those with special needs, and

                    fostering the vocational discernment and spiritual formation of others.
                  </p>
                </div>
              </div>
            </div>
            <div className="sub-section">
              <h3><svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
              </svg>Catechumenal Ministry (RCIA) Track</h3>
              <div className="row valign-wrapper">
                <div className="col s12">
                  <p className="flow-text">
                    In cooperation with the Association for Catechumenal Ministry (ACM), this wide-

                    ranging three-part track provides preparation for all those involved in assisting the

                    conversion process of newcomers to the Catholic faith. It does this by focusing on

                    the liturgical, catechetical, and pastoral elements essential to the evangelization and

                    formation of those investigating and approaching our Church.
                  </p>
                  <p className="flow-text">
                    While presenting a systematic doctrinal foundation taken directly from the

                    Catechism of the Catholic Church, this track also includes a deep exploration of

                    Scripture’s role in the conversion process, the centrality of the liturgical rites, the

                    nature of teaching for conversion, the indispensable work of an RCIA team, the role

                    of sponsors and godparents, the power of a balanced clergy-laity collaboration, and

                    the importance of each of the stages of the catechumenal process. Workshops on

                    evangelism, canon law, and the catechumenate for children and adolescents are also

                    offered.
                  </p>
                </div>
              </div>
            </div>
            <div className="sub-section">
              <h3><svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
              </svg>Catholic Schools (CS) Track</h3>
              <div className="row valign-wrapper">
                <div className="col s12">
                  <p className="flow-text">
                    This series of workshops is aimed at assisting elementary teachers, high school

                    teachers, and administrators understand the Catholic faith better and pass it on to

                    students and their families. This track is designed to serve the real-world needs of

                    teachers by: 1) Addressing practical and methodological classroom issues stemming

                    from modern familial and cultural contexts; 2) Assessing ways to handle common

                    doubts and questions among children and teens; and 3) Exploring how a classroom

                    experience can be not only mind-growing, but truly soul-forming.
                  </p>
                  <p className="flow-text">
                    In this series, actual classroom lesson plans that incorporate different educational

                    and catechetical techniques are illustrated. Workshops also introduce the concept of

                    incarnational dynamism in classroom teaching. This consists in drawing the student

                    to the Person of Jesus Christ (who is the content of all catechesis) through the use of

                    contemporary and ancient sacred art, Christian and secular forms of music, popular

                    and classical literature, film, and age-appropriate classroom activities. The aim in

                    this track is form teachers to effectively witness to the Catholic faith in a manner

                    that will engage students and foster genuine evangelization.
                  </p>
                </div>
              </div>
            </div>
            <div className="sub-section">
              <h3><svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
              </svg>Culture of Life (CL) Track</h3>
              <div className="row valign-wrapper">
                <div className="col s12">
                  <p className="flow-text">
                    The purpose of this three-part series of workshops is to help those working in

                    diocesan pro-life or family life offices, as well as parish coordinators, health care

                    workers, and employees or volunteers serving pro-life apostolates (i.e. crisis

                    pregnancy centers, legal advocacy groups, and post-abortion healing ministries).
                  </p>
                  <p className="flow-text">
                    The demanding skill set needed for effective pro-life ministry draws from fields as

                    diverse as health care, politics, formal theology, bioethics, counseling, sociology,

                    catechetics, law, life sciences, and policy history. This track address all these and

                    more, delving into related aspects of fostering a culture of life: the nature of human

                    liberty in Catholic social teaching, the feminine genius, the masculine genius,

                    evolution, environmental stewardship, service to the poor, outreach to those

                    addicted, depressed, or those discarded by society, and the critical importance of

                    prayer and spiritual combat to oppose the pervasive culture of death.
                  </p>
                </div>
              </div>
            </div>
            <div className="sub-section">
              <h3><svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
              </svg>Pastoral Accompaniment (PA) Track</h3>
              <div className="row valign-wrapper">
                <div className="col s12">
                  <p className="flow-text">
                    The primary audience of this three-part series of workshops is those working in any

                    ministry setting—clergy or laity—whose interactions with others require

                    mentoring skills, evangelical hospitality, ongoing pastoral interactions in the course

                    of catechetical work, small group facilitation, parenting, nurturing, and intercessory

                    prayer outreach. Anyone who has some degree of work in the care of souls can

                    benefit significantly from these workshops.
                  </p>
                  <p className="flow-text">
                    This track is divided into three areas of emphasis in pastoral accompaniment: 1)

                    Mentoring; 2) Spiritual Guidance; and 3) Counseling. Workshops in each of these

                    areas are not designed for professional counselors, spiritual directors, or similar

                    niche roles, but instead for those in more general catechetical or ministerial roles.

                    This track’s diverse content is also applicable to every parent, every priest, and

                    every parishioner who understands the demanding call upon all baptized believers

                    to love generously and serve sacrificially.
                  </p>
                </div>
              </div>
            </div>
            <div className="sub-section">
              <h3><svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
              </svg>Youth Ministry (YM) Track</h3>
              <div className="row valign-wrapper">
                <div className="col s12">
                  <p className="flow-text">
                    This track, designed in cooperation with Life Teen, offers an efficient and in-depth

                    two-part series of workshops to provide formation for youth ministers. It includes

                    presentations that are practical, academic, theological, and spiritual, all while

                    stressing that the most important factor in successfully evangelizing and discipling

                    adolescents is the human one: the authentic witness and genuine love of those willing

                    to invest in the spiritual growth of younger souls. This track also helps youth

                    ministers affect families, who bear the primarily formative responsibility for

                    children.
                  </p>
                </div>
              </div>
            </div>
            <div className="sub-section">
              <h3><svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
              </svg>Campus Ministry (CM) Track</h3>
              <div className="row valign-wrapper">
                <div className="col s12">
                  <p className="flow-text">
                    Campus ministry at today’s colleges and universities has become an immensely

                    challenging endeavor. This track offers a two-part set of workshops designed to

                    meet the unique needs of those tasked with ministering to young people during this

                    transient and tumultuous time of life. At the heart of this track is a recognition that

                    any effort to evangelize and make disciples of college students must start with a

                    carefully formed Catholic worldview and a genuine missionary mindset. Workshops by

                    veteran campus ministers explore the essential steps for developing and growing an

                    effective campus ministry program that is attentive both to seekers and those

                    needing deeper, ongoing spiritual growth. Attention is particularly given to

                    achieving sustained long-term growth with college students, not just short-term

                    gains.
                  </p>
                </div>
              </div>
            </div>
            <div className="sub-section">
              <h3><svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
              </svg>First Proclamation (FP) Track</h3>
              <div className="row valign-wrapper">
                <div className="col s12">
                  <p className="flow-text">
                    This track is intended for any individual—clergy or lay, active in ministry or

                    not—who desires to develop the ability to proclaim the Gospel to others.

                    Workshops in this two-part series address the critical content of the basic Gospel

                    message; the historical ways in which it has been unfolded; the nature of conversion

                    and faith development; the natural and necessary connection between

                    evangelization and a deeper exploration of the faith; best practices in the field in a

                    wide range of circumstances; skills development; the place of apologetics; specific

                    avenues to evangelize families; and the need to be well-formed in the pastoral and

                    spiritual aspects of outreach. A special feature of this track is a far-reaching series of

                    interviews with many Catholics who are currently doing creative and effective

                    evangelization work in a myriad of contexts.
                  </p>
                </div>
              </div>
            </div>
            <div className="sub-section">
              <h3><svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
              </svg>Music Ministry (MM) Track</h3>
              <div className="row valign-wrapper">
                <div className="col s12">
                  <p className="flow-text">
                    The influence of music in most people’s lives is profound. The Church’s long

                    experience and wisdom also recognizes that music is a salvific tool, a gift of beauty

                    arising from human talent and a supernatural charism that is often graced by God in

                    order to aid and deepen conversion, draw forth repentance, foster spiritual peace,

                    heighten worship, and stoke zeal. The workshops in this track offer an inclusive

                    exploration of the Church’s vision for music ministry and the myriad practical ways

                    it can be encouraged in ecclesial settings, wielded in formative experiences, and

                    developed and matured in the lives of children, teens, and adults. Of particular focus

                    is an open look at the relative value of various genres of Christian music in a modern

                    setting and how preserving a vibrant Catholic family life from a pervasively acidic

                    secular culture can be greatly aided by the gift of sacred sound.
                  </p>
                </div>
              </div>
            </div>
            </div>
          </div>
          <div className="section valign-wrapper black-text white-background-flourish">
            <div className="container wide-container">
              <h2 className="light center" style={{marginBottom: '0px'}}>A Complete Catechetical Formation</h2>
              <div className="sub-section open">
                <h3><svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                  <path d="M0 0h24v24H0z" fill="none"/>
                </svg>Catechetics Program</h3>
                <div className="row valign-wrapper">
                  <div className="col s12 m6 valign order-2">
                    <p className="flow-text">
                      The Catechetics Program at Franciscan University is the largest in the country, and one of the finest in the world.  We offer bachelor’s degrees in catechetics, online and on-campus master’s degrees in Catechetics and Evangelization (MACE), specializations in fields such as youth ministry and music ministry, diverse opportunities for field experience, and individual assistance with field placement.  Our students graduate with the tools necessary to go forth and proclaim the Good News of Jesus Christ in a way that is faithful to the Church and advances the Kingdom of God.
                    </p>
                    <a href="https://www.franciscan.edu/Catechetics/" title="Franciscan University Catechetics Program" target="_blank"><button className="btn waves-effect waves-light">Learn More</button></a>
                  </div>
                  <div className="col s12 m6 order-1">
                    <img className="responsive-img z-depth-1" src="/static/img/new/port-fall.jpg" alt="Speaking the Truth in Love Conference Flyer." title="Speaking the Truth in Love" />
                  </div>
                </div>
              </div>

            <div className="sub-section">
              <h3><svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
              </svg>Franciscan Fast-track</h3>
              <div className="row valign-wrapper">
                <div className="col s12 m6 order-1">
                  <img className="responsive-img z-depth-1" src="/static/img/new/fast-track.jpg" alt="Student studying." title="Franciscan Fast Track" />
                </div>
                <div className="col s12 m6 valign order-2">

                  <p className="flow-text">
                    Courses for high school and homeschool students available for all subjects from math to science, from literature to language, from theology to philosophy, and so much more.  Franciscan University is committed to making available the best Catholic instructors at the most affordable price for the family budget, aimed at an educational formation that explicitly serves the new evangelization.
                  </p>
                  <a href="https://www.franciscan.edu/fasttrack/" title="Franciscan University Fast Track" target="_blank"><button className="btn waves-effect waves-light">Learn More</button></a>
                </div>
              </div>
            </div>
            <div className="sub-section">
              <h3><svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
              </svg>Online Degree Programs</h3>
              <div className="row valign-wrapper">
                <div className="col s12 m6 valign order-2">

                  <p className="flow-text">
                    Whether you are right out of high school, right in the middle of your life, or right about ready to try a new direction or a next step, Franciscan University has programs that meet you where God has you.  Franciscan offers online associate’s and master’s degrees in theology, philosophy, education, and catechetics.  On campus, we also offer a full spread of 39 undergraduate majors, and seven master’s programs. Our graduates are prepared to “cast out into the deep” and bring the light of Christ to the ends of the earth.
                  </p>
                  <a href="https://www.franciscan.edu/admissions/online/" title="Franciscan University Online Programs" target="_blank"><button className="btn waves-effect waves-light">Learn More</button></a>
                </div>
                <div className="col s12 m6 order-1">
                  <img className="responsive-img" src="/static/img/new/online-degree.jpg" alt="Working at a computer." title="Online Degree" />
                </div>
              </div>
            </div>
            <div className="sub-section">
              <h3><svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
              </svg>Priestly Vocational Formation</h3>
              <div className="row valign-wrapper">
                <div className="col s12">

                  <p className="flow-text">
                    The Priestly Discernment Program (PDP), part of the bachelor’s degree experience at the University, helps men to grow in holiness and listen for the “still, small voice” of a vocation to the priesthood or religious life.  The University is also seeking to develop an Institute for Priestly Renewal (IPR), a summer residency program for seminarians and priests that would reach out to assist diocesan bishops and religious superiors to provide a high-quality curriculum for clergy desiring superlative, efficient, and pragmatic formation for their leadership roles in the new evangelization.
                  </p>
                  <a href="https://www.franciscan.edu/pdp/" title="Priestly Discernment Program" target="_blank"><button className="btn waves-effect waves-light">Learn More</button></a>
                </div>
              </div>
            </div>

            </div>
          </div>
          <style jsx>{`
              .sub-section p {
                margin-top: 0;
              }

              .sub-section .col {
                display: none;
              }

              .sub-section.open .col {
                display: block;
              }

              .sub-section h3 {
                cursor: pointer;
              }

              .sub-section.open h3 svg {
                transform: rotate(90deg);
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
