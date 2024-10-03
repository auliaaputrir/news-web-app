import { createBrowserRouter } from "react-router-dom";

import Home from '../Pages/Index';
import Programming from '../Pages/ProgrammingPage'

import MainLayout from "../layout/MainLayout";
import ProgrammingPage from "../Pages/ProgrammingPage";
import SearchPage from "../Pages/SearchPage"

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {   
                path: '',
                element: <Home/>
            },
            {
                path: 'programming',
                element: <ProgrammingPage/>
            },
        ]
    }
]);

export default router