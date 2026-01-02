import { Link } from "react-router-dom";
import { services } from "../data/services";
import { useState } from "react";

const content = {
    en: {
        hero: {
            title: "MB AUTO SERVICE CENTRE",
            description: "Your One-Stop Shop for Vehicle Maintenance",
            appointment: "Book an Appointment",
        },
        service: {
            title: "Our Services",
        },
        choose: {
            title: "Why Choose Us?",
            reason: [
                {
                    title: "Experienced Technicians",
                    description:
                        "Our team of certified mechanics has years of experience.",
                },
                {
                    title: "Quality Parts",
                    description:
                        "We use only high-quality, genuine parts for all repairs.",
                },
                {
                    title: "Customer Satisfaction",
                    description:
                        "We are committed to providing the best service to our customers.",
                },
            ],
        },
        workshop: {
            title: "Our Workshop",
        },
    },
    zh: {
        hero: {
            title: "MB AUTO SERVICE CENTRE",
            description: "您的一站式车辆保养服务中心",
            appointment: "预约",
        },
        service: {
            title: "我们的服务",
        },
        choose: {
            title: "为什么选择我们？",
            reason: [
                {
                    title: "经验丰富的技术人员",
                    description: "我们拥有一支经验丰富的认证技师团队。",
                },
                {
                    title: "优质零件",
                    description: "我们所有维修都只使用高质量的原装配件。",
                },
                {
                    title: "客户满意度",
                    description: "我们致力于为客户提供最好的服务。",
                },
            ],
        },
        workshop: {
            title: "我们的工作室",
        },
    },
};

export default function Home() {
    const [lang, setLang] = useState("en");

    const t = content[lang];

    const heroSection = t.hero;
    const servicesSection = t.service;
    const chooseSection = t.choose;
    const workshopSection = t.workshop;

    return (
        <div>
            <button
                onClick={() => setLang((l) => (l === "en" ? "zh" : "en"))}
                className="fixed top-4 right-4 z-50 bg-red-500 text-white px-4 py-2 rounded"
            >
                {lang === "en" ? "Switch to 中文" : "Switch to English"}
            </button>
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
                            {heroSection.title}
                        </h1>
                        <p className="text-xl mt-4">
                            {heroSection.description}
                        </p>
                        <Link to="/contact">
                            <button
                                type="button"
                                className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold"
                            >
                                {heroSection.appointment}
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
                    {servicesSection.title}
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
                        {chooseSection.title}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {chooseSection.reason.map((item, index) => (
                            <div key={index}>
                                <h3 className="text-xl font-semibold mb-2">
                                    {item.title}
                                </h3>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Image Gallery */}
            <div className="container mx-auto px-4 mt-12">
                <h2 className="text-3xl font-bold text-center mb-8">
                    {workshopSection.title}
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
