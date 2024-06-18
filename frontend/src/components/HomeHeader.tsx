"use client";
import Link from "next/link";
import {useState} from 'react';


const HomeHeader = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    return (
        <header className="bg-white p-6 shadow-md w-full top-0 left-0 w-full z-10">
            
            <nav className="flex justify-between items-center">
            <Link href="/" className ="text-lg font-bold">
                    MLVis: ML Algorithm Visualization App
            </Link>
                <button
                    className="text-secondary hover:text-accent focus:outline-none"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                >
                    Models
                </button>

                {dropdownOpen && (
                    <div
                        className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20"
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(false)}
                    >
                        <Link href="/linear-regression">
                            Linear regression
                        </Link>
                        
                        <Link href="/logistic-regression">
                            Logistic Regression
                        </Link>
                    </div>
                )}

            </nav>
        </header>
    )
}

export default HomeHeader;