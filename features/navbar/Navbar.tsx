"use client";

import { useState } from "react";
import { Item } from "./types/Item";
import Image from "next/image";

const Navbar = ({ children, items }: { children: React.ReactNode, items: Item[] }) => {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        console.log("clicked");
        setOpen(!open);
    };

  return (
    <div className="Navbar">
        <nav className="bg-amber-300 max-w-6xl">

            {/* this div contains logo and buttons */}
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                {/* flexbox to position picture on the left and group of buttons on the right */}
                <div className="flex items-center justify-between h-16">
                    {/* picture */}
                    <a
                    href="https://github.com/jolenetan1234"
                    >
                        <Image 
                        src="/images/header-img.jpg"
                        alt="Github"
                        width={30}
                        height={30}
                        />
                    </a>
                    
                    {/* "Expand" button for small screens */}
                    <button
                    className="md:hidden bg-gray-900 p-2 rounded-md text-white hover:bg-gray-800"
                    onClick={handleClick}
                    >
                        {open ? "×" : "Expand"}
                    </button>

                    {/* Content for md screens */}
                    <div className="hidden md:block">
                        <div className="flex justify-center">
                            {items.map((item) => {
                                return (
                                    <a
                                    key={item.link}
                                    href={item.link}
                                    className="text-black hover:bg-black hover:text-white rounded-lg p-2 block">
                                        {item.text}
                                    </a>
                                )
                            })}
                        </div>
                    </div>

                </div>
            </div>

            {/* expanded portion (for small screens) */}
            {open ? (
                        <div
                        className="md:hidden"
                        >
                            {items.map((item) => {
                                return (
                                <a
                                key={item.link}
                                href={item.link}
                                className="shadow-md border-t border-yellow-950 text-black hover:bg-black hover:text-white p-2 block">
                                    {item.text}
                                </a>
                                );
                            })}
                        </div>
                    )
                : ""
            }
        </nav>
        {children}
    </div>
  )
}

export default Navbar;