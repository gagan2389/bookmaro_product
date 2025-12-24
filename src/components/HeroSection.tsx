import React from 'react';
import dummydata from '../dummydata.json';

const HeroSection: React.FC = () => {
    return (
        <section className="container mx-auto px-4 py-12 text-center">
            <h1 className="text-4xl font-bold mb-4 !text-indigo-900">
                {dummydata?.hero?.title}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {dummydata?.hero?.subtitle}
            </p>
        </section>
    );
};

export default HeroSection;
