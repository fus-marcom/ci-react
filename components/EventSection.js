import React, { Component } from 'react'

class EventSection extends Component {
  isEven = () => this.props.index % 2 === 0
  render () {
    return (
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
              <div className='video-container' style={{ marginTop: '24px' }}>
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
    )
  }
}

export default EventSection
