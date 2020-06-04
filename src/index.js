import React from "react";
import ReactDOM from "react-dom";

const movie = {
  title: "Avengers: Infinity War",
  vote_average: 8.5,
  image:
    "https://upload.wikimedia.org/wikipedia/ru/thumb/4/4d/Avengers_Infinity_War_poster.jpg/306px-Avengers_Infinity_War_poster.jpg",
  overview:
    "The Avengers and the Guardians of the Galaxy attempt to prevent Thanos from collecting the six all-powerful Infinity Stones as part of his quest to kill half of all life in the universe."
};

function Image(props) {
  // console.log("Image props ", props);
  //get from <Image src={image} alt={title} />
  return <img src={props.src} alt={props.title} />;
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
      show: false
    };
  }

  render() {
    const {
      data: { title, vote_average, image, overview }
    } = this.props;
    console.log(this);
    console.log("state ", this.state);
    return (
      <div>
        <Image src={image} alt={title} />
        <p>{title}</p>
        <p>{vote_average}</p>
        <button
          type="button"
          onClick={() => {
            console.log("show");
            this.setState({
              show: true
            });
          }}
        >
          Show
        </button>
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
