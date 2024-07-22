import React from 'react';
import bronxImage from '../assets/images/b.png';

import i1 from '../assets/homeimages/i1.jpeg';
import i2 from '../assets/homeimages/i2.jpeg';
import i3 from '../assets/homeimages/i3.jpeg';
import i4 from '../assets/homeimages/i4.jpeg';
import i5 from '../assets/homeimages/i5.jpeg';
import i7 from '../assets/homeimages/i7.jpeg';
import i8 from '../assets/homeimages/i8.jpeg';
import i10 from '../assets/homeimages/i10.jpeg';

const Home = () => {
    const leftImages = [i1, i2, i3, i4];
    const rightImages = [i5, i7, i8, i10];

    return (
        <div className="flex items-start justify-between min-h-screen p-12 mt-14 bg-gray-50">
            {/* Left images sidebar */}
            <div className="w-1/4 overflow-auto p-2">
                {leftImages.map((img, index) => (
                    <img key={index} src={img} className="w-full mb-4 rounded-md shadow" alt={`Left ${index + 1}`} />
                ))}
            </div>

            {/* Main content */}
            <div className="w-1/2 flex flex-col items-center justify-center">
                <div className="px-6 py-10 mx-auto text-center">
                    <h1 className="text-5xl font-bold text-gray-800 mb-6">Welcome to BronxWatch</h1>
                    <p className="text-xl text-gray-600 mb-8">Protecting The Community, One Alert at a Time.</p>
                    <img src={bronxImage} className="mx-auto h-96 w-96 border-8 border-gray-300 rounded-full mb-8 shadow-xl" alt="Bronx" />
                </div>
                <footer className="mt-12 text-black-500">
                    <p className="text-3xl">Together, we create a better Bronx.</p>
                    © {new Date().getFullYear()} BronxWatch. All rights reserved.
                </footer>
            </div>

            {/* Right images sidebar */}
            <div className="w-1/4 overflow-auto p-2">
                {rightImages.map((img, index) => (
                    <img key={index} src={img} className="w-full mb-4 rounded-md shadow" alt={`Right ${index + 1}`} />
                ))}
            </div>
        </div>
    );
}

export default Home;
