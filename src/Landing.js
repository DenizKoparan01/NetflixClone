import React from "react";
import "./css/App.css";
import Row from "./Row";
import requests from "./requests";
import TopPoster from "./TopPoster";
import Nav from "./Nav";

const API_KEY = "a53a6b0df3e46ab7df87817d1869e4ea";

const categories = [
  {
    title: "Trending Now",
    url: `/trending/all/week?api_key=${API_KEY}`,
    large: true,
  },
  {
    title: "Action Movies",
    url: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    large: false,
  },
  {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}`,
    large: false,
  },
  {
    title: "Action Movies",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    large: false,
  },
  {
    title: "Comedy Movies",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    large: false,
  },
  {
    title: "Horror Movies",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    large: false,
  },
  {
    title: "Romance Movies",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    large: false,
  },
  {
    title: "Documentaries",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    large: false,
  },
];

function Landing() {
  return (
    <div className="app">
      <Nav />
      <TopPoster />
      {categories.map((category) => (
        <Row
          title={category.title}
          fetchUrl={category.url}
          largeRow={category.large}
        />
      ))}
    </div>
  );
}

export default Landing;
