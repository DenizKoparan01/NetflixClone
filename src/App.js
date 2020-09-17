import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import TopPoster from "./TopPoster";

function App() {
  return (
    <div className="App">
      {/* nav , poster */}
      <TopPoster />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        largeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
