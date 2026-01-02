import { useCallback, useEffect, useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useLocation } from "react-router-dom";

export default function Contact() {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const location = useLocation();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [submissionStatus, setSubmissionStatus] = useState(null);

    useEffect(() => {
        if (location.state?.serviceName) {
            setFormData((prevData) => ({
                ...prevData,
                message: `I'm interested in the ${location.state.serviceName} service. `,
            }));
        }
    }, [location.state]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = useCallback(
        async (e) => {
            e.preventDefault();
            if (!executeRecaptcha) {
                console.log("Execute recaptcha not yet available");
                setSubmissionStatus("error");
                return;
            }

            const token = await executeRecaptcha("contact_form");

            const data = new FormData();
            data.append("name", formData.name);
            data.append("email", formData.email);
            data.append("message", formData.message);
            data.append("g-recaptcha-response", token);

            try {
                const response = await fetch(
                    "https://formspree.io/f/xwpnjolr",
                    {
                        method: "POST",
                        body: data,
                        headers: {
                            Accept: "application/json",
                        },
                    },
                );

                if (response.ok) {
                    setSubmissionStatus("success");
                    setFormData({ name: "", email: "", message: "" });
                } else {
                    setSubmissionStatus("error");
                }
            } catch (error) {
                setSubmissionStatus(`error${error}`);
            }
        },
        [executeRecaptcha, formData],
    );

    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-center mb-2">
                    Contact Us
                </h1>
                <p className="text-center text-gray-600 mb-8">
                    We're here to help. Fill out the form below to get in touch.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-6">
                            Send us a Message
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label
                                    htmlFor="name"
                                    className="block text-gray-700 font-semibold mb-2"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-gray-700 font-semibold mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="message"
                                    className="block text-gray-700 font-semibold mb-2"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition-colors duration-300"
                            >
                                Submit
                            </button>
                            {submissionStatus === "success" && (
                                <p className="text-green-500 mt-4">
                                    Thank you for your message! We will get back
                                    to you soon.
                                </p>
                            )}
                            {submissionStatus === "error" && (
                                <p className="text-red-500 mt-4">
                                    Something went wrong. Please try again
                                    later.
                                </p>
                            )}
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-6">
                            Our Information
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-semibold">Address</h3>
                                <p>
                                    No. 3, Jalan PJU 10/10E, Saujana Damansara,
                                    47810 Petaling Jaya, Selangor
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold">Phone</h3>
                                <p>
                                    <a
                                        href="tel:+60127196133"
                                        className="text-blue-600 hover:underline"
                                    >
                                        012-719 6133
                                    </a>
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold">Email</h3>
                                <p>
                                    <a
                                        href="mailto:mbauto.servicecentre@gmail.com"
                                        className="text-blue-600 hover:underline"
                                    >
                                        mbauto.servicecentre@gmail.com
                                    </a>
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold">
                                    Business Hours
                                </h3>
                                <p>Monday - Friday: 9:30 AM - 7:00 PM</p>
                                <p>Saturday - Sunday: 9:30 AM - 5:30 PM</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Google Maps Embed */}
                <div className="mt-12 rounded-lg shadow-md overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.5988327520836!2d101.58960557452073!3d3.199593496775615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc458d26528659%3A0x50c4ae46c5bbab1b!2s3%2C%20Jalan%20PJU%2010%2F10e%2C%20Damansara%20Damai%2C%2047810%20Petaling%20Jaya%2C%20Selangor!5e0!3m2!1sen!2smy!4v1757927673491!5m2!1sen!2smy"
                        title="Google Maps Embed"
                        className="w-full h-96"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
