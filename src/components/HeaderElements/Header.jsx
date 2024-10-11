import { Today } from "./FormatDate"
import Search from "./Search";
import NavItem from "./NavItem";
import Button from "../Elements/Button";


export default function Header() {
    return (
        
            <header className=" fixed top-0 left-0 right-0 bg-white text-black mx-auto p-4 ">
                <div className="flex justify-between w-full px-0">
                    <div className="relative pl-4">
                        <label htmlFor="Search" className="sr-only"> Search </label>
                        <Search />
                        
                    </div>
                    <div className="max-w-52 mx-4" >
                        <img className="" src="./public/logo-2.png" alt="logo" />
                    </div>
                    <div className=" flex gap-x-2">
                    <NavItem to='/saved' classBorder='' borderColor=''><Button>Saved</Button></NavItem>
    
                    </div>
                </div>
                <hr className="border-t-2 border-gray-200 w-27 mx-auto my-4" />
                <nav className="">
                    <ul className="flex space-x-4">
                        <li className="max-w-24"><Today /></li>
                        <li>
                            <NavItem to='/' > Indonesia </NavItem>
                        </li>
                        <li>
                            <NavItem to='/programming'> Programming </NavItem>
                        </li>
                    </ul>

                </nav>
            </header>
    )
}