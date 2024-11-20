import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import RegistrationAnimation from "../../public/registetion.json";
import { Player } from "@lottiefiles/react-lottie-player";

const Register = () => {
  const navigate = useNavigate();
  const { createUser, googleSignIn, updateUserProfile } =
    useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");

    setError("");
    setPasswordError("");
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const isLongEnough = password.length >= 6;
    if (!hasUppercase) {
      setPasswordError("Password must contain at least one uppercase letter.");
      return;
    }
    if (!hasLowercase) {
      setPasswordError("Password must contain at least one lowercase letter.");
      return;
    }
    if (!isLongEnough) {
      setPasswordError("Password must be at least 6 characters long.");
      return;
    }
    createUser(email, password)
      .then((result) => {
        updateUserProfile(name, photo)
          .then(() => {
            navigate(from);
          })
          .catch((error) => setError(error.message));
      })
      .catch((error) => setError(error.message));
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then(() => {
        navigate(from);
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start justify-center min-h-screen p-4 bg-gray-50">
      <div className="card bg-white w-full lg:w-1/2 max-w-lg shadow-lg rounded-lg p-6">
        <form onSubmit={handleRegister} className="card-body space-y-2">
          <h1 className="text-2xl font-semibold text-center text-gray-700">
            Register Your Account
          </h1>
          {error && (
            <p className="text-red-600 text-center font-medium">{error}</p>
          )}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-600">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-600">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-600">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              name="photo"
              className="input input-bordered"
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text text-gray-600">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              name="password"
              className="input input-bordered"
              required
            />
            <button
              type="button"
              className="absolute right-4 top-12 text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "👁️" : "👁️‍🗨️"}
            </button>
            {passwordError && (
              <p className="text-red-600 text-sm mt-1">{passwordError}</p>
            )}
          </div>
          <div className="form-control mt-4">
            <button className="btn bg-green-600 hover:bg-green-700 text-white">
              Register
            </button>
          </div>
        </form>
        <div className="text-center mt-0">
          <button
            onClick={handleGoogleLogin}
            className="btn bg-blue-500 hover:bg-blue-600 text-white font-bold w-full mb-3"
          >
            Login with Google
          </button>
          <p className="text-center text-gray-600">
            Already have an account?{" "}
            <Link className="text-red-700 font-medium" to={"/login"}>
              Login
            </Link>
          </p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
        <Player
          autoplay
          loop
          src={RegistrationAnimation}
          className="w-80 h-80 lg:w-[600px] lg:h-auto"
        ></Player>
      </div>
    </div>
  );
};

export default Register;
