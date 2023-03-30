import React from 'react';
import ReactDOM from 'react-dom/client';
import './global-css/index.css';

import { Provider } from 'react-redux'
import { store } from "./redux";

import { HomePage } from "./pages/HomePage"
import { ProfilePage } from "./pages/ProfilePage"
import { PostPage } from './pages/PostPage'
import { LoginPage } from './pages/LoginPage'
import { ErrorPage } from './pages/ErrorPage';
import { AddPostPage } from "./pages/AddPostPage"
import { EditPostPage } from "./pages/EditPostPage"
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";







const BrowserRouter = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path="/" element={<HomePage />} errorElement={<ErrorPage />} />
    <Route path="home-page" element={<HomePage />} errorElement={<ErrorPage />} />
    <Route path="post/:id" element={<PostPage />} errorElement={<ErrorPage />} />
    <Route path="login" element={<LoginPage />} errorElement={<ErrorPage />} />
    <Route path="profile/:id" element={<ProfilePage />} errorElement={<ErrorPage />} />
    <Route path="create" element={<AddPostPage />} />
    <Route path="404" element={<ErrorPage />} />
    <Route path="edit/:id" element={<EditPostPage />} />

  </>
))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={BrowserRouter} />
  </Provider>
  // </React.StrictMode >
);

