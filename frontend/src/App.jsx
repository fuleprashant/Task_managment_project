import {  createBrowserRouter, RouterProvider } from "react-router-dom";
import FirstLayout from "./layouts/FirstLayout";
import Home from "./pages/Home";
import AllTask from "./pages/AllTask";
import ImportantTask from "./pages/ImportantTask";
import CompletedTask from "./pages/CompletedTask";
import Incompleted from "./pages/Incompleted";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "",
      element: <FirstLayout />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/alltasks",
          element: <AllTask />,
        },
        {
          path: "/importanttask",
          element: <ImportantTask />,
        },
        {
          path: "/completetask",
          element: <CompletedTask />,
        },
        {
          path: "/incompletetask",
          element: <Incompleted />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
