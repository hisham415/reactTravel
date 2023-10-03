import "./App.css";
import React from "react";
import Dashboard from "./components/UI/Dashboard";
import Home from "./components/UI/Home";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
  },
]);

function App() {
  return (
    <div className="">
         <RouterProvider router={router} />
    </div>
  );
}

export default App;
