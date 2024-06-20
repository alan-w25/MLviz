"use client";
import Link from "next/link";
import {useState} from 'react';


const HomeHeader = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    return (
        <header className="p-6 shadow-md w-full top-0 left-0 z-10 flex items-center justify-between">
            <Link href="/" className ="text-lg font-bold">
                    MLVis: ML Algorithm Visualization App
            </Link>
            <nav className="relative">
            <button
                className="text-3xl focus:outline-none hover:bg-gray-100 p-2 rounded-md"
                onClick={() => setDropdownOpen(!dropdownOpen)}
            >
                &#9776;
            </button>

            {dropdownOpen && 
                <div className="absolute right-0 mt-2 w-64 bg-mechanical-dark shadow-lg rounded-lg z-20 p-4">
                    <ul>
                        <li><Link className=" text-xl font-bold block bg-mechanical-dark text-white px-4 py-2 hover:bg-mechanical-light" href="/">Home</Link></li>
                    </ul>
                    <h3 className="text-white text-lg bg-mechanical-dark">Supervised Models</h3>
                    <ul className="mb-4">
                        <li className="border-b border-gray-300">
                            <Link className="block bg-mechanical-dark text-white px-4 py-2 hover:bg-mechanical-light" href="model1/">Link 1</Link>
                        </li>
                        <li className="border-b border-gray-300">
                            <Link className="block bg-mechanical-dark text-white px-4 py-2 hover:bg-mechanical-light" href="model2">Link 2</Link>
                        </li>
                        <li className="border-b border-gray-300">
                            <Link className="block bg-mechanical-dark text-white px-4 py-2 hover:bg-mechanical-light" href="">Link 3</Link>
                        </li>
                    </ul>
                    <h3 className="text-white text-lg bg-mechanical-dark">Unsupervised Models</h3>
                    <ul className="mb-4">
                        <li className="border-b border-gray-300">
                            <Link className="block bg-mechanical-dark text-white px-4 py-2 hover:bg-mechanical-light" href="model1/">Link 1</Link>
                        </li>
                        <li className="border-b border-gray-300">
                            <Link className="block bg-mechanical-dark text-white px-4 py-2 hover:bg-mechanical-light" href="model2">Link 2</Link>
                        </li>
                        <li className="border-b border-gray-300">
                            <Link className="block bg-mechanical-dark text-white px-4 py-2 hover:bg-mechanical-light" href="">Link 3</Link>
                        </li>
                    </ul>
                </div>
                
            }

            </nav>
        </header>
    )
}

export default HomeHeader;