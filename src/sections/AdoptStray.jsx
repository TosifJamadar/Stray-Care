import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom';
import { fetchAllStrays } from '../api/api.services';

export default function AdoptStray() {
    const history = useNavigate();
const [strayAnimals, setStrayAnimals] = useState([]);
    async function fetchData(params) {
        const data = await fetchAllStrays();
        setStrayAnimals(data);
    }
    useEffect(() => {

        fetchData();



    }, [])

    const handleCardClick = (id) => {
        history(`/stray/${id}`);
    };
    
    return (
        <div>
            <Navbar dark={false} />
            <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6">Adopt a Stray Animal</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {strayAnimals.map((animal) => (
                            <div key={animal._id} className="bg-white rounded-lg shadow-md overflow-hidden" onClick={() => handleCardClick(animal._id)}>
                                <img className="h-52 w-full object-contain" src={`http:\\\\localhost:8080\\${animal.imageUrl}`} alt={animal.name} />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900">{animal.name}</h3>
                                    <p className="text-gray-600">{animal.type}</p>
                                    <p className="mt-2 text-gray-600">{animal.description}</p>
                                    <p className="mt-2 text-gray-600">Location: {animal.location}</p>
                                    <p className="mt-2 text-gray-600">Status: {animal.status}</p>
                                    <button className="mt-4 w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary">
                                        Adopt {animal.name}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
