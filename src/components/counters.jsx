import React, { Component } from "react";
import Subcounter from "./subcounter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleIncrement = counter => {
    console.log(counter);
  };

  handleReset = () => {
    const counters = this.state.counter.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters }); //创建一个新的counters
  };

  handleDelete = counterId => {
    //console.log("Event Handler Called", counterId);

    // 下面两行保证创建一个新的counters，去除了你想删除的那一个(由孩子component传来)
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
  };

  render() {
    return (
      <div>
        {/* <Subcounter />
        <Subcounter />
        <Subcounter />
        <Subcounter /> */}

        <button
          onClick={this.handleReset}
          className="button btn btn-primary btn-sm m-2"
        >
          Reset
        </button>

        {this.state.counters.map(counter => (
          //<Subcounter key={counter.id} value={counter.value} selected={true} />
          //此处传给subcounter这些子components 以value和selected
          <Subcounter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            // pass a handle function to child component Subcounter
            value={counter.value}
            id={counter.id}
          >
            {/* <h4>Title</h4> */}
            <h4>Counter #{counter.id}</h4>
            {/* 这部分在h4包起来的就是被当作contained components（这里是subcounter）的children */}
          </Subcounter>
        ))}
      </div>
    );
  }
}

export default Counters;
