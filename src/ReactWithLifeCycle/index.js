import React from 'react';

class ReactWithLifeCycle extends React.Component{

  constructor(){
    super();
    this.state={counter: 0};
  }

  componentWillMount(){
    console.log('Component will mount');
  }

  componentDidMount(){
    console.log('Component did mount');
  }

  componentWillReceiveProps(nextProps){
    console.log('componentWillReceiveProps', nextProps.counter )
  }

  shouldComponentUpdate(nextProps){
    console.log('shouldComponentUpdate', nextProps.counter )
    return true;
  }

  render(){
    console.log('Component render')
    return (<div>Hello render lifecycle: {this.props.counter}</div>)
  }

  componentWillUnmount(){
    console.log('Component will unmount');
  }


}

export default ReactWithLifeCycle;