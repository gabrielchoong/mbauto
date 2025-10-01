export default function About() {
    const teamMembers = [
        {
            name: "John Doe",
            role: "Lead Mechanic & Founder",
            image: "https://via.placeholder.com/400x400.png/007bff/ffffff?text=John+Doe",
            bio: "With over 20 years of experience, John is the heart and soul of MB Auto. His passion for cars is matched only by his commitment to quality service.",
        },
        {
            name: "Jane Smith",
            role: "Service Advisor",
            image: "https://via.placeholder.com/400x400.png/28a745/ffffff?text=Jane+Smith",
            bio: "Jane is the friendly face you'll meet when you visit us. She ensures a smooth and transparent process from check-in to check-out.",
        },
        {
            name: "Peter Jones",
            role: "Technician",
            image: "https://via.placeholder.com/400x400.png/ffc107/000000?text=Peter+Jones",
            bio: "Peter is a certified technician with a knack for diagnostics. He loves a good challenge and is an expert in modern vehicle electronics.",
        },
    ];

    return (
        <div className="bg-gray-100">
            {/* Hero Section */}
            <div className="relative bg-cover bg-center h-80" style={{ backgroundImage: "url('../../img/store-front.png')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white text-center px-4">
                    <h1 className="text-5xl font-bold">About MB Auto</h1>
                    <p className="text-xl mt-4 max-w-2xl">
                        Your trusted partner in vehicle maintenance and repair since 2024.
                    </p>
                </div>
            </div>

            {/* Our Story Section */}
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Founded in 2024, MB Auto Service Centre was born out of a passion for cars and a desire to provide honest, reliable, and high-quality automotive services to the community. We started as a small workshop with a big dream: to become the most trusted name in vehicle care in Petaling Jaya. Today, we've grown our team and our capabilities, but our core mission remains the same: to treat every car as if it were our own and every customer like family.
                    </p>
                </div>
            </div>

            {/* Meet the Team Section */}
            <div className="bg-white py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        {teamMembers.map((member) => (
                            <div key={member.name}>
                                <img src={member.image} alt={member.name} className="w-48 h-48 rounded-full mx-auto mb-4 object-cover shadow-lg" />
                                <h3 className="text-xl font-bold">{member.name}</h3>
                                <p className="text-gray-500 mb-2">{member.role}</p>
                                <p className="text-gray-700">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Our Commitment Section */}
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Our Commitment to You</h2>
                    <p className="text-gray-700 leading-relaxed">
                        At MB Auto, we are committed to more than just fixing cars. We are committed to earning your trust. This means providing transparent pricing, clear communication, and expert workmanship on every job. We use only high-quality parts and stand behind our work, ensuring your vehicle is safe, reliable, and ready for the road ahead. Your satisfaction is our top priority.
                    </p>
                </div>
            </div>
        </div>
    );
}
