import React, {Component} from 'react'
import TopicList from "./topic-list";
import PropTypes from 'prop-types';

class RetroCategory extends Component {
  componentDidUpdate() {
  }

  render() {
    return (
      <div className="header">
        <div>
          <input
            placeholder="Topic"
            ref={this.props.inputTopicElement}
            value={this.props.currentTopic.text}
            onChange={this.props.handleTopicInput}
          />
          <button type="button"  onClick={this.props.addTopic}> Add Topic</button>
        </div>
        <TopicList
          deleteTopic={this.props.deleteTopic}
          entries={this.props.topics}
        />
      </div>
    )
  }
}

RetroCategory.propTypes = {
  inputTopicElement: PropTypes.string,
  currentTopic: PropTypes.object,
  handleTopicInput: PropTypes.func
};

export default RetroCategory
