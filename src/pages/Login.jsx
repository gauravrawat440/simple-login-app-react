/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../store/index";
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
    <section className="google-login-block">
      <div className="container-fluid p-4 d-flex flex-column align-items-center">
        <div className="sign-google">
          <div
            className="card text-center"
            style={{ width: "28rem", height: "50vh" }}
          >
            <div className="card-header">
              <h5>Login using your Google account</h5>
            </div>
            <div className="card-body">
              <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={handleLoginSuccess}
                onFailure={handleLoginFailure}
                cookiePolicy={"single_host_origin"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
