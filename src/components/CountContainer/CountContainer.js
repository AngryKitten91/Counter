import React, { Component } from "react";

import "./CountContainer.scss";

export default class CountContainer extends Component {
  render() {
    const { count } = this.props;
    return (
      <div className="countContainer o-flex">
        <div>{count}</div>
        <div>
          {count >= 0 ? (
            <i className="fas fa-thumbs-up" />
          ) : (
            <i className="fas fa-thumbs-down" />
          )}
        </div>
      </div>
    );
  }
}
