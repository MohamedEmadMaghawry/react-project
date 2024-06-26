import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './pages/home';
import Html from './pages/html';
import Css from './pages/css';
import Javascript from './pages/javascript';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <h1>Page does not Exist</h1>
  },
  {
    path: "html",
    element: <Html/>,
  },
  {
    path: "css",
    element: <Css/>,
  },
  {
    path: "javascript",
    element: <Javascript/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<RouterProvider router={router} />
  </React.StrictMode>
);

