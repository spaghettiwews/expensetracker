import React from "react";
import "./App.css";
import Header from "./Header";
import CategoryForm from "./CategoryForm";
import TransactionForm from "./TransactionForm";
import Transactions from "./Transactions";
import StackedBarChart from "./StackedBarChart";
import { saveToLocal, getFromLocal, makePeriod } from "./helpers";
import shortid from "shortid";
import { siteVariables } from "./siteConfig";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = getFromLocal("sixpence");
  }

  addCategory = (event, category, type) => {
    event.preventDefault();
    const newCategory = {
      name: category.toLowerCase(),
      type: type.toLowerCase()
    };
    const updatedCategories = this.state.categories;
    updatedCategories[category.toLowerCase()] = newCategory;
    this.setState({ categories: updatedCategories });
    saveToLocal("sixpence", this.state);
  };

  addTransaction = (event, amount, category) => {
    event.preventDefault();
    const updatedTransactions = this.state.transactions;
    const newTransaction = {
      id: shortid.generate(),
      amount,
      category: category.toLowerCase(),
      timestamp: Date.now(),
      type: this.state.categories[category].type
    };
    if (updatedTransactions[makePeriod(Date.now())] === undefined) {
      updatedTransactions[makePeriod(Date.now())] = [];
    }
    updatedTransactions[makePeriod(Date.now())].push(newTransaction);
    this.setState({ transactions: updatedTransactions });
    saveToLocal("sixpence", this.state);
  };

  render() {
    return (
      <div className="App">
        <Header
          title={siteVariables.sitename}
          tagline={siteVariables.tagline}
        />
        <div className="column column--single">
          <h3>Create new transaction</h3>
          <TransactionForm
            categories={this.state.categories}
            addTransaction={this.addTransaction}
          />
          <h3>Create new category</h3>
          <CategoryForm addCategory={this.addCategory} />
        </div>
        <div className="column column--single">
          <h3>Transaction history</h3>
          <Transactions transactions={this.state.transactions} />
        </div>
        <div className="column column--last">
          <h3>Visualisations</h3>
          <StackedBarChart data={this.state.transactions} />
        </div>
      </div>
    );
  }
}

export default App;
