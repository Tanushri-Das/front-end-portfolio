import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Components/HomePage/HomePage";
import Main from "../Layouts/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
    ],
  },
]);
