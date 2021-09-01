import { useCallback, useState } from "react";

const useFetch = () => {
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const request = useCallback(async (url = "", method = "GET", body = {}) => {
    try {
      setLoading(true);
      const response = await fetch({ url, method, body, headers: {} });
      if (!response.ok) throw new Error();
      const result = response.json();
      setLoading(false);
      return result;
    } catch (e) {
      setLoading(false);
      console.error(e);
      setError(e);
    }
  }, []);

  return { request, loading, error };
};

export default useFetch;
