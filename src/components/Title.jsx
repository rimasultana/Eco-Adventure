import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DynamicTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      "/": "Home - Discover Adventures",
      "/update-profile": "Update Your Profile",
      "/my-profile": "My Profile",
      "/details/:id": "Adventure Details",
      "/login": "Login - Access Your Account",
      "/register": "Register - Join Us",
    };

    const currentTitle = titles[location.pathname] || "Adventure Hub";
    document.title = currentTitle;
  }, [location]);

  return null;
};

export default DynamicTitle;
