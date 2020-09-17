import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import "./row.css";
import { useFetchData } from "./utils/hooks";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, largeRow }) {
  // bir diğer yöntem de custom hook oluşturup mümkün olduğunca her yerde onu kullanmak, merkezileştirme derken bu da dahil
  const movies = useFetchData(fetchUrl);
  // const [movies, setMovies] = useState([]);

  // bu fonksiyonu dışarı aldım ki ileriki aşamalarda yine bu component içinde aynı fonksiyonu kullanman gerekirse kullanabil diye
  // const fetchData = async () => {
  //   const response = await axios.get(fetchUrl);
  //   if (response.status === 200) {
  //     return setMovies(response.data.results);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, [fetchUrl]);

  // ilgili kategoride herhangi bir nedenle veri gelmediği durumda ekranda o kategori gösterilmeyecek
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
    </div>
  );
}

export default Row;
