import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import "./css/row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import { useFetchData } from "./utils/hooks";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, largeRow }) {
  const movies = useFetchData(fetchUrl);
  const [trailerUrl, setTrailerUrl] = useState("");

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  console.log(movies);
  if (!movies.length) {
    return null;
  }

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row_poster ${largeRow && "row_posterL"}`}
            src={`${base_url}${
              largeRow
                ? movie.poster_path
                : movie.backdrop_path == null
                ? movie.poster_path
                : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
