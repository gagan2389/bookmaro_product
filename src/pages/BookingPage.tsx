import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import dummydata from '../dummydata.json';

const BookingPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const restaurant = dummydata.restaurants.find((r) => r.id === id);

  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [partySize, setPartySize] = useState('2 people');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '+91 ',
    email: '',
    requests: '',
  });

  const [errors, setErrors] = useState({
    date: '',
    partySize: '',
    selectedTime: '',
    fullName: '',
    phone: '',
  });

  if (!restaurant) return <div>Restaurant not found</div>;

  const timeSlots = dummydata.timeSlots;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'phone' && !value.startsWith('+91 ')) {
      return;
    }
    setFormData({
      ...formData,
      [name]: value,
    });
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validateForm = () => {
    const newErrors = {
      date: !date ? 'Date is required' : '',
      partySize: !partySize ? 'Party size is required' : '',
      selectedTime: !selectedTime ? 'Time selection is required' : '',
      fullName: !formData.fullName.trim() ? 'Full name is required' : '',
      phone: formData.phone.length <= 4 ? 'Phone number is required' : '',
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== '');
  };

  const handleConfirm = () => {
    if (validateForm()) {
      navigate(`/${id}/booking-confirmed`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-2.5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-1">Book a Table</h1>
        <p className="text-gray-500 mb-8">Reserve your table at {restaurant.name}</p>

        <div className="flex flex-col-reverse lg:grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Date *</label>
                <div className="relative">
                  <input
                    type="date"
                    value={date}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => {
                      setDate(e.target.value);
                      setErrors({ ...errors, date: '' });
                    }}
                    className={`form-control rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-900/20 focus:border-indigo-900 transition-colors ${errors.date ? 'border-red-500' : ''}`}
                  />
                  {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Party Size *
                </label>
                <select
                  value={partySize}
                  onChange={(e) => {
                    setPartySize(e.target.value);
                    setErrors({ ...errors, partySize: '' });
                  }}
                  className={`form-select rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-900/20 focus:border-indigo-900 transition-colors ${errors.partySize ? 'border-red-500' : ''}`}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, '8+'].map((num) => (
                    <option key={num} value={`${num} people`}>
                      {num} people
                    </option>
                  ))}
                </select>
                {errors.partySize && (
                  <p className="text-red-500 text-xs mt-1">{errors.partySize}</p>
                )}
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Available Times *
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => {
                      setSelectedTime(time);
                      setErrors({ ...errors, selectedTime: '' });
                    }}
                    className={`py-2 px-3 !rounded-lg border text-sm font-medium transition-all ${
                      selectedTime === time
                        ? 'bg-indigo-900 text-white border-indigo-900 shadow-md'
                        : 'bg-white border-gray-200 text-gray-700 hover:border-indigo-900/30 hover:bg-indigo-50'
                    } ${errors.selectedTime && !selectedTime ? 'border-red-500' : ''}`}
                  >
                    {time}
                  </button>
                ))}
              </div>
              {errors.selectedTime && (
                <p className="text-red-500 text-xs mt-1">{errors.selectedTime}</p>
              )}
            </div>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={`w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-900/20 focus:border-indigo-900 transition-colors ${errors.fullName ? 'border-red-500' : 'border-gray-200'}`}
                />
                {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 1234567890"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-900/20 focus:border-indigo-900 transition-colors ${errors.phone ? 'border-red-500' : 'border-gray-200'}`}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-900/20 focus:border-indigo-900 transition-colors"
                  />
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Special Requests
              </label>
              <textarea
                name="requests"
                rows={4}
                placeholder="Any special requests or dietary requirements?"
                value={formData.requests}
                onChange={handleInputChange}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-900/20 focus:border-indigo-900 transition-colors resize-none"
              ></textarea>
            </div>

            <button
              onClick={handleConfirm}
              className="w-full md:w-auto bg-indigo-900 text-white font-bold py-4 px-8 rounded-xl hover:bg-indigo-800 transition-colors shadow-lg shadow-indigo-200 mt-4"
            >
              Confirm Booking
            </button>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 sticky top-8">
              <div className="mb-6 rounded-2xl overflow-hidden h-40">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="text-xl font-bold text-gray-900 mb-1">{restaurant.name}</h2>
              <div className="flex items-center gap-1 mb-6">
                <i className="bi bi-star-fill text-orange-500 text-sm"></i>
                <span className="text-sm text-gray-600">{restaurant.rating} (189 reviews)</span>
              </div>

              <div className="space-y-4 mb-8">
                <h3 className="font-semibold text-gray-900">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-sm text-gray-600">
                    <i className="bi bi-geo-alt text-orange-500 mt-0.5"></i>
                    <span>{restaurant.address || 'Address not available'}</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-gray-600">
                    <i className="bi bi-telephone text-orange-500 mt-0.5"></i>
                    <span>{restaurant.phone || 'Phone not available'}</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-gray-600">
                    <i className="bi bi-clock text-orange-500 mt-0.5"></i>
                    <span>{restaurant.openingHours || 'Hours not available'}</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-6">
                <h3 className="font-semibold text-gray-900 mb-4">Booking Summary</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Date:</span>
                    <span className="font-medium text-gray-900">{date || 'Not selected'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Time:</span>
                    <span className="font-medium text-gray-900">
                      {selectedTime || 'Not selected'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Party Size:</span>
                    <span className="font-medium text-gray-900">{partySize}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
