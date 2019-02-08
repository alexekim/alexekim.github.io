// import Component from './Component.js';

class Profile extends React.Component{
  constructor(props) {
    super(props);
    this.handleOnMouseOver = this.handleOnMouseOver.bind(this);
    this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
  }
  handleOnMouseOver(){
    document.getElementById('poweredByReact').style.visibility = "visible";
  }
  handleOnMouseLeave(){
    document.getElementById('poweredByReact').style.visibility = "hidden";
  }
  render(){
    const blurbsArray = [
      "I am a creative type that makes sure to enjoy what I do. I've found joy in engineering, being a cellist 🎻 (there's only a violin emoji), bike mechanic 🚲, and petting dogs 🐶.",
      "Currently the guy that does problem-solving, building all things web, and making things work at the American Lung Association. There, I've used a lot of JavaScript--including vanilla, jQuery, and React.",
      "This site was made for fun using React, ES6, Babel, Vue, jQuery, Sass, and of course HTML and CSS.",
      "I also make applications using NodeJS using AWS and Digital Ocean.",
      "At work, I use a ton of AJAX, promises async/await, and basic sorting functions."
    ];
    const blurbs = blurbsArray.map( (content, index) =>
      (
        <div key={index} className="blurb" id={"blurb"+index}>
          <h3>{content}</h3>
        </div>
      )
    );
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
          <div className="row" id="description">
            <div className="col s12 center">
              {blurbs}
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
        <Profile/>
      </div>
    )
  }
}

ReactDOM.render(<Container/>, document.getElementById("root"));
