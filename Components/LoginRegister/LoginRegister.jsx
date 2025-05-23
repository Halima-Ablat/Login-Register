import { Link } from "react-router-dom";
import "./LoginRegister.css";
import { FaUser, FaLock } from "react-icons/fa";

function LoginRegister() {
  return (
    <div className="wrapper-container">
      <div className="form-container">
        <h1 className="text-center">Login</h1>
        <div className="input-container">
          <input type="text" placeholder="Username" required />
          <FaUser className="icon" />
        </div>
        <div className="input-container">
          <input type="password" placeholder="Password" required />
          <FaLock className="icon" />
        </div>
        <div className="d-flex justify-content-around">
          <label>
            <input className="me-2" type="checkbox" />
            Remember me
          </label>
          <a href="#" className=" text-white underline-text">
            Forgot password?
          </a>
        </div>
        <button className="mt-3">Login</button>
        <div className="d-flex justify-content-around mt-3">
          <p>Don't have an account?</p>
          <Link to={"/register"} className=" text-white fw-bold underline-text">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginRegister;
