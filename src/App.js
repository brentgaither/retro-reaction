import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RetroColumn from "./components/retro-column";
import TopicList from "./components/topic-list";

class App extends Component {
  constructor() {
    super()
    this.state = {
      topics: [],
      currentTopic: {text:'', key:''},
    }
  }
  handleInput = e => {
    const topicText = e.target.value
    const currentTopic = { text: topicText, key: Date.now() }
    this.setState({
      currentTopic,
    })
  }

  addTopic = e => {
    e.preventDefault()
    const newTopic = this.state.currentTopic
    if (newTopic.text !== '') {
      console.log(newTopic)
      const topics = [...this.state.topics, newTopic]
      this.setState({
        topics: topics,
        currentTopic: { text: '', key: '' },
      })
    }
  }

  deleteTopic = key => {
    const filteredTopics = this.state.topics.filter(topic => {
      return topic.key !== key
    })
    this.setState({
      topics: filteredTopics,
    })
  }
  inputElement =React.createRef();

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <RetroColumn
            addTopic={this.addTopic}
            inputElement={this.inputElement}
            handleInput={this.handleInput}
            currentTopic={this.state.currentTopic}
            topics={this.state.topics}
            deleteTopic={this.deleteTopic}
          />
        </header>
      </div>
    );
  }
}

export default App;
