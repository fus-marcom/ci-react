import React, { Component } from 'react';

const hStyles = {

}

class Title extends Component {

  render() {
    return (
      <section className="interior-page-title valign-wrapper" style={{backgroundImage: `url("${this.props.imgPath}")`, backgroundPositionY: `${this.props.posY}`, backgroundAttachment: 'fixed'}}>
        <h1 className="center light valign">{this.props.title}</h1>
        <style jsx>{`
          h1 {
            background-image: url(/static/img/squiggly1.png), linear-gradient(rgba(255, 255, 255, 0.498039), rgba(255, 255, 255, 0.498039));
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
