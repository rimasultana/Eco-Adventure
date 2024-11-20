import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import DynamicTitle from "../components/Title";

const MainLayout = () => {
  return (
    <>
      <DynamicTitle />
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-green-100 to-blue-100 ">
        <Outlet />
      </div>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
