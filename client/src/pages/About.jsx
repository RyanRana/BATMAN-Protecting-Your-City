import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-12 mt-14 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full text-center">
        <h1 className="text-4xl font-extrabold text-blue-900 mb-4">About BronxWatch</h1>
        <p className="text-lg text-gray-700 mb-8">
          Welcome to BronxWatch, the Neighborhood Safety and Alert System for Bronx City. Our mission is to ensure the safety and well-being of all Bronx residents through timely alerts and comprehensive safety information.
        </p>
        <img src="https://source.unsplash.com/featured/?neighborhood" alt="Neighborhood" className="w-full h-64 object-cover rounded-md mb-8 shadow-md" />
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            At BronxWatch, our goal is to create a safer and more connected community. We provide real-time alerts and safety information to help residents stay informed and vigilant. From crime reports to emergency notifications, we are dedicated to keeping you and your loved ones safe.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Team</h2>
          <p className="text-gray-600 mb-4">
            We are a dedicated team of professionals and community members who are passionate about public safety. Our team works tirelessly to ensure that you receive the most accurate and timely information.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions, suggestions, or concerns, please do not hesitate to contact us at <a href="mailto:support@bronxwatch.org" className="text-blue-600 underline">support@bronxwatch.org</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
