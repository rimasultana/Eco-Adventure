import { useContext, useState } from "react";
import { HiMiniBarsArrowDown } from "react-icons/hi2";
import { GiCrossedBones } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navLink = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Update Profile", path: "/update-profile" },
  ];
  if (user) {
    navLink.push({ id: 3, name: "My Profile", path: "/my-profile" });
  }
  const links = navLink.map(({ id, name, path }) => (
    <li key={id}>
      <NavLink
        className={({ isActive }) =>
          `${
            isActive ? "border-b-2 text-green-600 border-green-600" : ""
          } font-medium px-2 py-2 rounded-md tracking-wide text-gray-700 transition-colors duration-1000 hover:text-deep-purple-accent-400`
        }
        to={path}
      >
        {name}
      </NavLink>
    </li>
  ));
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between">
        <Link to="/" className="inline-flex items-center">
          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
            Company
          </span>
        </Link>
        <ul className="lg:flex items-center hidden space-x-8">{links}</ul>
        <ul className=" items-center hidden space-x-8 lg:flex">
          {user && user ? (
            <li>
              <div className="avatar online">
                <div className="w-12 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </div>
            </li>
          ) : null}
          {!user ? (
            <li>
              <a
                href="/login"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md bg-deep-purple-accent-400 text-red-700 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                aria-label="Sign up"
                title="Sign up"
              >
                Login
              </a>
            </li>
          ) : (
            <li>
              <button
                onClick={() => logOut()}
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md bg-deep-purple-accent-400 text-red-700 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                aria-label="Sign up"
                title="Sign up"
              >
                Log Out
              </button>
            </li>
          )}
        </ul>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <HiMiniBarsArrowDown className="text-3xl font-bold" />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <a
                      href="/"
                      aria-label="Company"
                      title="Company"
                      className="inline-flex items-center"
                    >
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        Company
                      </span>
                    </a>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <GiCrossedBones />
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    {links}
                    <li>
                      <a
                        href="/login"
                        className="inline-flex text-red-800 items-center justify-center w-full h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                        aria-label="Sign up"
                        title="Sign up"
                      >
                        Login
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
