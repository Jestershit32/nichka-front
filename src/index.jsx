import React from 'react';
import ReactDOM from 'react-dom/client';
import './global-css/index.css';
// import { App } from './App';





import { HomePage } from "./pages/HomePage"
import { ProfilePage } from "./pages/ProfilePage"
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
  // Link,
} from "react-router-dom";


const BrowserRouter = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path="/" element={<HomePage />} />
    <Route path="profile/:id" element={<ProfilePage />} />
  </>
))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={BrowserRouter} />
  </React.StrictMode>
);

