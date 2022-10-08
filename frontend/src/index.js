import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Initial from "./pages/initial"
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Skills from "./pages/skills";
import Rules from "./pages/rules";
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Initial />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cadastro",
    element: <SignUp />
  },
  {
    path: "/skills",
    element: <Skills />
  },
  {
    path: "/regras",
    element: <Rules />
  },
  {
    path: "/:raceName",
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
