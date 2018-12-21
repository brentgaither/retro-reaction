import React, {Component} from 'react'
import TopicList from "./topic-list";

class RetroColumn extends Component {
  componentDidUpdate() {
    this.props.inputElement.current.focus()
  }

  render() {
    return (
      <div className="header">
        <form onSubmit={this.props.addTopic}>
          <input
            placeholder="Topic"
            ref={this.props.inputElement}
            value={this.props.currentTopic.text}
            onChange={this.props.handleInput}
          />
          <button type="submit"> Add Topic </button>
        </form>
        <TopicList deleteTopic={this.props.deleteTopic} entries={this.props.topics}/>
      </div>
    )
  }
}

export default RetroColumn
