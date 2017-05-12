import React, { Component } from 'react';
class TeamCard extends Component {

  render() {
    return (
      <div className="card horizontal hoverable">
       <div className="card-image">
         <img src="http://lorempixel.com/100/100/nature/6" />
       </div>
       <div className="card-stacked">
         <div className="card-content">
           <span className="team-card-name">Petroc Willey, STL, PhD</span>
           <span className="team-card-title">Catechetical Institute and Office of Catechetics Director</span>
           <span className="team-card-org">Franciscan University</span>
         </div>
       </div>
      </div>
    );
  }
}

export default TeamCard;
