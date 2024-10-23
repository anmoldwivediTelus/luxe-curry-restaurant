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
import { BookTablrForm } from "./components/bookTableForm/BookTableForm";
import ReactDOM from "react-dom";
import ProtectedRoutes from "./utils/protectedRoutes";
import CardsContainer from "./components/cardsContainer/CardsContainer";
import { Cart } from "./components/cart/Index";
import { Menu } from "./components/menu/Index";
import { Profile } from "./components/profile/Index";
import { AboutUs } from "./components/aboutUs/Index";
import { ContactUs } from "./components/contactUs/Index";
const appRouter = createBrowserRouter([
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
    {
        path: "/aboutus",
        element: <AboutUs />,
    },
    {
        path: "/contactus",
        element: <ContactUs />,
    },
    {
        element: <ProtectedRoutes />,
        children: [
              {
                path: "/bookTable",
                element: <BookTablrForm />,
              },
              {
                path: "/menu",
                element: <Menu />,
              },
              {
                path: "/cart",
                element: <Cart/>,
              },
              {
                path: "/profile",
                element: <Profile/>,
              },
        ],
    }
]);
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<RouterProvider router={appRouter} />);