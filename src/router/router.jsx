import { createBrowserRouter } from "react-router-dom";

import Home from '../Pages/Home';

import MainLayout from "../layout/MainLayout";
import ProgrammingPage from "../Pages/ProgrammingPage";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
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