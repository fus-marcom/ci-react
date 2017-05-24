import React, { Component } from 'react';
class TeamCard extends Component {

  render() {
    let cardImg = '';
   if (this.props.imgUrl !== '') {
     cardImg = `<img src="${this.props.imgUrl}" title="${this.props.name}" style="width: 100px;"/>`;
   } else {
     cardImg = `<svg fill="#000000" height="100" viewBox="0 0 24 24" width="100" xmlns="http://www.w3.org/2000/svg" style="transform: none;">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
    </svg>`;
   }
    return (
      <div className="card horizontal hoverable team-card" data-slug={this.props.slug}>
       <div className="card-image" dangerouslySetInnerHTML={{__html: cardImg}} >
       </div>
       <div className="card-stacked" style={{overflowX: 'scroll', whiteSpace: 'nowrap'}}>
         <div className="card-content">
           <span className="team-card-name">{this.props.name}</span>
           <span className="team-card-title">{this.props.title}</span>
           <span className="team-card-org">{this.props.org}</span>
           <div className="content" style={{display: 'none'}} dangerouslySetInnerHTML={{__html: this.props.content}}>

           </div>
         </div>
       </div>
       <div id={this.props.slug} className="modal" style={{cursor: 'auto'}}>
         <div className="modal-content">
           <h4 style={{color: 'rgba(0, 0, 0, 0.87)'}} dangerouslySetInnerHTML={{__html: this.props.name}}></h4>
           <span className="team-card-title" style={{display: 'block'}}>{this.props.title}</span>
           <span className="team-card-org">{this.props.org}</span>
           <p dangerouslySetInnerHTML={{__html: this.props.content}}>

           </p>

         </div>
        </div>
      </div>
    );
  }
}

export default TeamCard;
