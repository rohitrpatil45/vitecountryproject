import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import Header from "../components/Header.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layouts/Layout.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
