import { ApplicationLogo, HoverLink } from "@/Components";
import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaLinkedin,
} from "react-icons/fa";

import { IoCloseSharp } from "react-icons/io5";

export default function Guest({ children }) {
    const { url } = usePage(); // Dapatkan URL saat ini dari Inertia
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk burger menu

    // Fungsi untuk menentukan apakah link aktif
    const isActive = (href) => url === href;

    // Fungsi untuk toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="min-h-screen flex flex-col sm:pt-0 bg-primary">
            {/* Navbar */}
            <div className="flex justify-between items-center px-4 lg:px-20 py-4 shadow-md ">
                <div>
                    <Link href="/">
                        <ApplicationLogo className="w-12 h-12 hover:opacity-30 transition duration-300 ease-in-out" />
                    </Link>
                </div>

                {/* Burger Icon for mobile */}
                <div className="block lg:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        {/* Burger icon */}
                        {isMenuOpen ? (
                            <IoCloseSharp className="text-5xl transform transition-transform duration-300 ease-in-out rotate-90" />
                        ) : (
                            <FaBars className="text-4xl transform transition-transform duration-300 ease-in-out rotate-0" />
                        )}
                    </button>
                </div>

                {/* Desktop menu */}
                <div className="hidden lg:flex text-xl font-medium gap-1">
                    <Link
                        href="/"
                        className={`w-32 flex justify-center items-center rounded-full transition duration-300 ease-in-out ${
                            isActive("/")
                                ? "bg-secondary text-white"
                                : "hover:bg-gray"
                        }`}
                    >
                        Home
                    </Link>
                    <Link
                        href="/features"
                        className={`w-32 flex justify-center items-center py-2 rounded-full transition duration-300 ease-in-out ${
                            isActive("/features")
                                ? "bg-secondary text-white"
                                : "hover:bg-gray"
                        }`}
                    >
                        Features
                    </Link>
                    <Link
                        href="/about"
                        className={`w-32 flex justify-center items-center py-2 rounded-full transition duration-300 ease-in-out ${
                            isActive("/about")
                                ? "bg-secondary text-white"
                                : "hover:bg-gray"
                        }`}
                    >
                        About
                    </Link>
                    <Link
                        href="/partners"
                        className={`w-32 flex justify-center items-center py-2 rounded-full transition duration-300 ease-in-out ${
                            isActive("/partners")
                                ? "bg-secondary text-white"
                                : "hover:bg-gray"
                        }`}
                    >
                        Partners
                    </Link>
                    <HoverLink />
                </div>

                {/* Mobile menu (burger menu content) */}
                {isMenuOpen && (
                    <div
                        className={`${
                            isMenuOpen
                                ? "translate-y-0 opacity-100"
                                : "-translate-y-full opacity-0"
                        } absolute px-2 top-16 right-0 w-full bg-primary z-50 flex flex-col items-center gap-2 py-4 shadow-lg transform transition-transform duration-300 ease-in-out`}
                    >
                        <Link
                            href="/"
                            className={`w-full text-center py-2 rounded-full transition duration-300 ease-in-out ${
                                isActive("/")
                                    ? "bg-secondary text-white"
                                    : "hover:bg-gray"
                            }`}
                            onClick={toggleMenu} // close menu when clicking a link
                        >
                            Home
                        </Link>
                        <Link
                            href="/features"
                            className={`w-full text-center py-2 rounded-full transition duration-300 ease-in-out ${
                                isActive("/features")
                                    ? "bg-secondary text-white"
                                    : "hover:bg-gray"
                            }`}
                            onClick={toggleMenu}
                        >
                            Features
                        </Link>
                        <Link
                            href="/about"
                            className={`w-full text-center py-2 rounded-full transition duration-300 ease-in-out ${
                                isActive("/about")
                                    ? "bg-secondary text-white"
                                    : "hover:bg-gray"
                            }`}
                            onClick={toggleMenu}
                        >
                            About
                        </Link>
                        <Link
                            href="/partners"
                            className={`w-full text-center py-2 rounded-full transition duration-300 ease-in-out ${
                                isActive("/partners")
                                    ? "bg-secondary text-white"
                                    : "hover:bg-gray"
                            }`}
                            onClick={toggleMenu}
                        >
                            Partners
                        </Link>
                    </div>
                )}
            </div>

            {/* Main content */}
            <div className="w-full overflow-hidden">{children}</div>

            <div className="pt-10 pb-32 bg-black px-20 flex justify-between">
                <div className="">
                    <div className="flex items-center gap-2">
                        <img
                            src="/image/Logo.png"
                            alt=""
                            className="w-20 h-20"
                        />
                        <h1 className="text-5xl font-bold text-white">
                            Parasly
                        </h1>
                    </div>
                    <p className="text-lg font-medium text-text_gray">
                        Parasly is a Beauty Service Inc. company 2024
                    </p>
                    <div className="flex mt-4 items-center">
                        <div className=" flex items-center rounded-full pl-4  bg-white">
                            <MdEmail size={24} color="#888888" />
                            <input
                                type="text"
                                className="border-none"
                                placeholder="Your email address"
                            />
                            <button className="bg-secondary h-12 px-4 rounded-full text-accent">
                                Get Early Access
                            </button>
                        </div>
                    </div>
                </div>
                <div className="text-white">
                    <h1 className="text-2xl font-bold">
                        Stay connected with Parasly
                    </h1>
                    <ul className="flex justify-evenly mt-4">
                        <li className="bg-gray w-12 h-12 rounded-full flex justify-center items-center hover:bg-secondary text-secondary hover:text-white transition duration-300 ease-in-out">
                            <a href="">
                                <FaFacebookF size={24} />
                            </a>
                        </li>
                        <li className="bg-gray w-12 h-12 rounded-full flex justify-center items-center hover:bg-secondary text-secondary hover:text-white transition duration-300 ease-in-out">
                            <a href="">
                                <FaInstagram size={24} />
                            </a>
                        </li>
                        <li className="bg-gray w-12 h-12 rounded-full flex justify-center items-center hover:bg-secondary text-secondary hover:text-white transition duration-300 ease-in-out">
                            <a href="">
                                <FaTwitter size={24} />
                            </a>
                        </li>
                        <li className="bg-gray w-12 h-12 rounded-full flex justify-center items-center hover:bg-secondary text-secondary hover:text-white transition duration-300 ease-in-out">
                            <a href="">
                                <FaYoutube size={24} />
                            </a>
                        </li>
                        <li className="bg-gray w-12 h-12 rounded-full flex justify-center items-center hover:bg-secondary text-secondary hover:text-white transition duration-300 ease-in-out">
                            <a href="">
                                <FaLinkedin size={24} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
