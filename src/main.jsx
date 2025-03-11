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
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import AuthProvider from './context/AuthProvider.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import AddPage from './pages/AddPage/AddPage.jsx';
import EditPage from './pages/EditPage/EditPage.jsx';
import AllUsers from './pages/AllUsers/AllUsers.jsx';

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
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Register></Register>
      },
      {
        path: "dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
      },
      {
        path: "/dashboard/add",
        element: <AddPage></AddPage>
      },
      {
        path: "/dashboard/edit",
        element: <EditPage></EditPage>
      },
      {
        path: "/dashboard/all-users",
        element: <AllUsers></AllUsers>
      },

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </StrictMode>,
)
