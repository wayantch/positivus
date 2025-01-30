import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav>
            <div className="px-6 lg:container">
                <div className="flex justify-between items-center py-16">
                    <div className="flex items-center space-x-8">
                        <img
                            src="/assets/icons/icon.svg"
                            alt=""
                            className="w-40 lg:w-full"
                        />
                    </div>

                    <div className="hidden md:flex items-center space-x-8 text-lg">
                        <a href="#" className="">
                            About Us
                        </a>
                        <a href="#" className="">
                            Services
                        </a>
                        <a href="#" className="">
                            Use Cases
                        </a>
                        <a href="#" className="">
                            Pricing
                        </a>
                        <a href="#" className="">
                            Blog
                        </a>
                        <button className="px-8 py-4 rounded-lg outline outline-1 outline-darkPositivus hover:bg-darkPositivus hover:text-white transition-all duration-300">
                            Request a quote
                        </button>
                    </div>
                    <div className="flex md:hidden">
                        <IoMdMenu
                            className="text-4xl text-black"
                            onClick={() => setIsOpen(!isOpen)}
                        />
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 py-4">
                    <div className="container mx-auto px-6 flex flex-col space-y-4">
                        <a href="#" className="block">
                            About Us
                        </a>
                        <a href="#" className="block">
                            Services
                        </a>
                        <a href="#" className="block">
                            Use Cases
                        </a>
                        <a href="#" className="block">
                            Pricing
                        </a>
                        <a href="#" className="block">
                            Blog
                        </a>
                        <button className="w-full px-8 py-4 rounded-lg outline outline-1 outline-darkPositivus ">
                            Request a quote
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
