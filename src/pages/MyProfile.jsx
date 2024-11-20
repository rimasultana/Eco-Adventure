import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="pb-10 w-4/5 mx-auto bg-white">
      <h1 className="text-center text-3xl font-bold py-10">
        Welcome to {user?.displayName}
      </h1>
      <div className="flex flex-col-reverse md:flex-row  md:justify-center gap-5 ">
        <div>
          <h3 className="font-semibold py-2">Profile Picture</h3>
          <img
            className="w-80 rounded-full border-2 border-green-500"
            src={user?.photoURL}
            alt=""
          />
        </div>
        <div className=" card bg-base-100 w-full max-w-lg shrink-0">
          <h2 className="font-semibold">My Profile</h2>
          <div className="space-y-5 py-10">
            <div className="space-y-3">
              <span className="font-semibold ">Name</span>
              <p className="border-2 border-green-200 py-4 px-2 rounded-md">
                {user?.displayName}
              </p>
            </div>
            <div className="space-y-3">
              <span className="font-semibold">Email</span>
              <p className="border-2 border-green-200 py-4 px-2 rounded-md">
                {user?.email}
              </p>
            </div>

            <div className="form-control mt-6">
              <Link to={"/update-profile"} className="btn bg-green-500">
                Update Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
