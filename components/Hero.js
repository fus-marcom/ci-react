import React, { Component } from 'react'
class Hero extends Component {
  render () {
    return (
      <div
        className='section valign-wrapper hide-on-med-and-down'
        id='hero'
        style={{ marginTop: '-83px' }}
      >
        <link
          href='https://fonts.googleapis.com/css?family=Allura'
          rel='stylesheet'
        />
        <div className='row right valign white-text'>
          <div className='col s12 m6'>
            <h1
              style={{
                fontFamily: "'Allura', cursive",
                fontSize: '81px',
                paddingTop: '180px',
                lineHeight: '.9'
              }}
            >
              Forming those who form others.
            </h1>
          </div>
          <div className='col s12 m6' />
        </div>
        <style jsx>{`
          #hero {
            min-height: 68vh;
            background-image: url(/static/img/monstrance-2000w-op.jpg);
            background-size: 74vw;
            background-repeat: no-repeat;
            background-position-x: 157%;
            background-position-y: 36%;
            background-color: #000;
            margin-top: -74px;
            padding-bottom: 0;
          }
          @media screen and (max-width: 1200px) {
            #hero {
              background-image: url("/static/img/monstrance-2000w-op.jpg");
              background-position-y: 26%;
            }
          }
          @media screen and (max-width: 828px), screen and (max-height: 500px) {
            #hero {
              display: none;
            }
          }
          #hero .row {
            margin-bottom: 0;
          }
          #hero h1 {
            font-family: 'Cinzel', serif;
          }
        `}</style>
      </div>
    )
  }
}

export default Hero
