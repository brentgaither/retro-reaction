import React, { Component } from 'react'

class TopicList extends Component {
  createTopics = topic => {
    return (
      <li key={topic.key} onClick={() => this.props.deleteTopic(topic.key)}>
        {topic.text}
      </li>
    )
  };

  render() {
    const retroEntries = this.props.entries;
    const listTopics = retroEntries.map(this.createTopics);

    return <ul className="theList">{listTopics}</ul>
  }
}

export default TopicList
