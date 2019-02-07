// import Component from './Component.js';

class Component extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    return(
        <p>look a container</p>
    );
  }
}

class Container extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div>
        <Component/>
      </div>
    )
  }
}

ReactDOM.render(<Container/>, document.getElementById("root"));
