import { createBrowserRouter } from "react-router-dom";
import Main   from ".././Main/Main"
import Home from ".././Pages/Hompage/Home"
import Contact from "../Pages/Contact/Contact";
import Projects from "../Pages/Projects/Projects";

const routs=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
            path:'/',
            element:<Home></Home>
             },
             {
                path:"/home",
                element:<Home></Home>
             },{
                path:"/projects",
                element:<Projects></Projects>
             },
             
      
    
    ]
    },
    {
        path:"/contact",
        element:<Contact></Contact>
     }
])





export default routs