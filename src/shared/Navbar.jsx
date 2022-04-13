/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUserDetails } from "../utils/default.js";
import { GoogleLogout, useGoogleLogout } from "react-google-login";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../store/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import "../styles/navbar.css";
const Navbar = () => {
  const clientId = useSelector((state) => state.clientId);
  const dispatch = useDispatch();
  const userDetailsString = useSelector((state) => state.userDetails);
  const activeTab = useSelector((state) => state.activeTab);
  const [userDetails, setDetails] = useState({});
  const navigate = useNavigate();
  let count = 0;
  useEffect(() => {
    let inactivityInterval = setInterval(() => {
      if (count > 59) {
        let val = window.confirm("do you want to continue?");
        if (!val) {
          clearInterval(inactivityInterval);
          signOut();
        } else {
          count = 0;
        }
      } else {
        count++;
      }
    }, 1000);
    return () => {
      clearInterval(inactivityInterval);
    };
  }, []);
  useEffect(() => {
    let details = getUserDetails(userDetailsString);
    setDetails(details);
  }, []);
  const handleLogoutSuccess = (res) => {
    alert("You have successfully signed out of the application");
    localStorage.removeItem("userDetails");
    dispatch(actions.setUserDetails(""));
    navigate("/");
  };
  const setActiveTab = (tab = "home") => {
    dispatch(actions.setActiveTab(tab));
  };
  const onFailure = () => {
    alert("Logout failed please try again.");
  };
  const { signOut } = useGoogleLogout({
    clientId: clientId,
    onLogoutSuccess: handleLogoutSuccess,
    onFailure: onFailure,
  });
  return (
    <div style={{ width: "100%" }}>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand px-2" href="#">
            <FontAwesomeIcon icon={faUserAstronaut} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav" style={{ width: "100%" }}>
              <li
                className="nav-item col-1"
                onClick={(e) => setActiveTab("home")}
              >
                <Link
                  className={
                    activeTab === "home" ? "nav-link active" : "nav-link"
                  }
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li
                className="nav-item col-1"
                onClick={(e) => setActiveTab("table")}
              >
                <Link
                  className={
                    activeTab === "table" ? "nav-link active" : "nav-link"
                  }
                  to="/table"
                >
                  Table
                </Link>
              </li>
              <li
                className="nav-item col-1"
                onClick={(e) => setActiveTab("jsondata")}
              >
                <Link
                  className={
                    activeTab === "jsondata" ? "nav-link active" : "nav-link"
                  }
                  to="/jsondata"
                >
                  JSON Data
                </Link>
              </li>
              <li className="nav-item col-7"></li>
              <li className="nav-item dropdown col-2">
                <span
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  {userDetails?.email}
                </span>
                <ul className="dropdown-menu" style={{ cursor: "pointer" }}>
                  <li>
                    <span className="dropdown-item">
                      {" "}
                      <GoogleLogout
                        clientId={clientId}
                        render={(renderProps) => (
                          <span
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                          >
                            Logout
                          </span>
                        )}
                        buttonText="Logout"
                        onLogoutSuccess={handleLogoutSuccess}
                      ></GoogleLogout>
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
