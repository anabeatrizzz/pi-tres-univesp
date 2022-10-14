import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Initial from "./pages/initial"
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Skills from "./pages/skills";
import Rules from "./pages/rules";
import Class from "./pages/class";
import Race from "./pages/race";
import Profile from "./pages/profile";
import Support from "./pages/support";
import Characters from "./pages/characters";
import Character from "./pages/character";
import { ROUTES } from "./navigation/siteRoutes";
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <Initial />,
  },
  {
    path: ROUTES.LOGIN,
    element: <Login />,
  },
  {
    path: ROUTES.SIGNUP,
    element: <SignUp />
  },
  {
    path: ROUTES.SKILLS,
    element: <Skills />
  },
  {
    path: ROUTES.RULES,
    element: <Rules />
  },
  {
    path: ROUTES.RACE,
    element: <Race />
  },
  {
    path: ROUTES.CLASS,
    element: <Class />
  },
  {
    path: ROUTES.PROFILE,
    element: <Profile />
  },
  {
    path: ROUTES.SUPPORT,
    element: <Support />
  },
  {
    path: ROUTES.CHARACTERS,
    element: <Characters />
  },
  {
    path: ROUTES.CHARACTER,
    element: <Character />
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
