import Header from '../components/HeaderElements/Header'
import Footer from '../components/Footer';
import { Outlet } from "react-router-dom";
export default function MainLayout() {
    return (
        <>
            <div>
                <div className="relative z-40 h-40 m-0 ">
                    <Header />
                </div>
                <div className="mx-auto mt-10  ">
                    <Outlet />               
                </div>
                <Footer />
            </div>
        </>
    )
}