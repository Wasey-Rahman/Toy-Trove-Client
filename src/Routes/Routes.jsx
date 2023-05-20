import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import LogIn from "../Layout/LogIn/LogIn";
import Register from "../Layout/Register/Register";
import Blogs from "../pages/Blogs/Blogs";
import AllToys from "../pages/Home/AllToys/AllToys";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>

        },
        {
          path:'/login',
          element:<LogIn></LogIn>
        },
        {
          path:'/AllToys',
          element:<AllToys></AllToys>
        },
        {
          path:"/Blogs",
          element:<Blogs></Blogs>
        },
        {
          path:"/registration",
          element:<Register></Register>
        }
      ]
    },
  ]);
  
  export default router;