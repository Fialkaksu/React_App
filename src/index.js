import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const movie = {
  title: "Avengers: Infinity War",
  vote_average: 8.5,
  image:
    "https://lh3.googleusercontent.com/proxy/Gg6-tg_uXaommYBzn-hRHlXcUFtItcLGYSJIA6IXLrw_bkKPBN6tOcX8xhWV75ogYCh2O4z0RuBSE_pDObFGgHE3BxU8iEjsRL0Ca32qjPtQ3dp35i1GgtpUJE2UxpePaOv0R5htP3wAGQ",
  overview:
    "The Avengers and the Guardians of the Galaxy attempt to prevent Thanos from collecting the six all-powerful Infinity Stones as part of his quest to kill half of all life in the universe."
};

function Image(props) {
  // console.log("Image props ", props);
  //get from <Image src={image} alt={title} />
  return <img src={props.src} alt={props.title} width="100%" />;
}

// function MovieItem(props) {
//   console.log("MovieItem props ", props);
//   //destructurization
//   const {
//     data: { title, vote_average, image }
//   } = props;
//   return (
//     <div>
//       <Image src={image} alt={title} />
//       <p>{title}</p>
//       <p>{vote_average}</p>
//       {/*
//       <p>{props.title}</p>
//       <p>{props.vote_average}</p>
//       */}
//     </div>
//   );
// }

// MovieItem = new React.Component()
class MovieItem extends React.Component {
  constructor() {
    super();

    this.state = {
      show: false,
      like: false
    };
  }

  toggleOverview = () => {
    this.setState({
      show: !this.state.show
    });
  };

  handleLike = () => {
    this.setState({
      like: !this.state.like
    });
  };

  render() {
    const {
      data: { title, vote_average, image, overview }
    } = this.props;
    // console.log(this);
    console.log("state ", this.state);
    return (
      <div style={{ width: "300px" }}>
        <Image src={image} alt={title} />
        <p>{title}</p>
        <p>{vote_average}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button type="button" onClick={this.toggleOverview}>
            {this.state.show ? "Hide" : "Show"}
          </button>
          <button
            type="button"
            onClick={this.handleLike}
            className={this.state.like ? "btn--like" : ""}
          >
            Like
          </button>
        </div>
        {/* <button
          type="button"
          onClick={() => {
            console.log("hide");
            this.setState({
              show: false
            });
          }}
        >
          Hide
        </button> */}
        {this.state.show ? <p>{overview}</p> : null}
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <MovieItem data={movie} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
