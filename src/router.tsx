import { Navigate, createBrowserRouter } from "react-router-dom";

import loadable from "@loadable/component";

const fallback = (
  <div className="w-screen h-screen flex justify-center items-center">
    Loading...
  </div>
);

const NotFound = loadable(() => import("./routes/NotFound"), {
  resolveComponent: (component) => component.NotFound,
  fallback,
});

const Login = loadable(() => import("./routes/Login"), {
  resolveComponent: (component) => component.Login,
  fallback,
});

const Teams = loadable(() => import("./routes/Teams"), {
  resolveComponent: (component) => component.Teams,
  fallback,
});

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="login" />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/teams",
    element: <Teams />,
  },
]);
