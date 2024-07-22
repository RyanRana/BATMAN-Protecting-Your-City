import React from 'react';

const EventPage = () => {
    const events = [
        {
            id: 1,
            title: "Community Safety Workshop",
            date: "July 10, 2024",
            description: "Join us for a workshop on community safety and self-defense techniques, hosted at the local community center.",
            moreInfoLink: "#"
        },
        {
            id: 2,
            title: "Neighborhood Watch Meeting",
            date: "July 15, 2024",
            description: "Monthly meeting of the neighborhood watch program to discuss recent issues and coordinate efforts.",
            moreInfoLink: "#"
        },
        {
            id: 3,
            title: "Emergency Preparedness Seminar",
            date: "August 1, 2024",
            description: "Learn about emergency preparedness from experts and get resources to prepare your family for unexpected situations.",
            moreInfoLink: "#"
        },
        {
            id: 4,
            title: "Annual Community Gathering",
            date: "September 5, 2024",
            description: "Celebrate our community's spirit and strength at our annual gathering with food, music, and fun activities for all ages.",
            moreInfoLink: "#"
        }
    ];

    return (
        <div className="bg-gray-100 min-h-screen p-12 mt-14">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Event Announcements</h1>
                <p className="text-lg text-center text-gray-600 mb-8">
                    Stay up-to-date with upcoming community events and initiatives.
                </p>
                <div className="space-y-4">
                    {events.map((event) => (
                        <div key={event.id} className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="font-semibold text-xl text-gray-800">{event.title}</h2>
                            <p className="text-gray-600 mb-2">{event.description}</p>
                            <p className="text-sm text-gray-500">Date: {event.date}</p>
                            <a href={event.moreInfoLink} className="text-blue-500 hover:text-blue-700">Learn more</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EventPage;
