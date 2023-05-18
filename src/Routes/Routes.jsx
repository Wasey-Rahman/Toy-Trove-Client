import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import LogIn from "../Layout/LogIn/LogIn";

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
          element:<div>all</div>
        },
        {
          path:"/Blogs",
          element:<div>Blo</div>
        }
      ]
    },
  ]);
  
  export default router;