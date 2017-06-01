import React, { Component } from 'react';

const hStyles = {

}

class Title extends Component {

  render() {
    return (
      <section className="interior-page-title valign-wrapper">
        <h1 className="center light valign">{this.props.title}</h1>
        <style jsx>{`

          h1 {
            background-image: url(/static/img/squiggly1.png);
            background-repeat: no-repeat;
            background-position: 50% 69px;
            margin: 0 auto;
            font-size: 50px;
            padding: 16px 0 19px 0;
          }

          @media screen and (max-width: 799px) {
            h1 {
              margin-bottom: -19px;
              background-size: 90px;
            }
          }


          @media screen and (min-width: 800px) {
            .interior-page-title {
              background-size: cover;
              background-repeat: no-repeat;
              background-position: center;
              background-image: url(/static/img/campus-11.jpg);
              background-position-y: 97%;
              min-height: 39vh;
            }



              h1 {
                background-image: url(/static/img/squiggly1.png), linear-gradient(rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75));
                background-repeat: no-repeat;
                background-position: 50% 85px, 50%;
                border-radius: 50%;
                margin: 0 auto;
                font-size: 54px;
                padding: 35px;
              }

          }


        `}</style>

        <style jsx global>
          {`

            @media screen and (min-width: 800px) {
              #about .interior-page-title {
                background-image: url(/static/img/new/about-title.jpg);
              }

              #courses .interior-page-title {
                background-image: url(/static/img/new/courses-title.jpg);
              }

              #events .interior-page-title {
                background-image: url(/static/img/new/events-title.jpg);
                background-position-y: 0;
              }

              #single-event .interior-page-title {
                background-image: url(/static/img/new/events-title.jpg);
                background-position-y: 0;
              }

              #news .interior-page-title {
                background-image: url(/static/img/new/campus-11.jpg);
              }

              #resources .interior-page-title {
                background-image: url(/static/img/new/resources-title.jpg);
                background-position-y: 97%;
              }

              #single-news .interior-page-title {
                background-image: url(/static/img/new/campus-11.jpg);
              }

              #team .interior-page-title {
                background-image: url(/static/img/new/team-title.jpg);
              }
            }
          `}
      </style>
      </section>
    );
  }
}

export default Title;
