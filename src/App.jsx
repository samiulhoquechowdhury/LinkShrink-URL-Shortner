import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import LandingPage from "./Pages/LandingPage";
import Dashboard from "./Pages/Dashboard";
import Auth from "./Pages/Auth";
import Link from "./Pages/Link";
import RedirectLink from "./Pages/RedirectLink";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/,", element: <LandingPage /> },
      { path: "/dashboard,", element: <Dashboard /> },
      { path: "/auth,", element: <Auth /> },
      { path: "/link/:id,", element: <Link /> },
      { path: "/:id,", element: <RedirectLink /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
