import React, { Component } from "react";
import "./App.scss";

import utils from "utils/utils";

import Button from "components/Button";
import CountContainer from "components/CountContainer";

const buttons = [
  {
    type: "add",
    amount: 1
  },
  {
    type: "substract",
    amount: 1
  },
  {
    type: "add",
    amount: 5
  },
  {
    type: "substract",
    amount: 5
  },
  {
    type: "reset",
    amount: null
  }
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    const localCount = utils.getItem("count");
    if (localCount === null) {
      this.setState({ count: 0 });
      utils.setItem("count", 0);
    } else {
      this.setState({ count: localCount });
    }
  }

  handleAdding = quantity => {
    this.setState(
      prev => {
        return {
          count: (prev.count += quantity)
        };
      },
      () => {
        const { count } = this.state;
        utils.setItem("count", count);
      }
    );
  };

  handleSubstracting = quantity => {
    this.setState(
      prev => {
        return {
          count: prev.count - quantity
        };
      },
      () => {
        const { count } = this.state;
        utils.setItem("count", count);
      }
    );
  };

  handleReset = () => {
    this.setState({ count: 0 });
    utils.setItem("count", 0);
  };

  render() {
    const {count} = this.state;
    return (
      <div className="container">
        <CountContainer count={count} />
        {buttons.map((elem, i) => {
          const { amount, type } = elem;

          if (type === "add") {
            return <Button key={i} type={type} amount={amount} fn={this.handleAdding} />;
          } else if (type === "substract"){
            return <Button key={i} type={type} amount={amount} fn={this.handleSubstracting} />;
          } else {
            return <Button key={i} type={type} fn={this.handleReset} />;
          }
          
        })}
      </div>
    );
  }
}
