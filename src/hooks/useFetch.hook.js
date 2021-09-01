import { useCallback, useState } from "react";

const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      try {
        setLoading(true);

        if (body) {
          body = JSON.stringify(body);
          headers["Content-Type"] = "application/json";
        }

        const response = await fetch(`http://topmail.net.ua:8081${url}`, {
          method,
          body,
          headers,
        });

        const result = response.json();
        if (!response.ok || result.error) throw new Error(result);

        setLoading(false);

        return result;
      } catch (e) {
        setLoading(false);
        console.error(e);
        setError(e);
      }
    },
    []
  );

  return { request, loading, error };
};

export default useFetch;
