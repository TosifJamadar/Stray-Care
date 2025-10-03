import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { findDoctorByCity } from '../api/api.services';

export default function FindVeterinaryDoctorSection() {
    // src/FindVeterinaryDoctor.js

    const [city, setCity] = useState('');
    const [filteredDoctors, setFilteredDoctors] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);

    const handleSearch = async () => {
        setHasSearched(true);
        const results = await findDoctorByCity(city);
        if (results) {
            setFilteredDoctors(results);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8 mx-auto">
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Find Veterinary Doctor</h2>
                    <div className="mt-8 space-y-6">
                        <div className="rounded-md shadow-sm space-y-4">
                            <div>
                                <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                                <input
                                    id="city"
                                    name="city"
                                    type="text"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    required
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                />
                            </div>
                            <div>
                                <button
                                    type="button"
                                    onClick={handleSearch}
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                                >
                                    Search
                                </button>
                            </div>
                        </div>

                        <div>
                            {filteredDoctors.length > 0 ? (
                                <div className="mt-6 space-y-4">
                                    {filteredDoctors.map(doctor => (
                                        <div key={doctor.id} className="bg-white p-4 rounded-lg shadow-md">
                                            <h3 className="text-xl font-bold text-gray-900">{doctor.name}</h3>
                                            <p className="text-gray-600">{doctor.specialization}</p>
                                            <p className="text-gray-600">Experience: {doctor.experience} year</p>
                                            <p className="text-gray-600">Address: {doctor.address}</p>
                                            <p className="text-gray-600">City: {doctor.city}</p>
                                            <p className="text-gray-600">Contact: {doctor.phone}</p>
                                            <p className="text-gray-600">Email: {doctor.email}</p>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                hasSearched && <p className="text-gray-600 mt-6">No doctors found in {city}</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );

}
