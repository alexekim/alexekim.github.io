// import Component from './Component.js';

class Component extends React.Component{
  constructor(props) {
    super(props);
    this.handleOnMouseOver = this.handleOnMouseOver.bind(this);
    this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
  }
  handleOnMouseOver(){
    document.getElementById('poweredByReact').style.display = "block";
  }
  handleOnMouseLeave(){
    document.getElementById('poweredByReact').style.display = "none";
  }
  render(){
    return(
        <div onMouseOver={this.handleOnMouseOver} onMouseLeave={this.handleOnMouseLeave} className="container">
          <div className="row">
            <div className="col s12 center">
            <h2>Web Developer</h2>
            </div>
          </div>
          <p id="poweredByReact" className="center">
            made with <i class="fab fa-react"></i> React.js!
          </p>
          <div className="row">
            <div className="col s12 center">
            <p>
              I am a creative type that makes sure to enjoy what I do. I've found joy in engineering, being a cellist 🎻 (there's only a violin emoji), bike mechanic 🚲, and petting dogs 🐶.
            </p>
            <p>
              Currently the guy that does problem-solving, building all things web, and making things work at the American Lung Association. There, I've used a lot of JavaScript--including vanilla, jQuery, and React.
            </p>
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
