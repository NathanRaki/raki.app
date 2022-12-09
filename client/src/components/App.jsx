import React from "react";
import '../css/App.css';
import {
    createBrowserRouter,
    RouterProvider,
    Navigate
} from "react-router-dom";
import Root from "./Root";

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Root />
        },
        {
            path: "/minecraft",
            element: <Root />
        }
    ]);

    return (
        <RouterProvider router={router} />
    );
}