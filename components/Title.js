import React, { Component } from 'react';

class Title extends Component {

  render() {
    return (
      <section className="interior-page-title valign-wrapper" style={{backgroundImage: `linear-gradient(rgba(255,255,255, .5), rgba(255,255,255, .5)), url("${this.props.imgPath}")`, backgroundPositionY: `calc(40vh - 109px), ${this.props.posY}`, backgroundAttachment: 'scroll, fixed'}}>
        <h1 className="center light valign" style={{paddingTop: 'calc(40vh - 106px)'}}>{this.props.title}</h1>
      </section>
    );
  }
}

export default Title;
