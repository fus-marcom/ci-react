import React, { Component } from 'react';

class TextCard extends Component {

  render() {
    return (
      <div className="card hoverable">
        <a href="#">
          <div className="card-content">
            <span className="card-title">Title</span>
            <p className="resource-description">I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively.</p>
          </div>
        </a>
      </div>
    );
  }
}

export default TextCard;
