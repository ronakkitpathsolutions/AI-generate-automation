import { createBrowserRouter, RouterProvider } from "react-router";

import Home from "../pages/home";
import Report from "../pages/report";
import PublicLayout from "@/layouts/public";


const router = createBrowserRouter([
    {
        path: "/",
        element: <PublicLayout/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "report",
                element: <Report/>
            }
        ]
    }
])

const Routes = () => {
    return <RouterProvider {...{ router }} />
}

export default Routes;