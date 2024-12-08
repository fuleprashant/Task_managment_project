import { Outlet } from "react-router-dom";

const FirstLayout = () => {
  return (
    <div className="flex flex-row h-screen bg-slate-800">
      <div className="hidden md:block w-60 bg-red-700">name A</div>
      <div className="flex flex-col flex-1">
        <div className="bg-sky-50 h-16">Name B</div>
        <div className="bg-purple-600 h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default FirstLayout;
