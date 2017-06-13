import React, { Component } from 'react';
import Head from './Head'
import Nav from './Nav';
import Footer from './Footer'
import { initGA } from '../utils/analytics';

export default class Layout extends Component {
  componentDidMount () {
    if (!window.GA_INTIALIZED) {
      initGA();
      window.GA_INTIALIZED = true;
    }
  }
  render () {
    const { title, description, headerType, children } = this.props;

    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <Head title={title} description={description} />
        <Nav headerType={headerType} />
        {children}
        <Footer />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/js/materialize.min.js"></script>
        <script src="static/js/app.js"></script>
      </div>
    );
  }
}