import axios from "axios";
const API_KEY = "a53a6b0df3e46ab7df87817d1869e4ea";
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: API_KEY,
  },
});

export default instance;
