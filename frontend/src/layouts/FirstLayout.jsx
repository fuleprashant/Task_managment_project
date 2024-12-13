import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const FirstLayout = () => {
  return (
    <div className="flex flex-row h-screen  bg-slate-200">
      <div className="hidden md:block h-screen    ">
        <Sidebar />
      </div>
      <div className="flex flex-col h-screen flex-1 overflow-hidden">
        <div className="bg-red-500 border-collapse border-b border-gray ">
          <Navbar />
        </div>
        <div className="bg-slate-600 overflow-auto h-screen">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default FirstLayout;
