import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  //   // tags: [],
  //   //    imageUrl: "https://picsum.photos/200",
  // };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // handleIncrement = (product) => {
  //   console.log(product);
  //   this.setState({ value: this.state.value + 1 });
  // };

  // doHandleIncrement = () => {
  //   this.handleIncrement({ id: 1 });
  // };

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no tags!</p>;

  //   return (
  //     <ul>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  render() {
    return (
      <div>
        {/* <img src={this.state.imageUrl} alt="" /> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        {/* {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()} */}
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn bg-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "font-weight-bold badge m-2 p-2 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
