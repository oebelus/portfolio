import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements,Route, RouterProvider } from "react-router-dom";
import {About, Blog, Misc, Now, Projects, Resume } from './utils/imports'
import App from './App.tsx'
import { HelmetProvider } from 'react-helmet-async';
import Contact from './pages/Contact.tsx';
import Drawings from './pages/Drawings.tsx';
import BlogPostPage from './pages/BlogPostPage.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' element={<About/>} />
      <Route path='projects' element={<Projects/>} />
      <Route path='blog' element={<Blog/>} />
      <Route path='blog/:postId' element={<BlogPostPage/>} />
      <Route path='resume' element={<Resume/>} />
      <Route path='now' element={<Now/>} />
      <Route path='misc' element={<Misc/>} />
      <Route path='misc/drawings' element={<Drawings/>} />
      <Route path='contact' element={<Contact/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>,
)
