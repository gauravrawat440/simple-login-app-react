import Navbar from "../shared/Navbar";
import { useState, useEffect } from "react";
import useFetch from "../customHooks/useFetch.js";
const JsonData = () => {
  const [user, setUser] = useState();
  const { isLoading, serverError, apiData } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  useEffect(() => {
    setUser(apiData?.length > 0 ? apiData[0] : []);
  }, [apiData]);
  return (
    <div className="json-page">
      <Navbar />
      <div className="container-fluid">
        {user ? (
          <div className="user-details">
            <span>Name: {user.name}</span>
            <br />
            <span>email: {user.email}</span>
            <br />
            <span>phone: {user.phone}</span>
            <br />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default JsonData;
