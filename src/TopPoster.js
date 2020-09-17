import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import "./TopPoster.css";
import { useFetchData } from "./utils/hooks";

function TopPoster() {
  const [movie, setMovie] = useState([]);
  const movies = useFetchData(requests.fetchNetflixOriginals);

  useEffect(() => {
    if (Array.isArray(movies)) {
      setMovie(movies[Math.floor(Math.random() * movies.length - 1)]);
    }
  }, [movies]);

  return (
    <header
      className="general"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="content">
        {/* backround images */}
        <h1 className="title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        {/* title */}
        <div className="buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        {/* button 2 */}
        <h1 className="desc">{movie?.overview}</h1>
        {/* descrip. */}
      </div>
    </header>
  );
}

export default TopPoster;
