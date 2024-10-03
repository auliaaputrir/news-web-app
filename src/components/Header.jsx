import { Today } from "./FormatDate"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    return (
        <div className="relative h-40 m-0 ">
            <header className=" fixed top-0 left-0 right-0 bg-white text-black mx-auto p-4 ">
                <div className="flex justify-between w-full px-0">
                    <div className="relative pl-4">
                        <label htmlFor="Search" className="sr-only"> Search </label>

                        <input
                            type="text"
                            id="Search"
                            placeholder="Search for..."
                            className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
                        />

                        <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                            <button type="button" className="text-gray-600 hover:text-gray-700">
                                <span className="sr-only">Search</span>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                    />
                                </svg>
                            </button>
                        </span>
                    </div>
                    <div className="max-w-52 mx-4" >
                        <img className="" src="./src/assets/logo-2.png" alt="logo" />
                    </div>
                    <div className=" flex gap-x-2">
                        <button type="button" className="text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium  text-sm px-5 py-2.5 :bg-gray-800">Saved</button>
                        <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium text-sm px-5 py-2.5">Subscribe</button>
                    </div>
                </div>
                <hr className="border-t-2 border-gray-200 w-27 mx-auto my-4" />
                <nav className="">
                    <ul className="flex space-x-4">
                        <li className="max-w-24"><Today /></li>
                        <li><a href="#" className=" border-b border-transparent hover:border-b-2 hover:border-blue-500 transition-all duration-300">Indonesia</a></li>
                        <li><a href="#" className=" border-b border-transparent hover:border-b-2 hover:border-blue-500 transition-all duration-300">Programming</a></li>
                        <li><a href="#" className=" border-b border-transparent hover:border-b-2 hover:border-blue-500 transition-all duration-300">Indonesia</a></li>
                        <li><a href="#" className=" border-b border-transparent hover:border-b-2 hover:border-blue-500 transition-all duration-300">Indonesia</a></li>
                    </ul>
                </nav>
            </header>
        </div>

    )
}