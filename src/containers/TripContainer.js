import React, { Component } from 'react'
import TripCard from '../components/TripCard'
import { Container, Button } from 'semantic-ui-react'

class TripContainer extends Component{

  displayTrips = () => {
    if(this.props.trips.length > 0) {
      return this.props.trips.map((trip, id) => {
        return <TripCard key={id} trip={trip} handleTripClick={this.props.handleTripClick} handleDelete={this.props.handleDelete}/>
    })}
}

  render() {
    return(
      <Container style={{margin: '40px'}} >
      <Button color='orange' style={{margin: '0 0 0 0.5rem'}} onClick={() => this.props.handleShowForm()}>
        Create Trip
      </Button>
      <div className="ui four column grid">
        <div className="row">
        {this.displayTrips()}
        </div>
      </div>
      </Container>
    )
  }
}

export default TripContainer