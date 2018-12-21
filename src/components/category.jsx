import React, { Component } from 'react'

class Category extends Component {
  createCategories = category => {
    return (
      <div key={category.key}>
        {category.text}
      </div>
    )
  }

  render() {
    const retroEntries = this.props.categories
    const listCategories = retroEntries.map(this.createCategories)

    return (
      <ul className="theList">{listCategories}</ul>
    )
  }
}

export default Category
