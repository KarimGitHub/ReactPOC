import React, { Component } from "react";
import Counter from "./counter";

class Components extends Component {
  state = {
    counters: [
      {
        id: 1,
        value: 0
      },
      {
        id: 2,
        value: 1
      },
      {
        id: 3,
        value: 3
      },
      {
        id: 4,
        value: 4
      }
    ]
  };

  handleDelete = counterId => {
    console.log(" Evene called ", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };
  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            value={counter.value}
            id={counter.id}
            selected={true}
            counter={counter}
          >
            <h4>Title</h4>
            <h4>Footer</h4>
          </Counter>
        ))}
      </div>
    );
  }
}
export default Components;
