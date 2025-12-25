import React from 'react';
import { Link, useParams } from 'react-router-dom';
import dummydata from '../dummydata.json';

const BookingConfirmationPage = () => {
    const { id } = useParams<{ id: string }>();
    const restaurant = dummydata.restaurants.find((r) => r.id === id);

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 md:p-12 max-w-lg w-full text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="bi bi-check-lg text-4xl text-green-600"></i>
                </div>

                <h1 className="text-3xl font-bold text-gray-900 mb-2">Booking Confirmed!</h1>
                <p className="text-gray-600 mb-8">
                    Your table at <span className="font-semibold text-gray-900">{restaurant?.name}</span> has been reserved.
                </p>

                <div className="bg-gray-50 rounded-2xl p-6 mb-8 text-left space-y-3">
                    <div className="flex justify-between">
                        <span className="text-gray-500">Booking ID</span>
                        <span className="font-medium text-gray-900">#BK-{Math.floor(Math.random() * 100000)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-500">Date & Time</span>
                        <span className="font-medium text-gray-900">Tomorrow, 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-500">Guests</span>
                        <span className="font-medium text-gray-900">2 People</span>
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <Link
                        to={`/${id}/menu`}
                        className="w-full bg-indigo-900 text-white font-bold py-3 rounded-xl hover:bg-indigo-800 transition-colors"
                    >
                        View Menu
                    </Link>
                    <Link
                        to="/"
                        className="w-full bg-white border border-gray-200 text-gray-700 font-bold py-3 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BookingConfirmationPage;
