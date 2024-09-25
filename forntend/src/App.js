import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    Outlet,
    RouterProvider
  } from "react-router-dom";
import Header from "./components/header";
import  Footer  from "./components/footer/Footer";
import MainContainer from "./components/MainContainer/Index";
import  Login  from "./components/login/Login";
import { SignUp } from "./components/signup/Signup";
const  AppLayout = () =>{
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
        {
            path: "/",
            element: <MainContainer />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/signup",
            element: <SignUp />,
        },
        ],
    },
]);
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<RouterProvider router={appRouter} />);