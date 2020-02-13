import React, { Component } from "react";
import TripPageDetails from '../components/TripPageDetails'

class TripPageContainer extends Component {

  state = {
    trip: "",
    name: "",
    location: "",
    image: "",
    category: "",
    date: "",
    notes: ""
  }
  
  fetchTripDetails = () => {
    let tripId = this.props.selectedTrip.id
    fetch(`http://localhost:3000/trips/${tripId}`)
    .then(res => res.json())
    .then(data => this.setState({
      trip: data,
      name: data.name,
      location: data.location,
      image: data.image,
      category: data.category,
      date: data.date,
      notes: data.notes
    }))
  }

  componentDidMount() {
    this.fetchTripDetails();
  }

  updateDetails = (patch) => {
    this.setState({
      trip: patch
    })
  }

  updateItems = (itemObj) => {
    let newItems = this.state.trip
    newItems.items.push(itemObj)
    this.setState({
      trip: newItems
    })
  }

  updateStops = (stopObj) => {
    let newStops = this.state.trip
    newStops.stops.push(stopObj)
    this.setState({
      trip: newStops
    })
  }

  handleEditInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  deleteStop = (stop) => {
    fetch(`http://localhost:3000/stops/${stop.id}`,{
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    // .then(console.log)
    .then(stop => this.removeStopState(stop))
    }
  

  removeStopState = (selectedStop) => {
    let stop = this.state.trip.stops.filter(stop => {
      return stop.id !== selectedStop.id
    })
    let currentTrip = this.state.trip
    currentTrip.stops = stop
    this.setState({
      trip: currentTrip
    }, () => console.log(this.state))

  }

  render() {
    return (
      <div>
        <TripPageDetails 
        user={this.props.user} 
        trip={this.state.trip} 
        updateDetails={this.updateDetails} 
        handleEditInput={this.handleEditInput} 
        formData={this.state} 
        updateItems={this.updateItems} 
        updateStops={this.updateStops}
        deleteStop={this.deleteStop}/>
      </div>
    )
  }
}

export default TripPageContainer