import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import FirstPage from "./FirstPage";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Review from "./Review";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
       
        path: '/',
        element: <FirstPage />,
        loader:()=>fetch("tshirt.json")


      },
      {
       
        path: '/about',
        element:<About/>


      },
      {
       
        path: '/contact',
        element:<Contact/>


      },
      {
       
        path: '/service',
        element:<Service/>


      }
      ,
      {
       
        path: '/review',
        element:<Review/>


      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);