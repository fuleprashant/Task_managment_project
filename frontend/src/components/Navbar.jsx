import { useState } from "react";
import { CiHome } from "react-icons/ci";
import { FaStarHalfAlt } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { GrMenu, GrClose } from "react-icons/gr";
import {
  MdIncompleteCircle,
  MdOutlineLabelImportant,
  MdTask,
} from "react-icons/md";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [userData] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    avatar: "https://example.com/avatar.jpg",
  });

  const [popup, setPopup] = useState(false);

  const handleClick = () => {
    setPopup(!popup);
  };

  const data = [
    {
      title: "Home",
      path: "/home",
      icon: <CiHome />,
    },
    {
      title: "All Tasks",
      path: "/alltasks",
      icon: <MdTask />,
    },
    {
      title: "Important Task",
      path: "/importanttask",
      icon: <MdOutlineLabelImportant />,
    },
    {
      title: "Completed Task",
      path: "/completetask",
      icon: <MdIncompleteCircle />,
    },
    {
      title: "Incompleted Task",
      path: "/incompletetask",
      icon: <FaStarHalfAlt />,
    },
  ];

  return (
    <div className="p-3 h-20 bg-blue-500">
      <div className="flex sm:flex-row items-center justify-between gap-4 ">
        {/* App Title */}
        <div className="block md:hidden ">
          <button onClick={handleClick}>
            {!popup ? <GrMenu size={30} /> : <GrClose size={30} />}
          </button>

          {popup && (
            <div
              className={`fixed top-[80px] left-0 h-full w-60 bg-slate-500 shadow-lg transform ${
                popup ? "translate-x-0" : "-translate-x-full"
              } transition-transform duration-300 ease-in-out z-50`}
            >
              <div className="p-5 flex flex-col h-full">
                <nav className="flex-1">
                  {data.map((ele, idx) => (
                    <div
                      key={idx}
                      className="hover:bg-slate-600"
                      onClick={() => setPopup(false)}
                    >
                      <NavLink to={ele.path}>
                        <div className="flex items-center flex-row gap-2 ml-4 p-2">
                          <div size={24}>{ele.icon}</div>
                          <h1 className="text-[20px]">{ele.title}</h1>
                        </div>
                      </NavLink>
                    </div>
                  ))}
                </nav>
                <div className="hover:bg-slate-600 mb-12">
                  <div className="ml-5 font-bold w-full">
                    <div className="p-3 flex gap-5 font-bold">
                      <FiLogOut size={30} />
                      <div className="text-2xl">Logout</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="hidden md:block text-2xl font-semibold text-center md:text-left">
          This is the task management web application
        </div>
        {/* User Profile */}
        <div className="flex items-center gap-3 md:gap-5 ">
          <div className="text-black text-sm md:text-lg">
            <div className="font-medium">{userData.name}</div>
            <div className="text-xs md:text-sm">{userData.email}</div>
          </div>
          <div className="flex-wrap">
            <img
              src={userData.avatar}
              alt="Profile"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
