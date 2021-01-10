import React from "react";
import useFetch from "./useFetch";

const usePost = (url, data) => {
  return useFetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  });
};

export default usePost;
