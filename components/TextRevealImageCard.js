import React, { Component } from 'react';
import Link from 'next/link'

class TextRevealImageCard extends Component {

  render() {
    return (
      <div className="card hoverable" style={{cursor: 'pointer'}}>
        <div className="card-image">
          <img className="activator" src={this.props.cardImg} />
          <div className="overlay"></div>
          <span className="card-title activator">{this.props.cardTitle}</span>
        </div>
        <div className="card-reveal" style={{cursor: 'auto'}}>
          <span className="card-title grey-text text-darken-4">Formation {this.props.cardTitle}<i className="material-icons right">close</i></span>
          <p>
            {this.props.cardContent}
          </p>
          <div className="card-action">
            <Link prefetch href={this.props.url} title={this.props.cardTitle}><a>More</a></Link>

          </div>
        </div>
        <style jsx>{`
          .overlay {
            width: 100%;
            height: 100%;
            background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
            position: absolute;
            top: 0;
            left: 0;
            pointer-events: none;
          }

          .card-title {
            font-family: 'Cinzel', serif;
            padding-bottom: 16px;
          }
        `}</style>
      </div>
    );
  }
}

export default TextRevealImageCard;
