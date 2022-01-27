import React, { Component } from 'react';

type CounterProps = {
  message: string;
};

type CounterState = {
  count: number;
};

// if we have no incoming props then we will add '{}' instead of CounterProps
// if we have no states defined then we will simply remove CounterState
class Counter extends Component<CounterProps, CounterState> {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Increment</button>
        {this.props.message} {this.state.count}
      </div>
    );
  }
}

export default Counter;
