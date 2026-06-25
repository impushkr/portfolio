import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import Skills from "./components/Skills";
import Projects from "./components/ProjectCard.jsx";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./pages/Home.jsx"

import {createBrowserRouter,RouterProvider} from "react-router-dom"

const router = createBrowserRouter([
  {
  path: "/",
  element: <App/>,
  children: [
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/skills",
      element:<Skills/>
    },
    {
      path:"/projects",
      element:<Projects/>
    },
    {
      path:"/contact",
      element:<Contact/>
    }
  ]}

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
