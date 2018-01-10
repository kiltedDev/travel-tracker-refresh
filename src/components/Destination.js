import React, { Component } from 'react';

class Destination
 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visited: false
    }

    this.handleDestinationClick = this.handleDestinationClick.bind(this)
  }

  handleDestinationClick() {
    this.setState( { visited: !this.state.visited }  )
  }

  render(){
    let handleClick = () => this.handleDestinationClick()
    let className;

    if(this.state.visited) {
      className = "visited"
    } else {
      className = ""
    }

    return(
      <div onClick={handleClick} className={className}>{this.props.locale}</div>
    )
  }
}

export default Destination;
