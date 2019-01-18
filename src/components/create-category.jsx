import React, {Component} from 'react'

class CreateCategory extends Component {
  componentDidUpdate() {
  }

  render() {
    return (
      <div>
        <input
          placeholder="Category"
          ref={this.props.inputCategoryElement}
          value={this.props.currentCategory.text}
          onChange={this.props.handleCategoryInput}
        />
        <button type="button" onClick={this.props.addCategory}> Add Category</button>
      </div>
    )
  }
}

export default CreateCategory
