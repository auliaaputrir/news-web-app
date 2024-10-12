import { createBrowserRouter } from "react-router-dom";

import Home from '../Pages/Home';
import MainLayout from "../layout/MainLayout";
import ProgrammingPage from "../Pages/ProgrammingPage";
import ErrorPage from "../Pages/ErrorPage";
import SavedNewsPage from "../Pages/SavedNewsPage";
import SearchPage from '../Pages/SearchPage'


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
            {
                path: 'saved',
                element: <SavedNewsPage/>
            },
            {
                path: 'search',
                element: <SearchPage/>
            },
        ]
    }
]);

export default router