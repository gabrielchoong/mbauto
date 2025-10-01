import { Link } from "react-router-dom";

export default function Footer() {
    const startYear = 2024;
    const currentYear = new Date().getFullYear();
    const yearDisplay = startYear === currentYear ? startYear : `${startYear} - ${currentYear}`;

    return (
        <footer className="bg-gray-800 text-white mt-12">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    <div>
                        <h3 className="text-xl font-bold mb-2">MB AUTO</h3>
                        <p className="text-gray-400">
                            Your one-stop shop for vehicle maintenance.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="hover:text-blue-300 transition-colors duration-300">Home</Link></li>
                            <li><Link to="/services" className="hover:text-blue-300 transition-colors duration-300">Services</Link></li>
                            <li><Link to="/contact" className="hover:text-blue-300 transition-colors duration-300">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="tel:+60127196133" className="hover:text-blue-300 transition-colors duration-300">012-719 6133</a></li>
                            <li><a href="mailto:mbauto.servicecentre@gmail.com" className="hover:text-blue-300 transition-colors duration-300">mbauto.servicecentre@gmail.com</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-500">
                    <p>&copy; {yearDisplay} MB Auto Service Centre. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
