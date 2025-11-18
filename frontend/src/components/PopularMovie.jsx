import Card from "./Card";
import { useEffect, useState } from "react";
import GhostCard from "./GhostCard";

function PopularMovie() {
  const [movieList, setMovieList] = useState(null);
  const [loading, setLoading] = useState(true);

  function getMovies() {
    setLoading(true)
    fetch("http://127.0.0.1:8000/movie/list/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setMovieList(data);
        setLoading(false);
      });
  }

  useEffect(getMovies, []);

  return (
    <div className="row">
      {/* <h1>{movieList&&movieList[0].title}</h1> */}
      {loading ? [...Array(4)].map(()=>(
        <GhostCard />
      )) :
        movieList &&
        movieList.map((movie) => (
          <div className="col-3">
            <Card
              title={movie.title}
              descriptoin={movie.story}
              rating={movie.rating}
              image={movie.image}
            ></Card>
          </div>
        ))
      }

    </div>
  );
}

export default PopularMovie;
