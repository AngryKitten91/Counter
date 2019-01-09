import React, { Component } from "react";

import "./Button.scss";

import utils from "utils/utils";

export default class Button extends Component {
  render() {
    const { type, amount, fn } = this.props;
    return (
      <div className="button" onClick={() => fn(amount)}>{`${utils.capitalLeter(
        type
      )} ${!!amount ? amount : ""}`}</div>
    );
  }
}
