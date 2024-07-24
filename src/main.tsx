import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements,Route, RouterProvider } from "react-router-dom";
import {About, Blog, Misc, Projects } from './utils/imports'
import App from './App.tsx'
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' element={<About/>} />
      <Route path='projects' element={<Projects/>} />
      <Route path='blog' element={<Blog/>} />
      <Route path='misc' element={<Misc/>} />
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
