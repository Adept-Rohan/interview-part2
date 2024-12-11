import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/Navbar";
import Cart from "../pages/Cart";
import Home from "../pages/Home";


const Layout = () => {
    return (
        <div>
            <Navbar />
            <ScrollRestoration />
            <Outlet />
        </div>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: "/cart",
                element: <Cart />,
            },
        ],
    },
]);

const Router = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default Router