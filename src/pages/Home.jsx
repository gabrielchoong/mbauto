import { Link } from "react-router-dom";
import { services } from "../data/services";

export default function Home() {
    return (
        <div>
            {/* Hero Section */}
            <div className="relative bg-gray-100">
                <div
                    className="h-96 bg-cover bg-center text-white"
                    style={{
                        backgroundImage: "url('../../img/store-interior.png')",
                    }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
                        <h1 className="text-5xl font-bold">
                            MB AUTO SERVICE CENTRE
                        </h1>
                        <p className="text-xl mt-4">
                            Your One-Stop Shop for Vehicle Maintenance
                        </p>
                        <Link to="/contact">
                            <button
                                type="button"
                                className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold"
                            >
                                Book an Appointment
                            </button>
                        </Link>
                    </div>
                </div>
                <div
                    className="absolute bottom-0 left-0 w-full h-24 bg-gray-100"
                    style={{ clipPath: "ellipse(50% 50% at 50% 100%)" }}
                ></div>
            </div>

            {/* Services Section */}
            <div className="container mx-auto px-4 mt-12">
                <h2 className="text-3xl font-bold text-center mb-8">
                    Our Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <Link
                            to={`/services/${service.id}`}
                            key={service.id}
                            className="block bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                        >
                            <h3 className="text-xl font-semibold mb-2">
                                {service.name}
                            </h3>
                            <p>{service.description}</p>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="bg-gray-200 py-12 mt-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        Why Choose Us?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                Experienced Technicians
                            </h3>
                            <p>
                                Our team of certified mechanics has years of
                                experience.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                Quality Parts
                            </h3>
                            <p>
                                We use only high-quality, genuine parts for all
                                repairs.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                Customer Satisfaction
                            </h3>
                            <p>
                                We are committed to providing the best service
                                to our customers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Image Gallery */}
            <div className="container mx-auto px-4 mt-12">
                <h2 className="text-3xl font-bold text-center mb-8">
                    Our Workshop
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <img
                        src="../../img/store-front.png"
                        alt="MB AUTO Store Front"
                        className="rounded-lg shadow-md"
                    />
                    <img
                        src="../../img/store-interior.png"
                        alt="MB AUTO Store Interior"
                        className="rounded-lg shadow-md"
                    />
                </div>
            </div>
        </div>
    );
}
