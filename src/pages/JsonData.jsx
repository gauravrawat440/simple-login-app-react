import Navbar from "../shared/Navbar";
import { useState, useEffect } from "react";
import useFetch from "../customHooks/useFetch.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
const JsonData = () => {
  const [user, setUser] = useState();
  const { apiData } = useFetch("https://jsonplaceholder.typicode.com/users");
  useEffect(() => {
    setUser(apiData?.length > 0 ? apiData[0] : []);
  }, [apiData]);
  return (
    <div className="json-page">
      <Navbar />
      <div className="container-fluid d-flex justify-content-center">
        {user ? (
          <div className="card p-2 m-2" style={{ width: "18rem" }}>
            <FontAwesomeIcon icon={faUser} size="8x"/>
            <div className="card-body">
              <h5 className="card-title">{user.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{user.email}</h6>
              <h6 className="card-subtitle mb-2 text-muted">{user.phone}</h6>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default JsonData;
