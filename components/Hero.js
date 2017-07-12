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
            height: 68vh;
            max-height: 500px;
            background-image: url(/static/img/monstrance-2000w-op.jpg);
            background-size: 74vw;
            background-repeat: no-repeat;
            background-position-x: 157%;
            background-position-y: 36%;
            background-color: #000;
            margin-top: -74px;
            padding-bottom: 0;
          }
          @media screen and (min-width: 2000px) {
            #hero {
              background-size: 60vw;
              background-position-y: 39%;
              background-position-x: 128%;
            }
          }
          @media screen and (max-width: 1200px) {
            #hero {
              background-image: url("/static/img/monstrance-2000w-op.jpg");
              background-position-y: 26%;
            }
          }
          #hero h1 {
            padding-top: 180px;
            font-size: 81px;
          }
          @media screen and (max-height: 650px) {
            #hero h1 {
              padding-top: 163px;
              font-size: 55px;
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
        `}</style>
      </div>
    )
  }
}

export default Hero
