import Browser from "./Browse"
import Login from "./Login"
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";



const Body = () => {
  
  

    const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
        path: "/Browser",
        element: <Browser />
    }
  ]);

  

    return (
        <div>
           <RouterProvider router = {appRouter} />
        </div>
    );
};

export default Body;