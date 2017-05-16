import React, { Component } from 'react';

const hStyles = {

}

class Title extends Component {

  render() {
    return (
      <section className="interior-page-title valign-wrapper" style={{backgroundImage: `url("${this.props.imgPath}")`, backgroundPositionY: `${this.props.posY}`, backgroundAttachment: 'fixed'}}>
        <h1 className="center light valign">{this.props.title}</h1>
        <style jsx>{`
          .interior-page-title {
            background-size: cover;
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-position: center;
            background-image: url(/static/img/campus-11.jpg);
            background-position-y: -44vh;
            background-attachment: fixed;
            min-height: 39vh;

          }
          h1 {
            background-image: url(/static/img/squiggly1.png), linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
            background-repeat: no-repeat;
            background-position: 50% 85px, 50%;
            border-radius: 50%;
            margin: 0 auto;
            font-size: 54px;
            padding: 27px;
          }
        `}</style>
      </section>
    );
  }
}

export default Title;
