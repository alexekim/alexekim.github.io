class Container extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div>
        <p>look a container</p>
      </div>
    )
  }
}

ReactDOM.render(<Container/>, document.getElementById("root"));
