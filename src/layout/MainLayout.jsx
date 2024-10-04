import Header from '../components/Header'
import Footer from '../components/Footer';
import { Outlet } from "react-router-dom";
export default function MainLayout() {
    return (
        <>
            <div className='container'>
                <div className="relative h-40 m-0 ">
                    <Header />
                </div>
                <div className="container mx-auto lg:px-8 ">
                    <Outlet />               
                </div>
                <Footer />
            </div>
        </>
    )
}