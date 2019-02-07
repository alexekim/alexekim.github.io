import Component from './Component.js';

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
