import axios from "axios";

// api key i buraya çektim çünkü bundan sonraki hiçbir isteğinde bu token ı apiye eklemek zorunda kalmaman için

// bu instance ı ileriki dönemde daha da geliştireceğiz, daha efektif kullanacağız response ve requestlerde şimdilik bu kadarı yeterli

const API_KEY = "a53a6b0df3e46ab7df87817d1869e4ea";
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: API_KEY,
  },
});

export default instance;
