import React, {Component} from 'react'

class CreateCategory extends Component {
  componentDidUpdate() {
  }

  render() {
    return (
      <form onSubmit={this.props.addCategory}>
        <input
          placeholder="Category"
          ref={this.props.inputCategoryElement}
          value={this.props.currentCategory.text}
          onChange={this.props.handleCategoryInput}
        />
        <button type="submit"> Add Category</button>
      </form>
    )
  }
}

export default CreateCategory
