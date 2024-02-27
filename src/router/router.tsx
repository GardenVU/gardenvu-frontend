import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import App from "../layout/App";
import Dashboard from "../pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Navigate to="/dashboard" /> },
      { path: "/dashboard", element: <Dashboard /> },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);

const Router = () => (
  <>
    <RouterProvider router={router} />
  </>
);

export default Router;
