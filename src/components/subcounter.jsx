import React, { Component } from "react";

// this file is created and written

class Subcounter extends Component {
  //state object includes any data this component needs
  state = {
    value: this.props.value
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    console.log("props", this.props); //此处的pros是从上一级counters.jsx传过来的

    return (
      <div>
        {/* {this.props.children} */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

        <button
          onClick={this.handleIncrement} //此处的handling event不能加（）
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.id)}
          // if you want to delete the counter, you should go to the components who owns this counter
          // the component that owns a piece of the state, should be the one modifying it.
          // 因此，应该subcounter raise一个onDelete的event给counters，
          // 然后counters要有一个handleDelete() event来处理
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    //here we use bootstrap classes badge-warning/ badge-primary
    return classes;
  }

  formatCount() {
    const count = this.state.value; //这里的count不能带个{}
    //const x = <h1>Zero</h1>;
    //return count === 0 ? <h1>Zero</h1> : count;
    return count === 0 ? "Zero" : count;
  }
}

export default Subcounter;
