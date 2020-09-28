import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import "./css/TopPoster.css";
import { useFetchData } from "./utils/hooks";

function TopPoster() {
  const [movie, setMovie] = useState([]);

  const movies = useFetchData(requests.fetchNetflixOriginals);

  useEffect(() => {
    if (Array.isArray(movies)) {
      setMovie(movies[Math.floor(Math.random() * movies.length - 1)]);
    }
  }, [movies]);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    // boyutu için
  }
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
        <div className="btns">
          <button className="btn">Play</button>
          <button className="btn">My List</button>
        </div>
        {/* button 2 */}
        <h1 className="desc">{truncate(movie?.overview, 150)}</h1>
        {/* descrip. */}
      </div>
      <div className="Bottom"></div>
    </header>
  );
}

export default TopPoster;
