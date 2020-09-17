import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import "./row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, largeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row_poster ${largeRow && "row_posterL"}`}
            src={`${base_url}${
              largeRow
                ? movie.poster_path
                : movie.backdrop_path == null
                ? movie.poster_path
                : movie.backdrop_path
            }`}
            alt={movie.name}
          ></img>
        ))}
      </div>
    </div>
  );
}

export default Row;