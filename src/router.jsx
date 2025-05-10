import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import Menu from "./components/Menu/Menu";
import Layout from "./Layout/Layout";
import Purchase from "./components/Purchase/Purchase";
import Products from "./components/Products/Products";
import Recipe from "./components/Recipe/Recipe";
import Notice from "./components/Notice/Notice";

export const myRouter = createBrowserRouter ([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: 'home',
                element: <Home/>
            },
            {
                path: 'menu',
                element: <Menu/>
            },
            {
                path: 'purchase',
                element: <Purchase/>
            },
            {
                path: 'product',
                element: <Products/>
            },
            {
                path: 'recipe',
                element: <Recipe/>
            },
            {
                path: 'notice',
                element: <Notice/>
            },
        ]
    }
])