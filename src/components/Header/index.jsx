import { Today } from "./FormatDate"
import Search from "./Search";
import NavItem from "./NavItem";
import Button from "../Elements/Button";


export default function Header() {
    return (

        <header className="fixed top-0 left-0 right-0 bg-white text-black mx-auto pt-4 px-4">
            <div className="flex flex-wrap justify-between items-center w-full px-0">
                <div className="relative pl-0 sm:pl-4 w-full sm:w-1/3 mb-2 sm:mb-0">
                    <label htmlFor="Search" className="sr-only">Search</label>
                    <Search />
                </div>
                <div className="w-full sm:w-1/3 text-center my-2 sm:my-0">
                    <a href="/">
                        <h1 className="font-bold text-3xl sm:text-4xl">IDNStream</h1>
                    </a>
                </div>
                <div className="flex gap-x-2 w-full sm:w-1/3 justify-center sm:justify-end mt-2 sm:mt-0">
                    <NavItem to='/saved' classBorder='' borderColor=''>
                        <Button>Saved</Button>
                    </NavItem>
                </div>
            </div>
            <hr className="border-t-2 border-gray-200 w-27 mx-auto my-4" />
            <nav className="text-center">
                <ul className="flex flex-wrap justify-start sm:justify-start space-x-8 sm:space-x-4">
                    <li className="max-w-24 text"><Today /></li>
                    <li>
                        <NavItem to='/'>Indonesia</NavItem>
                    </li>
                    <li>
                        <NavItem to='/programming'>Programming</NavItem>
                    </li>
                </ul>
            </nav>
        </header>


    )
}