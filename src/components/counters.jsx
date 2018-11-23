import React, { Component } from "react";
import Subcounter from "./subcounter";

class Counters extends Component {
  render() {
    return (
      <div>
        {/* <Subcounter />
        <Subcounter />
        <Subcounter />
        <Subcounter /> */}

        <button
          onClick={this.props.onReset}
          className="button btn btn-primary btn-sm m-2"
        >
          Reset
        </button>

        {this.props.counters.map(counter => (
          <Subcounter
            key={counter.id}
            onDelete={this.props.onDelete} //孩子创建了一个event，爸爸再创建一个event给爷爷
            onIncrement={this.props.onIncrement}
            counter={counter}
          />

          //此处传给subcounter这些子components 以value和selected
          // <Subcounter
          //   key={counter.id}
          //   onDelete={this.handleDelete}
          //   onIncrement={this.handleIncrement}
          //   // pass a handle function to child component Subcounter
          //   value={counter.value}
          //   id={counter.id}
          // >
          //   {/* <h4>Title</h4> */}
          //   <h4>Counter #{counter.id}</h4>
          //   {/* 这部分在h4包起来的就是被当作contained components（这里是subcounter）的children */}
          // </Subcounter>
        ))}
      </div>
    );
  }
}

export default Counters;
