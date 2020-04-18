import React, { Component } from "react";

import "./search-panel.css";

export default class SearchPanel extends Component {
  constructor() {
    super();

    this.state = {
      term: ""
    };

    this.onSearchChange = evt => {
      const term = evt.target.value;
      this.setState({
        term: term
      });
      this.props.onSearchChange(term);
    };
  }

  render() {
    const placeholderText = "type to search";

    return (
      <input
        type="text"
        placeholder={placeholderText}
        className="form-control search-input"
        onChange={this.onSearchChange}
        value={this.state.term}
      />
    );
  }
}
