import React, { Component } from "react";
import Counters from "./counters";

class Counter extends Component {
  state = {
    count: 0
    // count: this.props.value
    //tags: ["Apple", "Ball", "Chicken"]
  };

  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}> {tag} </li>
        ))}
      </ul>
    );
  }

  handleIncrement = product => {
    console.log("Product is ", product);
    // this.state.count++;
    // It tells to DOM that the state has changed to component
    this.setState({ count: this.state.count + 1 });
  };

  doHangleIncrement = () => {
    this.handleIncrement({ id: 1 });
  };
  styles = {
    fontSize: "5px",
    fontWeight: "bold"
  };
  render() {
    console.log(" render", this.props);
    return (
      <div>
        <h4>{this.props.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          // onClick={this.handleIncrement({ id: 1 })}
          onClick={() => {
            this.handleIncrement({ id: 1 });
          }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary ";
    return classes;
  }

  counterIncrement() {
    this.state.count++;
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : count;
  }
}

export default Counter;
