import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "../../axios";

export const useFetchData = (url) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(url);
    if (response.status === 200) {
      return setData(response.data.results);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return data;
};
