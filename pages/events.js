/* global hScroller */
import React from 'react'
import Layout from '../components/Layout'
import StickyNav from '../components/StickyNav'
import Title from '../components/Title'
import 'isomorphic-fetch'
import { logPageView } from '../utils/analytics'
import { getJSON } from '../utils/fetch'

export default class extends React.Component {
  state = {
    data: [],
    dateAsc: null,
    dateDesc: null,
    dateIsAsc: true,
    userLat: null,
    userLong: null
  }

  static async getInitialProps () {
    const apiUrl = 'https://wp.catechetics.com/wp-json/wp/v2/'
    const params =
      'nearby-event?per_page=100&filter[orderby]=acf.date&filter[order]=ASC&fields=title,acf'
    const res = await fetch(apiUrl + params)
    const data = await res.json()
    return { data }
  }

  componentDidMount = () => {
    this.setState({
      data: this.props.data.filter(
        post => post.acf.date >= this.getTodaysDate()
      )
    })
    hScroller()
    logPageView()
  }

  getTodaysDate = () => {
    const date = new Date()
    const dateToday = parseInt(
      '' +
        date.getFullYear() +
        this.makeTwoDigits(date.getMonth() + 1) +
        this.makeTwoDigits(date.getDate())
    )
    return dateToday
  }

  getLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        userLat: position.coords.latitude,
        userLong: position.coords.longitude
      })
      this.compareLocation()
    })
  }

  compareLocation = () => {
    const newData = this.state.data
      .map(event => {
        const eventCloned = { ...event }
        eventCloned.distanceToEvent = eventCloned.acf.hasOwnProperty(
          'location_map'
        )
          ? this.state.userLat -
              eventCloned.acf.location_map.lat +
              (this.state.userLong - eventCloned.acf.location_map.lng)
          : Infinity
        return eventCloned
      })
      // Make sure to set a distanceToEvent value for events that do not have lat and lon. Set to Infinity
      .sort((a, b) => a.distanceToEvent - b.distanceToEvent)
    this.setState({ data: newData })
  }

  sortDate = () => {
    if (this.state.dateIsAsc) {
      if (this.state.dateDesc === null) {
        const apiUrl = 'https://wp.catechetics.com/wp-json/wp/v2/'
        const params = `nearby-event?per_page=100&filter[orderby]=acf.date&filter[order]=DESC&fields=title,acf`
        this.setState({ dateAsc: this.state.data })
        getJSON(apiUrl + params).then(data => this.setState({ data }))
      } else {
        this.setState({ data: this.state.dateDesc })
      }
    } else {
      this.setState({ dateDesc: this.state.data, data: this.state.dateAsc })
    }
    this.setState({ dateIsAsc: !this.state.dateIsAsc })
  }

  makeTwoDigits (n) {
    return n.toString().length <= 1 ? '0' + n : n
  }

  render () {
    return (
      <Layout
        headerType='interior'
        title='Events | Catechetical Institute at Franciscan University'
        description='Upcoming events from the Catechetical Institute at Franciscan University of Steubenville'
      >
        <main id='events'>
          <StickyNav />
          <Title
            title='Events'
            imgPath='/static/img/campus-7.jpg'
            posY='-44vh'
          />
          <div className='section white-background-flourish'>
            <div className='container'>
              <div className='row'>
                <div className='col s12'>
                  <p className='flow-text'>
                    The annual St. John Bosco Conference for Catechists and
                    Religious Educators at Franciscan University is our premier
                    event, bringing catechetical experts from all over to share
                    their expertise through general sessions and specialized
                    tracks. We also host on-campus academic conferences on
                    catechetical topics, and speak all over.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='section white-background-flourish'>
            <div className='container wide-container'>
              <h2 className='light center' style={{ marginBottom: '0px' }}>
                St. John Bosco Conference
              </h2>
              <span className='sub-heading center'>July 17-20, 2017</span>
              <div className='center' style={{ marginBottom: '16px' }}>
                <a
                  href='https://www.cvent.com/events/st-john-bosco-conference-july-17-20-2017/registration-fd101066745c42f099a1fade8be9ed1c.aspx?fqp=true%C2%A0'
                  title='Register for the St. John Bosco Conference'
                  target='_blank'
                >
                  <button className='btn waves-effect waves-light'>
                    Register
                  </button>
                </a>
                <a
                  href='https://steubenvilleconferences.com/wp-content/uploads/2016/11/FNL_2017_Conf_Media_inserts_11_Bosco2.pdf'
                  title='St. John Bosco Conference Flyer PDF'
                  target='_blank'
                >
                  <button
                    className='btn waves-effect waves-light'
                    style={{ marginLeft: '8px' }}
                  >
                    Flyer
                  </button>
                </a>
              </div>

              <div className='row valign-wrapper'>
                <div className='col s12 m6 order-1'>
                  <img
                    className='responsive-img'
                    src='/static/img/st._john_bosco.jpg'
                    alt='Picture of Saint John Bosco.'
                    title='Saint John Bosco'
                  />
                  <div
                    className='video-container'
                    style={{ marginTop: '24px' }}
                  >
                    <iframe
                      width='1092'
                      height='665'
                      src='https://www.youtube.com/embed/GZvZ8brOYQM'
                      frameBorder='0'
                      allowFullScreen
                    />
                  </div>
                </div>

                <div className='col s12 m6 valign order-2'>
                  <p className='flow-text'>
                    Founded over 20 years ago, this amazing gathering has
                    evolved to serve all aspects of the evangelizing and
                    catechizing mission of the Church, with an annual array of
                    relevant, inspiring, and practical workshops on parenting
                    and priestly excellence, children, youth, and adult
                    ministry, multicultural, ecumenical, and special needs
                    service, and a host of tracks offering certification for
                    school teachers and parish catechists, campus and youth
                    ministers, catechetical leaders, RCIA teams, and much more.
                    It is a place for people to share their favorite resources,
                    discuss particular challenges facing their ministry, learn
                    from and be mentored by some of the finest professionals in
                    the field, and open themselves to the Holy Spirit through
                    confession, adoration, and Mass. Many participants think of
                    the conference as an annual re-charge of their spiritual
                    batteries, and a true retreat for the soul. Come to the St.
                    John Bosco Conference and be renewed in your hope as you
                    spend four days being blessed by an amazing ministry team,
                    dynamic presenters, and fellowship with those that share
                    your passion for Christ and the Church!
                  </p>
                  <a
                    href='https://www.cvent.com/events/st-john-bosco-conference-july-17-20-2017/registration-fd101066745c42f099a1fade8be9ed1c.aspx?fqp=true%C2%A0'
                    title='Register for the St. John Bosco Conference'
                    target='_blank'
                  >
                    <button className='btn waves-effect waves-light'>
                      Register
                    </button>
                  </a>
                  <a
                    href='https://steubenvilleconferences.com/wp-content/uploads/2016/11/FNL_2017_Conf_Media_inserts_11_Bosco2.pdf'
                    title='St. John Bosco Conference Flyer PDF'
                    target='_blank'
                  >
                    <button
                      className='btn waves-effect waves-light'
                      style={{ marginLeft: '8px' }}
                    >
                      Flyer
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='section red-background-flourish white-text'>
            <div className='container wide-container'>
              <h2 className='light center' style={{ marginBottom: '0px' }}>
                Speaking the Truth in Love Conference
              </h2>
              <span className='sub-heading center'>October 13-15, 2017</span>
              <div className='center' style={{ marginBottom: '16px' }}>
                <a
                  href='https://www.eventbrite.com/e/speaking-the-truth-in-love-conference-tickets-34907493252?aff=CatecheticsSite'
                  title='Register for the Speaking the Truth in Love Conference'
                  target='_blank'
                >
                  <button className='btn waves-effect waves-light btn-inverted-white'>
                    Register
                  </button>
                </a>
                <a
                  href='http://www.calameo.com/read/00005685440b456a8cebf'
                  title='Speaking the Truth in Love Conference Flyer PDF'
                  target='_blank'
                >
                  <button
                    className='btn waves-effect waves-light btn-inverted-white'
                    style={{ marginLeft: '8px' }}
                  >
                    Flyer
                  </button>
                </a>
              </div>
              <div className='row valign-wrapper'>
                <div className='col s12 m6 valign order-2'>
                  <p className='flow-text'>
                    This unique conference is a Silver Jubilee celebration of
                    the gift of the Catechism of the Catholic Church to the
                    Church of our day, and will examine ways in which the
                    Catechism is providing a creative reference point for
                    catechetical, cultural and ecclesial renewal through its
                    reclamation of the Christian heritage, its explanatory power
                    and its compelling articulation of a civilization
                    characterized by faith, hope and love. Franciscan University
                    is grateful for the assistance of the USCCB's Committee on
                    Evangelization and Catechesis in making this conference
                    possible. Keynotes include, Cardinal Donald Wuerl,
                    Archbishop of Washington, Archbishop Leonard Blair, Chair,
                    Committee for Evangelization and Catechesis, USCCB, Dr. John
                    Cavadini, Director of the Institute for Church Life at the
                    University of Notre Dame, Dr. Scott Hahn, Father Michael
                    Scanlan Chair of Biblical Theology and the New
                    Evangelization, Franciscan University, Dr. Tracey Rowland,
                    John Paul II Research Chair of Theology, University of Notre
                    Dame, Sydney, and Dr. Petroc Willey, Director of the
                    Catechetical Institute and the Office of Catechetics,
                    Franciscan University.
                  </p>
                  <a
                    href='https://www.eventbrite.com/e/speaking-the-truth-in-love-conference-tickets-34907493252?aff=CatecheticsSite'
                    title='Register for the Speaking the Truth in Love Conference'
                    target='_blank'
                  >
                    <button className='btn waves-effect waves-light btn-inverted-white'>
                      Register
                    </button>
                  </a>
                  <a
                    href='http://www.calameo.com/read/00005685440b456a8cebf'
                    title='Speaking the Truth in Love Conference Flyer PDF'
                    target='_blank'
                  >
                    <button
                      className='btn waves-effect waves-light btn-inverted-white'
                      style={{ marginLeft: '8px' }}
                    >
                      Flyer
                    </button>
                  </a>
                </div>
                <div className='col s12 m6 order-1'>
                  <img
                    className='responsive-img'
                    src='/static/img/speaking-the-truth-700w-op.jpg'
                    alt='Speaking the Truth in Love Conference Flyer.'
                    title='Speaking the Truth in Love'
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='section valign-wrapper black-text white-background-flourish'>
            <div className='valign container wide-container'>
              <h2 className='light center' style={{ marginBottom: '0px' }}>
                Find a Nearby Event
              </h2>
              <div className='row light'>
                <table
                  className='highlight responsive-table'
                  style={{ fontSize: '24px' }}
                >
                  <thead>
                    <tr>
                      <th onClick={this.sortDate}>Date</th>
                      <th>Presenter</th>
                      <th>Event/Title</th>
                      <th onClick={this.getLocation}>Location</th>
                      <th>Event Email</th>
                      <th>Presenter Email</th>
                      <th>Link</th>
                    </tr>
                  </thead>

                  <tbody>
                    {this.state.data.map(function (post, i) {
                      return (
                        <tr key={i}>
                          <td>{post.acf.displayed_date}</td>
                          <td>{post.acf.presenter}</td>
                          <td
                            dangerouslySetInnerHTML={{
                              __html: post.title.rendered
                            }}
                          />
                          <td>{post.acf.location}</td>
                          <td>
                            <a href={`mailto:${post.acf.event_email}`}>
                              {post.acf.event_email}
                            </a>
                          </td>
                          <td>
                            <a href={`mailto:${post.acf.presenter_email}`}>
                              {post.acf.presenter_email}
                            </a>
                          </td>
                          <td>
                            <a
                              href={post.acf.link}
                              title={post.title.rendered}
                              target='_blank'
                            >
                              {post.acf.link ? 'More Info' : ''}
                            </a>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
                <div className='col s12 center scroller'>
                  <svg
                    id='scrollLeft'
                    fill='#000000'
                    height='24'
                    viewBox='0 0 24 24'
                    width='24'
                    xmlns='http://www.w3.org/2000/svg'
                    style={{ transform: 'rotate(180deg)' }}
                  >
                    <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z' />
                    <path d='M0 0h24v24H0z' fill='none' />
                  </svg>
                  <svg
                    id='scrollRight'
                    fill='#000000'
                    height='24'
                    viewBox='0 0 24 24'
                    width='24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z' />
                    <path d='M0 0h24v24H0z' fill='none' />
                  </svg>

                </div>
              </div>
            </div>
          </div>
          <style jsx>
            {`
                .responsive-table td {
                  min-height: 66px;
                }

                .scroller {
                  margin-bottom: -28px;
                }

                .scroller svg {
                  width: 65px;
                  height: 60px;
                  cursor: pointer;
              `}

          </style>
        </main>
      </Layout>
    )
  }
}
