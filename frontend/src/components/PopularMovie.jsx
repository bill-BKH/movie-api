import Card from "./Card";
import { useEffect, useState } from "react";

function PopularMovie() {
  const [movieList, setMovieList] = useState([]);

 function getMovies() {
    fetch("http://127.0.0.1:8000/movie/list/")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setMovieList(data);
      });
  }

  useEffect(getMovies, []);


  return (
    <div className="row">
      <div className="col-3">
        <h1>{movieList}</h1>
        {/* {movieList.map((movie)=>{
          <Card title={movie.title} descriptoin={movie.story} rating={movie.rating}></Card>
        })
        } */}
      </div>
    </div>
  );
}

export default PopularMovie;
