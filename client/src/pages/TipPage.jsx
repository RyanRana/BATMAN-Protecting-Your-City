import React from 'react';

const TipPage = () => {
    const tips = [
        {
            id: 1,
            title: "Stay Informed",
            description: "Keep up-to-date with the latest community news and safety alerts through local online forums and news outlets."
        },
        {
            id: 2,
            title: "Emergency Preparedness",
            description: "Ensure you and your family are prepared for emergencies by having a plan and necessary supplies like food, water, and medicine."
        },
        {
            id: 3,
            title: "Community Watch",
            description: "Participate in or organize local neighborhood watch programs to enhance community safety."
        },
        {
            id: 4,
            title: "Safe Commuting",
            description: "Stay safe by being aware of your surroundings, especially during late hours. Use well-lit and populated routes."
        }
    ];

    return (
        <div className="bg-gray-100 min-h-screen p-12 mt-14">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Tips and Resources</h1>
                <p className="text-lg text-center text-gray-600 mb-8">
                    Helpful tips and resources to ensure safety.
                </p>
                <div className="space-y-4">
                    {tips.map((tip) => (
                        <div key={tip.id} className="bg-white p-6 rounded-lg shadow">
                            <h2 className="font-semibold text-xl text-gray-800">{tip.title}</h2>
                            <p className="text-gray-600">{tip.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TipPage;
