import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginAnimation from "../../public/login.json";
import { Player } from "@lottiefiles/react-lottie-player";

const Login = () => {
  const navigate = useNavigate();
  const { googleSignIn, userLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const [email, setEmail] = useState("");
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    setError("");

    userLogin(email, password)
      .then((_result) => {
        navigate(from);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

 

  const handleForgotPassword = () => {
    navigate("/forget", { state: { email } });
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((_result) => {
        navigate(from);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="flex flex-col lg:flex-row items-start justify-center min-h-screen p-6 bg-gray-100">
      <div className="card bg-white w-full lg:w-1/2 max-w-lg shadow-lg rounded-lg p-8">
        <form onSubmit={handleLogin} className="space-y-6">
          <h1 className="text-2xl font-semibold text-center text-gray-700">
            Login to Your Account
          </h1>
          {error && (
            <p className="text-red-600 text-center font-medium">{error}</p>
          )}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-600">Email</span>
            </label>
            <input onChange={(e)=>setEmail(e.target.value)} 
              type="email"
              placeholder="Enter your email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-600">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <button onClick={handleForgotPassword}
                className="label-text-alt link link-hover text-blue-500"
              >
                Forgot password?
              </button>
            </label>
          </div>
          <div className="form-control mt-4">
            <button className="btn bg-green-600 hover:bg-green-700 text-white w-full">
              Login
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <button
            onClick={handleGoogleLogin}
            className="btn bg-blue-500 hover:bg-blue-600 text-white font-bold w-full mb-4"
          >
            Login with Google
          </button>
          <p className="text-gray-600">
            Don&apos;t have an account?{" "}
            <Link className="text-red-600 font-medium" to={"/register"}>
              Register
            </Link>
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0">
        <Player
          autoplay
          loop
          src={loginAnimation}
          className="w-80 h-80 lg:w-[500px] lg:h-auto"
        ></Player>
      </div>
    </div>
  );
};

export default Login;
