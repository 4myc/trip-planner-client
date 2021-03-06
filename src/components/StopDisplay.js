import React, { Component } from "react";
import { Card, Icon } from 'semantic-ui-react'

class StopDisplay extends Component {
  render() {
    return(
      <div className="ui column" style={{padding: '1.5rem'}}>
        <Card raised style={{height: '150px'}} >
          <Card.Content>
            <Card.Header>{this.props.stop.name}</Card.Header>
            <Card.Description>
              Location: {this.props.stop.location}<br></br>
              Date: {this.props.stop.date}<br></br>
              Notes: {this.props.stop.notes}
            </Card.Description>
            <div style={{textAlign: 'right'}}>
              <Icon link name='trash alternate outline' 
              size='large'
              onClick={() => this.props.deleteStop(this.props.stop)}/>
            </div>
        </Card.Content>
          </Card>
      </div>
    )
  }
}

export default StopDisplay