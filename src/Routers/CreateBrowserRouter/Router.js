import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "../../Screens/Dashboard/Dashboard";
import Layout from "../../Screens/Layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
    ],
  },
]);
export default function Router() {
  return <RouterProvider router={router} />;
}
