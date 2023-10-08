import "./App.css";
import React, { createContext, useEffect, useMemo } from "react";
import Dashboard from "./components/UI/Dashboard";
import Home from "./components/UI/Home";
import * as firebase from "firebase/app";
import firebaseConfig from "./data/fireBase";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

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

export const databaseContext = createContext();
function App() {
 
  const app = useMemo(() => {
    return firebase.initializeApp(firebaseConfig);
  },[]);
  // useEffect(() => {
  //   // Initialize Firebase with the configuration
  //   firebase.initializeApp(firebaseConfig);
  // }, []);
  return (
    <div className="">
      <databaseContext.Provider value={app}>
        <RouterProvider router={router} />
      </databaseContext.Provider>
    </div>
  );
}

export default App;
