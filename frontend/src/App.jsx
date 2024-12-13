import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FirstLayout from "./layouts/FirstLayout";
import Home from "./pages/Home";
import AllTask from "./pages/AllTask";
import ImportantTask from "./pages/ImportantTask";
import CompletedTask from "./pages/CompletedTask";
import Incompleted from "./pages/Incompleted";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

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
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
