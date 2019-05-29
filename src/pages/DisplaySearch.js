import React, { useState, useEffect } from "react";
import axios from "axios";

function DisplaySearch({ search }) {
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isFound, setIsFound] = useState();

  // Using useEffect to retrieve data from an API (similar to componentDidMount in a class)
  useEffect(() => {
    let isCurrent = true;
    const getMeter = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const { data } = await axios(`https://api.github.com/users/${search}`);
        setIsFound(true);
        if(!data.name) setIsFound(false);
        if (isCurrent) setResult(data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    // Invoke the async
    if (search) getMeter();
    return () => {
      setResult(null);
      setIsFound();
      isCurrent = false;
    };
  }, [search]); // Don't forget the `[]`, which will prevent useEffect from running in an infinite loop
  if (!search) return <span />;
  if (isError) return <div>Something went wrong...</div>;
  return (
    <>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <div>
          {!isFound ? (
            <span>Details Not Found</span>
          ) : (
            <span>{result && <span>{result.location}</span>}</span>
          )}
        </div>
      )}
    </>
  );
}

export default DisplaySearch;
