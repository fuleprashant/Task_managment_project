import { useState } from "react";
import { BiAlignRight } from "react-icons/bi";
import { CiHome } from "react-icons/ci";
import { MdTask } from "react-icons/md";
import { MdOutlineLabelImportant } from "react-icons/md";
import { MdIncompleteCircle } from "react-icons/md";
import { FaStarHalfAlt } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [popup, setPopup] = useState(true);
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

  const handlePopup = () => {
    setPopup(!popup);
  };

  return (
    <div
      className={` flex flex-col justify-between h-screen ${
        popup ? "w-[250px]" : "w-[70px]"
      }
`}
    >
      <div>
        <div className="flex justify-between">
          {popup && <div className="p-2 text-2xl">Tasks</div>}
          <div className="text-3xl p-3" onClick={handlePopup}>
            <BiAlignRight />
          </div>
        </div>
        <hr className="border-black text-2xl" />
      </div>
      <div className="space-y-5 font-bold  w-full ">
        {data.map((ele, idx) => (
          <div key={idx} className="hover:bg-slate-600">
            <NavLink to={ele.path}>
              <div className="text-3xl flex gap-2 ml-4 p-2  ">
                <div size={24}>{ele.icon}</div>
                {popup && <h1 className="text-[20px]">{ele.title}</h1>}
              </div>
            </NavLink>
          </div>
        ))}
      </div>
      <div className="hover:bg-slate-600  mb-4">
        <div className=" ml-5  font-bold  w-full">
          <div className=" ">
            <div className=" p-3 flex gap-5 font-bold  ">
              <FiLogOut size={30} />
              {popup && <div className="text-2xl">Logout</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
