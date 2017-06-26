import React, { Component } from 'react'

class TextCard extends Component {
  render () {
    return (
      <div className='card hoverable'>
        <a
          href={this.props.url === '' ? '#' : this.props.url}
          title={this.props.title}
          target='_blank'
        >
          <div className='card-content'>
            <span className='card-title'>{this.props.title}</span>
            <p className='resource-description'>{this.props.content}</p>
          </div>
        </a>

        <style jsx>{`
          @media screen and (min-width: 601px) {
            .card {
              height: 500px;
              max-height: 356px;
            }
          }
        `}</style>
      </div>
    )
  }
}

export default TextCard
