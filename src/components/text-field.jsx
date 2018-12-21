import React, {Component} from "react";

class TextField extends Component {

  render() {
   return ( <input
      placeholder="Topic"
      ref={this.props.inputElement}
      value={this.props.currentTopic.text}
      onChange={this.props.handleInput}
    />)
  }
}

export default TextField
