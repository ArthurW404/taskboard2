import { useState, useEffect } from "react";

const useFetch = (url, options = {}) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(url, options)
      .then((resp) => resp.json())
      .then((data) => setData(data))
      .catch((err) => console.log("error: " + err));
  }, []);

  return data;
};

export default useFetch;
