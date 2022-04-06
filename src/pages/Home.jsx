/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import { getUserDetails } from "../utils/default.js";
import { useSelector } from "react-redux";

const Home = () => {
  const userDetailsString = useSelector((state) => state.userDetails);
  const [userDetails, setDetails] = useState({});
  useEffect(() => {
    let details = getUserDetails(userDetailsString);
    setDetails(details);
  }, []);
  return (
    <div className="home-page">
      <Navbar />
      <div className="container-fluid p-4 d-flex flex-column align-items-center">
        <div
          className="card text-center"
          style={{ width: "28rem", height: "50vh" }}
        >
          <div className="card-header">User Details</div>
          <div className="card-body">
            {userDetails?.fullName}
            <br />
            {userDetails?.email}
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Home;
