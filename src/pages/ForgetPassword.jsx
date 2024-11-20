import { Player } from "@lottiefiles/react-lottie-player";
import forget from "../../public/forget.json";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useLocation } from "react-router-dom";

const ForgetPassword = () => {
  const { resetPassword } = useContext(AuthContext);
  const location = useLocation();

  const [email, setEmail] = useState(location?.state?.email || "");

  const handleForgetPassword = (e) => {
    e.preventDefault();
    resetPassword(email)
      .then((_result) => {
        window.open("https://mail.google.com", "_blank");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center min-h-screen p-6">
      <div className="card bg-white w-full max-w-md lg:max-w-lg shadow-lg rounded-lg p-6">
        <form onSubmit={handleForgetPassword} className="space-y-4">
          <h1 className="text-3xl font-bold text-center text-gray-700">
            Forget Password
          </h1>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-gray-600">
                Email
              </span>
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              defaultValue={email}
              placeholder="Enter your Email"
              className="input input-bordered"
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn bg-green-600 hover:bg-green-700 text-white w-full">
              Reset
            </button>
          </div>
        </form>
      </div>
      <div className="w-full lg:w-auto flex justify-center lg:ml-10 mt-8 lg:mt-0">
        <Player
          autoplay
          loop
          src={forget}
          className="w-64 h-64 lg:w-96 lg:h-96"
        ></Player>
      </div>
    </div>
  );
};

export default ForgetPassword;
