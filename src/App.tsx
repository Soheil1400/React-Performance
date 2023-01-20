import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ColorChallenge from "./section/ColorChallenge";


const router = createBrowserRouter([
    {
        element: <ColorChallenge/>,
        path: '/color-challenge'
    }
])



function App() {
    return (
        <RouterProvider router={router}/>
    );
}

export default App;
