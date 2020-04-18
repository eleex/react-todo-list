import React, { Component } from "react";

export default class ItemStatusFilter extends Component {
  constructor() {
    super();

    this.buttons = [
      { name: "all", label: "All" },
      { name: "active", label: "Active" },
      { name: "done", label: "Done" }
    ];
  }

  render() {
    const { filter, onFilterChange } = this.props;

    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;

      const classNames = isActive
        ? "btn btn-info"
        : "btn btn-outline-secondary";
      return (
        <button
          key={name}
          type="button"
          className={classNames}
          onClick={() => {
            onFilterChange(name);
          }}
        >
          {label}
        </button>
      );
    });

    return <div className="btn-group">{buttons}</div>;
  }
}
