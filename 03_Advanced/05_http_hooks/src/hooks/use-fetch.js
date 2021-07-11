import { useState, useEffect, useCallback } from "react";

const useFetch = (url, config = { method: "GET" }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fetchResponse, setFetchResponse] = useState("");

  const sendRequest = async (taskText) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(url, config);
      if (!response.ok) {
        throw new Error("Request Failed!");
      }
      const data = await response.json();
      setFetchResponse(data);
    } catch (err) {
      setError(err.message || "Something went wrong");
    }
  };

  useEffect(() => {
    sendRequest();
  }, []);

  return [fetchResponse];
};
export default useFetch;
