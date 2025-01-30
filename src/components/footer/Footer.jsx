import React from "react";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="px-6 lg:container mt-20 text-white">
                    <div className="bg-darkPositivus px-14 pt-14 h-auto rounded-t-[45px] ">
                        <div className="flex flex-wrap gap-5 items-center justify-between">
                            <img
                                src="/assets/icons/icon-white.svg"
                                alt=""
                            />
                            <div className="hidden md:flex items-center space-x-8 text-lg">
                                <a href="#" className="underline">
                                    About Us
                                </a>
                                <a href="#" className="underline">
                                    Services
                                </a>
                                <a href="#" className="underline">
                                    Use Cases
                                </a>
                                <a href="#" className="underline">
                                    Pricing
                                </a>
                                <a href="#" className="underline">
                                    Blog
                                </a>
                            </div>
                            <div className="flex items-center gap-4">
                                <img
                                    src="/assets/icons/in.svg"
                                    alt=""
                                />
                                <img
                                    src="/assets/icons/fb.svg"
                                    alt=""
                                />
                                <img
                                    src="/assets/icons/x.svg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-40 mt-10 border-b-2 border-white pb-10">
                            <div className="space-y-6">
                                <h1 className="px-1 text-black bg-primaryPositivus rounded inline-block">
                                    Contact Us
                                </h1>
                                <p>Email: info@positivus.com</p>
                                <p>Phone: 555-567-8901</p>
                                <p>
                                    Address: 1234 Main St Moonstone City,
                                    Stardust State 12345
                                </p>
                            </div>
                            <div className="flex flex-wrap justify-center items-center py-5 gap-5 w-full lg:h-48 rounded-lg lg:px-20 bg-[#292A32]">
                                <input
                                    type="email"
                                    name=""
                                    placeholder="Email"
                                    className="w-[200px] lg:w-1/2 p-4 rounded-lg bg-[#292A32] outline outline-1 "
                                />
                                <button className="px-8 py-4 rounded-lg bg-primaryPositivus text-black">
                                    Subscribe to news
                                </button>
                            </div>
                        </div>
                        <p className="py-10 text-sm lg:text-base">
                            © 2023 Positivus. All Rights Reserved.{" "}
                            <span className="underline ml-10">Privacy Policy</span>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;