import React, { Component } from "react";

// this file is created and written

class Counter extends Component {
  //state object includes any data this component needs

  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"]
    //tags: []
  };

  //called when the class is created
  //   constructor() {
  //     super();
  //     //console.log("constructor", this);
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  //this is an event handler, 此处的arrow function => 用于bind event handlers
  handleIncrement = () => {
    //console.log("Increment Clicked", this);
    //this.state.count++;

    /* 
       bind event之后就可以 explicitely notify the react the change
       setState告诉react this component is going to change
       react will call render again
    */
    //console.log(product);
    this.setState({ count: this.state.count + 1 }); //updating the state
  };

  /* insert some CSS properties in styles */
  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };

  render() {
    return (
      <div>
        {/*

           div 里还可有<h1>Hello World</h1>这一个jsx表达式

           <span>{this.state.count}</span>
           
           <span>{2 + 2}</span>
           
           <img src={this.state.imageUrl} alt="" srcset="" />
           
           <span>{this.formatCount()}</span>
           
           <span style={this.styles} className="badge badge-primary m-2">
          {this.formatCount()}
           </span>

           <span style={{ fontSize: 30 }} className="badge badge-primary m-2">
          {this.formatCount()}
        </span>
           此处的badge badge-primary 是bootstrap的classes

        {this.state.tags.length === 0 && "please create a new tag"}
        here this string can be any JSX expression 

        {this.renderTags()}
           
        */}

        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

        <button
          onClick={this.handleIncrement} //此处的handling event不能加（）
          //onClick={product => this.handleIncrement(product)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  //conditional rendering
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {/*here we use the map method to render a list of items */}
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    //here we use bootstrap classes badge-warning/ badge-primary
    return classes;
  }

  formatCount() {
    const count = this.state; //如果这里运行出错，则给count把{}加上
    //const x = <h1>Zero</h1>;
    //return count === 0 ? <h1>Zero</h1> : count;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
