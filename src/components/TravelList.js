import React, { Component } from 'react';
import Destination from "./Destination"

class TravelList
 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render(){

    let destinations = this.props.data.places.map(destination => {
      let selectDestination = () => this.handleDestinationClick(destination.id)

      return(
        <div>
          <Destination
            key= {destination.id}
            locale={destination.name}
          />
        </div>
      )
    })

    return (
      <div>
        <ul>
          {destinations}
        </ul>
      </div>
    )
  }
}

export default TravelList;
