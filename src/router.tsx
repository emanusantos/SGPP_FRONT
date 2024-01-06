import { Navigate, createBrowserRouter } from "react-router-dom";

import loadable from "@loadable/component";

const fallback = (
  <div className="w-screen h-screen flex justify-center items-center">
    Loading...
  </div>
);

const Login = loadable(() => import("./routes"), {
  resolveComponent: (component) => component.Login,
  fallback,
});

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="login" />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
