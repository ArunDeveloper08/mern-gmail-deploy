import { useState } from "react";
import API from "../services/api";

const useApi = (urlObject) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const call = async (payload ,type ='') => {
    setResponse(null);
    setError("");
    setIsLoading(true);

    try {
      const res = await API(urlObject, payload,type);
  
      setResponse(res.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { call, error, isLoading, response };
};

export default useApi;
