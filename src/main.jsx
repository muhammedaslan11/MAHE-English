import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./Pages/HomePage/HomePage.jsx";
import { UserPage } from "./Pages/UserPage/UserPage.jsx";
import UserSettings from "./Pages/UserSettings/UserSettings.jsx";
import UserStats from "./Pages/UserStats/UserStats.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/homepage",
    element: <HomePage />,
  },
  {
    path: "/userinfo",
    element: <UserPage />,
  },
  {
    path: "/usersettings",
    element: <UserSettings />,
  },
  {
    path: "/userstats",
    element: <UserStats />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
