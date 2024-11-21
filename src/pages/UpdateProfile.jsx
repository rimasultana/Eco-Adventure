import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import updateAnimation from "../../public/update.json";

const UpdateProfile = () => {
  const navigate = useNavigate();
  const { updateUserProfile, user } = useContext(AuthContext);

  const handleUpdateProfile = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");

    updateUserProfile(name, photo)
      .then(() => {
        navigate("/my-profile");
      })
      .catch((error) => {
        console.log(error,"error");
      });
  };

  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center min-h-screen p-6">
      <div className="card bg-white w-full max-w-md lg:max-w-lg shadow-lg rounded-lg p-6">
        <form onSubmit={handleUpdateProfile} className="space-y-4">
          <h1 className="text-3xl font-bold text-center text-gray-700">
            Update Profile
          </h1>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-gray-600">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              defaultValue={user?.displayName}
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-gray-600">
                Photo URL
              </span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter photo URL"
              defaultValue={user?.photoURL}
              className="input input-bordered"
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn bg-green-600 hover:bg-green-700 text-white w-full">
              Update
            </button>
          </div>
        </form>
      </div>
      <div className="w-full lg:w-auto flex justify-center lg:ml-10 mt-8 lg:mt-0">
        <Player
          autoplay
          loop
          src={updateAnimation}
          className="w-64 h-64 lg:w-96 lg:h-96"
        ></Player>
      </div>
    </div>
  );
};

export default UpdateProfile;
