import React, { Component } from 'react'

class ResourceRow extends Component {
  state = {
    displayContent: false
  }

  render () {
    return (
      <div
        class='valign-wrapper col s12 resource-row'
        style={{
          borderBottom: '1px solid rgba(0, 0, 0, 0.54)',
          padding: '16px'
        }}
      >

        <div class='col s12 m9 valign'>
          <span
            class='type'
            style={{
              color: '#998643',
              fontSize: '18px',
              display: 'block',
              textTransform: 'uppercase'
            }}
          >
            {this.props.type}
          </span>
          <h4 style={{ marginBottom: '4px', marginTop: '0px' }}>
            <a
              href={this.props.url}
              title={this.props.title}
              style={{ color: '#8e1b21' }}
              dangerouslySetInnerHTML={{
                __html: this.props.title
              }}
            />
          </h4>

          {this.props.author === ''
            ? ''
            : <span
              class='author'
              style={{
                color: '#998643',
                display: 'block',
                fontSize: '20px'
              }}
              >
                Author: {this.props.author}
            </span>}
          {this.state.displayContent
            ? <div>
              <p
                class='description'
                dangerouslySetInnerHTML={{
                  __html: this.props.content
                }}
                />
              <span
                class='read-more'
                style={{
                  color: '#8e1b21',
                  cursor: 'pointer',
                  marginTop: '16px',
                  display: 'block'
                }}
                onClick={() => this.setState({ displayContent: false })}
                >
                  Hide
                </span>
            </div>
            : <span
              class='read-more'
              style={{
                color: '#8e1b21',
                cursor: 'pointer',
                marginTop: '16px',
                display: 'block'
              }}
              onClick={() => this.setState({ displayContent: true })}
              >
                Read More
              </span>}

        </div>
        <div class='col s12 m3'>
          <img src={this.props.img} style={{ maxHeight: '200px' }} />

        </div>
        <style jsx>
          {`
            .resource-row:first-of-type {
              border-top: 1px solid rgba(0, 0, 0, 0.54);
            }
          `}
        </style>
      </div>
    )
  }
}

export default ResourceRow
