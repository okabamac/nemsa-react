import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import ContextConsumer from './Context';

export default function UserPage(props) {
  
  // Setting initial state
  const initialUserState = {
    user: {},
    loading: true
  };
   const theUser = useContext(ContextConsumer);

  // Getter and setter for user state
  const [user, setUser] = useState(initialUserState);

  // Using useEffect to retrieve data from an API (similar to componentDidMount in a class)
  useEffect(() => {
    const getUser = async () => {
      // Pass our param (:id) to the API call
      const { data } = await axios(
        `https://api.github.com/users/${props.match.params.id}`
      );

      // Update state
      setUser(data);
    };

    // Invoke the async function
    getUser();
  }, [props.match.params.id]); // Don't forget the `[]`, which will prevent useEffect from running in an infinite loop
  console.log('zzzzzzzzzzzzzzzzzzzzz');

  // Return a table with some data from the API.
  return user.loading ? (
    <div>Loading...</div>
  ) : (
    <div className="container"> 
      <h1>
        {props.match.params.id.charAt(0).toUpperCase() + 
          props.match.params.id.slice(1)}
      </h1>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Website</th>
            <th>Followers</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.name}</td>
            <td>{user.location}</td>
            <td>
              <a href={user.blog}>{user.blog}</a>
            </td>
            <td>{user.followers}</td>
            <td>{theUser.name}</td> 
          </tr>
        </tbody>
      </table>
    </div>
  );
}
