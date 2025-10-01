import { Link } from "react-router-dom";
import { services } from "../data/services";

export default function Services() {
    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-center mb-12">Our Services</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {services.map((service) => (
                        <Link to={`/services/${service.id}`} key={service.id} className="block rounded-lg shadow-md overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300">
                            <div id={service.id}>
                                <img src={service.image} alt={service.name} className="w-full h-64 object-cover" />
                                <div className="p-6">
                                    <h2 className="text-2xl font-bold mb-3">{service.name}</h2>
                                    <p className="text-gray-600 mb-4">{service.description}</p>
                                    <h3 className="text-lg font-semibold mb-2">Includes:</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        {service.details.map((detail) => (
                                            <li key={detail}>{detail}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
