import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import LogIn from "../Layout/LogIn/LogIn";
import Register from "../Layout/Register/Register";
import Blogs from "../pages/Blogs/Blogs";
import AllToys from "../pages/Home/AllToys/AllToys";
import Not_Found from "../404_page/Not_Found";
import Toys_Details from "../pages/Toys_Details/Toys_Details";
import PrivateRoute from "./PrivateRoute";
import Add_A_Toy from "../pages/Add_A_Toy/Add_A_Toy";
import Single_Toy_Details from "../pages/Single_Toy_Details/Single_Toy_Details";

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
        },
        {
          path:"/toy/:_id",
          element:<PrivateRoute><Toys_Details></Toys_Details></PrivateRoute>,
          loader:({params})=>fetch(`http://localhost:5000/toy/${params._id}`)
        },
        {
          path:"Add_A_toy",
          element:<PrivateRoute><Add_A_Toy></Add_A_Toy></PrivateRoute>
        },
        {
          path:"/single toy details",
          element:<PrivateRoute><Single_Toy_Details></Single_Toy_Details></PrivateRoute>,
          
        }
      ]
    },
    {
      path:'*',
      element:<Not_Found></Not_Found>
    }
  ]);
  
  export default router;