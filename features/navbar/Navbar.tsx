"use client";

import { useState } from "react";
import { Item } from "./navbar.types";
import Image from "next/image";

const Navbar = ({ children, items }: { children: React.ReactNode, items: Item[] }) => {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        console.log("clicked");
        setOpen(!open);
    };

  return (
    <div className="Navbar">
        <nav className="bg-amber-300">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <a
                            href="https://github.com/jolenetan1234"
                            className="text-black">
                                <Image 
                                src="/images/header-img.jpg"
                                alt="Github"
                                width={30}
                                height={30}
                                />
                            </a>
                        </div>
                    </div>
                    
                    <div
                    className="items-center">
                        <button
                        className="border bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-800"
                        onClick={handleClick}
                        >
                            {open ? "×" : "Expand"}
                        </button>
                    </div>

                </div>
            </div>

            {open ? (
                    <div
                    className="">
                        <div
                        className="px-2 pt-2 pb-3 space-y-1 sm:px-3"
                        >
                            {items.map((item) => {
                                return (
                                    <a
                                    key={item.link}
                                    href={item.link}
                                    className="text-black hover:bg-black hover:text-white rounded-lg p-2 block">
                                        {item.text}
                                    </a>
                                );
                            })}
                        </div>
                    </div>
            ) : 
            ""
            }

        </nav>
        {children}
    </div>
  )
}

export default Navbar;