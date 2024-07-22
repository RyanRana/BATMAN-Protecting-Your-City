import React, { useState, useEffect } from 'react';

const discussions = [
    {
        id: 1,
        title: "Local Safety Measures",
        description: "Discuss the recent safety measures implemented in our community. What are your thoughts and feedback?",
        comments: 42
    },
    {
        id: 2,
        title: "School Zone Traffic Solutions",
        description: "Ideas and suggestions to manage morning traffic around local schools. Looking for input from parents and drivers.",
        comments: 37
    },
    {
        id: 3,
        title: "Neighborhood Watch Programs",
        description: "Share experiences and advice about participating in or starting a neighborhood watch program.",
        comments: 18
    }
];

const GeneralPage = () => {
    
    const [activeDiscussion, setActiveDiscussion] = useState(null);

    useEffect(() => {
        console.log("Component mounted or updated");
    }, [activeDiscussion]);

    return (
        <div className="bg-gray-100 min-h-screen p-12 mt-14">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">General Discussion</h1>
                <p className="text-lg text-center text-gray-600 mb-8">
                    Join the conversation and share your views on community issues.
                </p>
                <div className="space-y-4">
                    {discussions.map((discussion) => (
                        <div key={discussion.id} className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="font-semibold text-xl text-gray-800">{discussion.title}</h2>
                            <p className="text-gray-600">{discussion.description}</p>
                            <button
                                className="mt-4 text-blue-500 hover:text-blue-700"
                                onClick={() => setActiveDiscussion(discussion.id)}
                            >
                                {discussion.comments} Comments - Join the discussion
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GeneralPage;
