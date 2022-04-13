/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../store/index";
import "../styles/style.css";
import LoginImg from "../login.jpg";
const LoginPage = () => {
  const dispatch = useDispatch();
  const clientId = useSelector((state) => state.clientId);
  const navigate = useNavigate();
  const handleLoginSuccess = (res) => {
    dispatch(actions.setUserDetails(JSON.stringify(res)));
    localStorage.setItem("userDetails", JSON.stringify(res));
    navigate("/home");
  };
  const handleLoginFailure = (res) => {};
  return (
    <div className="container-fluid p-o" style={{ height: "100vh" }}>
      <div className="row" style={{ height: "100%" }}>
        <div className="col-lg-7">
          <img className="login-image-block" src={LoginImg} />
        </div>
        <div className="col-lg-5 d-flex flex-column justify-content-center align-items-center">
          <div className="py-4">
            <h4>Welcome to Simple Login App</h4>
          </div>
          <div className="signin-block">
            <GoogleLogin
              clientId={clientId}
              buttonText="Sign in with Google"
              onSuccess={handleLoginSuccess}
              onFailure={handleLoginFailure}
              cookiePolicy={"single_host_origin"}
              isSignedIn={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
