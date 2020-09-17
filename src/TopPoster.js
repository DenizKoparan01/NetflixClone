import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import "./TopPoster.css";

function TopPoster() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);
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
