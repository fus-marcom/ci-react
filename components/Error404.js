import React, { Component } from 'react'
import StickyNav from '../components/StickyNav'

class Error404 extends Component {
  render () {
    return (
      <main>
        <StickyNav />
        <div className='container'>
          <div className='section'>
            <div className='row'>
              <h4>
                No content exists at this address. Please try another page.
              </h4>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default Error404
