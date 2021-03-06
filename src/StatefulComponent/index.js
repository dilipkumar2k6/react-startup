import React from 'react';
import ReactWithLifeCycle from './../ReactWithLifeCycle';
// This is also called Smart component
class StatefulComponent extends React.Component {

  constructor() {
    super();
    this.state = { counter: 0 }
  }
  handleClick() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    return (
      <div>
        <div>Hello { this.props.name }, Learning react :-)</div>
        <div>Counter: {this.state.counter} </div>
        <button onClick={this.handleClick.bind(this)}>Click to Increment</button>
        <ReactWithLifeCycle counter={this.state.counter}/>
      </div>
    )
  }

}

export default StatefulComponent;