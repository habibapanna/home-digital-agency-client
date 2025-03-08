import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main/Main.jsx';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Services from './pages/Services/Services.jsx';
import Contact from './pages/Contact/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <h1 className='text-red-500 text-5xl font-bold'>Page is not found</h1>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "about",
        element: <About></About>
      },
      {
        path: "services",
        element: <Services></Services>
      },
      {
        path: "Contact",
        element: <Contact></Contact>
      },

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
