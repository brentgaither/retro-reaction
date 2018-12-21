import React, {Component} from 'react'
import TopicList from "./topic-list";

class RetroCategory extends Component {
  componentDidUpdate() {
  }

  render() {
    return (
      <div className="header">
        <form onSubmit={this.props.addTopic}>
          <input
            placeholder="Topic"
            ref={this.props.inputTopicElement}
            value={this.props.currentTopic.text}
            onChange={this.props.handleTopicInput}
          />
          <button type="submit"> Add Topic</button>
        </form>
        <TopicList deleteTopic={this.props.deleteTopic} entries={this.props.topics}/>
      </div>
    )
  }
}

export default RetroCategory
