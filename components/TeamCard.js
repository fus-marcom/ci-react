import React, { Component } from 'react'
class TeamCard extends Component {
  render () {
    const { name, title, org, imgUrl, content, slug } = this.props
    let cardImg = ''
    if (imgUrl !== '') {
      cardImg = `<img src="${imgUrl}" title="${name}" style="width: 100px; height: 100px"/>`
    } else {
      cardImg = `<svg fill="#000000" height="100" viewBox="0 0 24 24" width="100" xmlns="http://www.w3.org/2000/svg" style="transform: none;">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
    </svg>`
    }
    return (
      <div className='card horizontal hoverable team-card' data-slug={slug}>
        <div
          className='card-image'
          dangerouslySetInnerHTML={{ __html: cardImg }}
        />
        <div
          className='card-stacked'
          style={{ overflowX: 'hidden', whiteSpace: 'nowrap' }}
        >
          <div className='card-content'>
            <span className='team-card-name'>{name}</span>
            <span className='team-card-title'>{title}</span>
            {org && <span className='team-card-org'>{org}</span>}
          </div>
        </div>
        {content && (
          <div id={slug} className='modal' style={{ cursor: 'auto' }}>
            <div className='modal-content'>
              <h4
                style={{ color: 'rgba(0, 0, 0, 0.87)' }}
                dangerouslySetInnerHTML={{ __html: name }}
              />
              <span className='team-card-title' style={{ display: 'block' }}>
                {title}
              </span>
              <span className='team-card-org'>{org}</span>
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default TeamCard
