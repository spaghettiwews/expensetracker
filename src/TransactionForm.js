import React from "react";

class TransactionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: "",
      category: ""
    };
  }

  handleAmount = event => {
    this.setState({ amount: parseFloat(event.target.value) });
  };

  handleCategory = event => {
    this.setState({ category: event.target.value });
  };

  render() {
    return (
      <form
        onSubmit={event => {
          this.props.addTransaction(
            event,
            this.state.amount,
            this.state.category
          );
          this.setState({ amount: "", category: "" });
        }}
      >
        <label>
          <span>Amount:</span>
          <input
            type="number"
            placeholder="Amount e.g. 42.00"
            value={this.state.amount}
            onChange={this.handleAmount}
          />
        </label>
        <br />
        <label>
          <span>Category:</span>
          <select value={this.state.category} onChange={this.handleCategory}>
            {Object.keys(this.props.categories).map(category => (
              <option key={category} value={category}>
                {this.props.categories[category].name}
              </option>
            ))}
          </select>
        </label>
        <button
          disabled={
            this.state.category === "" || this.state.amount === ""
              ? true
              : false
          }
          type="submit"
        >
          Save Transaction
        </button>
      </form>
    );
  }
}

export default TransactionForm;
