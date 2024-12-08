import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const FirstLayout = () => {
  return (
    <div className="flex flex-row h-screen bg-slate-500">
      <div className="hidden md:block ">
        <Sidebar />
      </div>
      <div className="flex flex-col flex-1">
        <div className="bg-sky-50 h-16">
          <Navbar />
        </div>
        <div className="bg-purple-600 h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default FirstLayout;
