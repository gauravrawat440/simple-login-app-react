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
        <div className="card p-2 m-2" style={{ width: "18rem" }}>
          <img src={userDetails.imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{userDetails?.fullName}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {userDetails?.email}
            </h6>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Home;
