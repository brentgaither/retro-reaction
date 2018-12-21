import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RetroCategory from "./components/retro-category";
import CreateCategory from "./components/create-category";
import Category from "./components/category";

class App extends Component {
  constructor() {
    super()
    this.state = {
      topics: [],
      currentTopic: {text:'', key:''},
      categories: [],
      currentCategory: {text:'', key:''}
    }
  }
  handleTopicInput = e => {
    const topicText = e.target.value
    const currentTopic = { text: topicText, key: Date.now() }
    this.setState({
      currentTopic,
    })
  }

  handleCategoryInput = e => {
    const categoryText = e.target.value
    const currentCategory = { text: categoryText, key: Date.now() }
    this.setState({
      currentCategory,
    })
  }

  addTopic = e => {
    e.preventDefault()
    const newTopic = this.state.currentTopic
    if (newTopic.text !== '') {
      const topics = [...this.state.topics, newTopic]
      this.setState({
        topics: topics,
        currentTopic: { text: '', key: '' },
      })
    }
  }

  addCategory = e =>{
    e.preventDefault()
    const newCategory = this.state.currentCategory
    if (newCategory.text !== '') {
      const categories = [...this.state.categories, newCategory]
      this.setState({
        categories: categories,
        currentCategory: { text: '', key: '' },
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
  inputTopicElement =React.createRef();
  inputCategoryElement =React.createRef();


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <CreateCategory
            addCategory={this.addCategory}
            inputCategoryElement={this.inputCategoryElement}
            handleCategoryInput={this.handleCategoryInput}
            currentCategory={this.state.currentCategory}
            categories={this.state.categories}
          />
          <Category
            categories={this.state.categories}
          />
          <RetroCategory
            addTopic={this.addTopic}
            inputTopicElement={this.inputTopicElement}
            handleTopicInput={this.handleTopicInput}
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
