import React, { Component } from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";
import ItemAddForm from "../item-add-form";

import "./app.css";

export default class App extends Component {
  constructor() {
    super();

    this.maxId = 1;

    this.state = {
      todoData: [
        this.createTodoItem("Drink Coffe"),
        this.createTodoItem("Create React App"),
        this.createTodoItem("Upload React App on Git")
      ],
      term: "",
      filter: "all"
    };

    this.deleteItem = id => {
      this.setState(({ todoData }) => {
        const idx = todoData.findIndex(el => el.id === id);

        const newArray = [
          ...todoData.slice(0, idx),
          ...todoData.slice(idx + 1)
        ];

        return {
          todoData: newArray
        };
      });
    };

    this.addItem = text => {
      const newItem = this.createTodoItem(text);

      this.setState(({ todoData }) => {
        const newArr = [...todoData, newItem];

        return {
          todoData: newArr
        };
      });
    };

    this.onToggleDone = id => {
      this.setState(({ todoData }) => {
        return {
          todoData: this.toggleProperty(todoData, id, "done")
        };
      });
    };

    this.onToggleImportant = id => {
      this.setState(({ todoData }) => {
        return {
          todoData: this.toggleProperty(todoData, id, "important")
        };
      });
    };

    this.onSearchChange = term => {
      this.setState({
        term: term
      });
    };

    this.onFilterChange = name => {
      this.setState({
        filter: name
      });
    };
  }

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex(el => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  }

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    };
  }

  search(items, term) {
    if (term === "") {
      return items;
    }

    return items.filter(item =>
      item.label.toLowerCase().includes(term.toLowerCase())
    );
  }

  filter(items, filter) {
    switch (filter) {
      case "all":
        return items;
      case "active":
        return items.filter(el => {
          return !el.done;
        });
      case "done":
        return items.filter(el => {
          return el.done;
        });
      default:
        return items;
    }
  }

  render() {
    const { todoData, term, filter } = this.state;
    const visibleItems = this.filter(this.search(todoData, term), filter);

    const doneCount = todoData.filter(el => el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearchChange={this.onSearchChange} />
          <ItemStatusFilter
            filter={filter}
            onFilterChange={this.onFilterChange}
          />
        </div>
        <TodoList
          todos={visibleItems}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <ItemAddForm addItem={this.addItem} />
      </div>
    );
  }
}
