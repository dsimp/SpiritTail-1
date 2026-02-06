import { useState, useEffect } from "react";

export default function useFetchId(id) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=${id}`)
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Network response was not ok");
        }
        return resp.json();
      })
      .then((data) => {
        setData(data.drinks); // Return the array of drinks
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError(err);
        setLoading(false);
      });
  }, [id]);

  return { data, loading, error };
}
