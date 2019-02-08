// import Component from './Component.js';

class Component extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    return(
        <div className="container">
          <div className="row">
            <div className="col s12">
            <h2>Web Developer &amp; Cellist</h2>
            </div>
          </div>
        </div>
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
