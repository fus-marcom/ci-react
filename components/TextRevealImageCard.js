import React, { Component } from 'react';

class TextRevealImageCard extends Component {

  render() {
    return (
      <div className="card hoverable" style={{cursor: 'pointer'}}>
        <div className="card-image">
          <img className="activator" src="img/st._john_bosco.jpeg" srcSet="img/st._john_bosco.jpeg 400w, img/st._john_bosco.jpeg 600w, /static/img/st._john_bosco.jpeg 800w" sizes="(max-width: 600px) 90vw, 40vw" />
          <span className="card-title activator">Courses</span>
        </div>
        <div className="card-reveal" style={{cursor: 'auto'}}>
          <span className="card-title grey-text text-darken-4">Formation Courses<i className="material-icons right">close</i></span>
          <p>
             An immense array of options for free, for sale, and for subscription to explore for every level of Catholic formation: hundreds of talks from Franciscan University conferences, symposia, and other events; current and past articles from dozens of issues of the Catechetical Review and Sower catechetical journals; outstanding books and ebooks; webisodes and creative evangelizing media; interview series with some of the finest Catholic thinkers, catechetical experts, and creative evangelists in the Church today, and even a selection of musical artists who work regularly with the Institute.
          </p>
        </div>
      </div>
    );
  }
}

export default TextRevealImageCard;
