import React, {Component} from 'react'
import RetroCategory from "./retro-category";

class Category extends Component {
  createCategories = category => {
    return (
      <div key={category.key}>
        {category.text}
        <RetroCategory
          addTopic={this.props.addTopic}
          inputTopicElement={this.inputTopicElement}
          handleTopicInput={this.props.handleTopicInput}
          currentTopic={this.props.currentTopic}
          topics={this.props.topics}
          deleteTopic={this.deleteTopic}
        />
      </div>
    )
  };

  render() {
    const retroEntries = this.props.categories;
    const listCategories = retroEntries.map(this.createCategories);

    return (
      <div>
        <ul className="theList">{listCategories}</ul>
      </div>
    )
  }
}

export default Category
