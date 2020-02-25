import React from "react";

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      category: "",
      type: ""
    };

    this.handleCategory = this.handleCategory.bind(this);
    this.handleType = this.handleType.bind(this);
  }

  handleCategory = event => {
    event.preventDefault();
    this.setState({ category: event.target.value });
  };

  handleType = event => {
    event.preventDefault();
    this.setState({ type: event.target.value });
  };

  render() {
    return (
      <form
        onSubmit={event => {
          this.props.addCategory(event, this.state.category, this.state.type);
          this.setState({ category: "", type: "" });
        }}
      >
        <label>
          <span>Category name:</span>
          <input
            type="text"
            placeholder="Category name e.g. Rent"
            value={this.state.category}
            onChange={this.handleCategory}
          />
        </label>
        <br />
        <label>
          <span>Category type:</span>
          <select value={this.state.type} onChange={this.handleType}>
            <option value="">choose type</option>
            <option value="expense">expense</option>
            <option value="income">income</option>
          </select>
        </label>
        <br />
        <button
          disabled={
            this.state.category === "" || this.state.type === "" ? true : false
          }
          type="submit"
        >
          Save Category
        </button>
      </form>
    );
  }
}

export default CategoryForm;
