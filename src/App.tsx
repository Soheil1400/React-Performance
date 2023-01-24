import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ColorChallenge from "./section/ColorChallenge";
import Home from "./section/Home";
import TodoList from "./section/TodoList";


const router = createBrowserRouter([
    {
      element: <Home/>,
      path: '/'
    },
    {
        element: <ColorChallenge/>,
        path: '/color-challenge'
    },
    {
        element: <TodoList/>,
        path: '/todo-list'
    },
])

function App() {
    return (
        <RouterProvider router={router}/>
    );
}

export default App;
