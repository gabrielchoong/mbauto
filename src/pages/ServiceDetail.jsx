import { Link, useParams } from "react-router-dom";
import { services } from "../data/services";

export default function ServiceDetail() {
    const { serviceId } = useParams();
    const service = services.find((s) => s.id === serviceId);

    if (!service) {
        return (
            <div className="text-center py-12">
                <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
                <p className="text-gray-600 mb-8">
                    Sorry, we couldn't find the service you were looking for.
                </p>
                <Link to="/services" className="text-blue-600 hover:underline">
                    &larr; Back to All Services
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-96 object-cover rounded-lg mb-8"
                    />
                    <h1 className="text-4xl font-bold mb-4">{service.name}</h1>
                    <p className="text-gray-700 text-lg mb-6">
                        {service.description}
                    </p>
                    <h2 className="text-2xl font-semibold mb-3">
                        What's Included:
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        {service.details.map((detail) => (
                            <li key={detail}>{detail}</li>
                        ))}
                    </ul>
                    <div className="mt-10 text-center">
                        <Link
                            to="/contact"
                            state={{ serviceName: service.name }}
                            className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition-colors duration-300"
                        >
                            Book This Service
                        </Link>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <Link
                        to="/services"
                        className="text-blue-600 hover:underline"
                    >
                        &larr; Back to All Services
                    </Link>
                </div>
            </div>
        </div>
    );
}
