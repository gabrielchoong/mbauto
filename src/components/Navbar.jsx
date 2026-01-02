import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    const activeLinkStyle = {
        color: "#60a5fa", // A light blue color from Tailwind's `blue-400`
        textDecoration: "underline",
    };

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, [scrolled]);

    const navClasses = scrolled
        ? "bg-gray-800 shadow-md text-white"
        : "bg-transparent text-black";

    return (
        <header
            className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 ${navClasses} p-4`}
        >
            <nav className="container mx-auto flex justify-between items-center">
                <div>
                    <NavLink
                        to="/"
                        className="text-xl font-bold hover:text-blue-300 transition-colors duration-300"
                    >
                        MB AUTO
                    </NavLink>
                </div>
                <div className="flex gap-6 items-center">
                    <NavLink
                        to="/"
                        className="hover:text-blue-300 transition-colors duration-300"
                        style={({ isActive }) =>
                            isActive ? activeLinkStyle : undefined
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/services"
                        className="hover:text-blue-300 transition-colors duration-300"
                        style={({ isActive }) =>
                            isActive ? activeLinkStyle : undefined
                        }
                    >
                        Services
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className="hover:text-blue-300 transition-colors duration-300"
                        style={({ isActive }) =>
                            isActive ? activeLinkStyle : undefined
                        }
                    >
                        Contact
                    </NavLink>
                </div>
            </nav>
        </header>
    );
}
