import React, { Componenet } from 'react';
import Head from '../components/Head'
import { initGA } from '../utils/analytics';

export default class Layout extends Component {
  componentDidMount () {
    initGA();
  }
  render () {
    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <Head title={this.props.title} description={this.props.description} />
        {this.props.children}
      </div>
    );
  }
}