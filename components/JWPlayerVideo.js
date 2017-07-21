import React, { Component } from 'react'

class JWPlayerVideo extends Component {
  render () {
    return (
      <div
        id='jw-player-container'
        style={{
          position: 'relative',
          height: '0',
          overflow: 'hidden',
          paddingBottom: '56.25%'
        }}
      >
        <script
          src={`//content.jwplatform.com/players/${this.props.videoId}.js`}
        />

      </div>
    )
  }
}

export default JWPlayerVideo
