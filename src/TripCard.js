import React from "react";
// import { Card } from 'semantic-ui-react'

const TripCard = props => {
  const { trip } = props;

  return (
    <>
    
    <div className="ui column">
      <div
        className="ui card raised"
        key={trip.id}
        // onClick={() => props.handleClick(trip)}
      >
        <div className="ui fluid image">
          <img alt="oh no!" src={trip.image} />
          {/* <img alt="oh no!" src="/images/avatar2/large/elyse.png" /> */}
        </div>
        <div className="content">
          <div className="header">{trip.name}</div>
          <div className="description">{trip.date}</div>
        </div>
      </div>
    </div>

    </>
  );

};

export default TripCard; 
