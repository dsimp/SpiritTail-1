import { useState, useEffect } from "react";

export default function useFetchId(id) {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    if (id !== "")
      fetch(`www.thecocktaildb.com/images/ingredients/${id}-Medium.png`).then(
        (resp) => {
          setDetails(resp);
        }
      );
  }, [id]);

  console.log(details);

  return { details };
}
