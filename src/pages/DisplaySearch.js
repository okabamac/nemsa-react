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
        const { data } = await axios(
          `https://nemsa-backend.herokuapp.com/api/v1/verify/${search}`
        );
        setIsFound(true);
        if(!data) setIsFound(false);
        if (isCurrent) setResult(data.data);
      } catch (error) {
        if (error.response.data.status !== 404)
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
  const dateConvert = date => {
    date = new Date(date).toUTCString();
    date = date
      .split(" ")
      .slice(0, 4)
      .join(" ");
    return date;
  };
  return (
    <>
      {isLoading ? (
        <div>Searching ...</div>
      ) : (
        <div>
          {!isFound ? (
            <span>This meter does not exist</span>
          ) : (
            <span>
              {result && (
                <span className='resultTable'>
                  {
                    <table>
                      <thead>
                        <tr>
                          <th>Meter Number</th>
                          <th>Seal</th>
                          <th>Date of Routine Test</th>
                          <th>Expiry Date After Test</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{result.meter_number}</td>
                          <td>{result.seal}</td>
                          <td>
                            {dateConvert(result.date_of_routine_test)}
                          </td>
                          <td>{dateConvert(result.expiry_date_after_routine_test)}</td>
                        </tr>
                      </tbody>
                    </table>
                  }
                </span>
              )}
            </span>
          )}
        </div>
      )}
    </>
  );
}

export default DisplaySearch;
