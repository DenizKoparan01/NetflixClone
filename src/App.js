import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import TopPoster from "./TopPoster";

/* 
buradaki row lara bir çare bulmamız gerekiyor, dinamik hale getirmek lazım api documentation ı kurcalamak gerek
ya da en kötü ihtimalle bir array yapısı oluşturup title ve api yi orada tanımlayabilir sonrasında aşağıda map edebiliriz

const categories = [
    {
      title: Trending Now,
      url: /trending/all/week?`,
      large: true
    },
    {
      title: Action Movies,
      url: /discover/movie?with_genres=28
    }
    .
    .
    .
    gibi
  ]

*/
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
