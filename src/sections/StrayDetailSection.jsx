import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { fetchStrayById, sendAdoptionEmail } from '../api/api.services';
import { toast } from 'react-toastify';
import AdoptionFormDialog from '../components/AdoptionFormDialog';

const strayAnimals = [
    {
        id: 1,
        name: 'Buddy',
        type: 'Dog',
        description: 'A friendly dog looking for a new home.',
        location: 'New York, NY',
        image: 'https://via.placeholder.com/150'
    },
    {
        id: 2,
        name: 'Whiskers',
        type: 'Cat',
        description: 'A playful cat that loves to cuddle.',
        location: 'Los Angeles, CA',
        image: 'https://via.placeholder.com/150'
    },
    {
        id: 3,
        name: 'Tweety',
        type: 'Bird',
        description: 'A chirpy bird that enjoys singing.',
        location: 'Chicago, IL',
        image: 'https://via.placeholder.com/150'
    },
    {
        id: 4,
        name: 'Rex',
        type: 'Dog',
        description: 'A loyal dog that loves to play fetch.',
        location: 'Houston, TX',
        image: 'https://via.placeholder.com/150'
    },
];

export default function StrayDetailSection() {
    const { id } = useParams();
    const [stray, setStray] = useState();
    const [loading, setLoading] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    async function fetchData() {
        const data = await fetchStrayById(id);
        setStray(data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleAdoptClick = () => {
        setIsDialogOpen(true);
    };

    const handleDialogClose = () => {
        setIsDialogOpen(false);
    };

    const handleAdoptionSubmit = async (userDetails) => {
        try {
            setLoading(true);
            await sendAdoptionEmail(
                stray.contact.email,
                stray.name,
                {
                    name: userDetails.name,
                    phone: userDetails.phone,
                    email: userDetails.email
                }
            );
            toast.success('Adoption request sent successfully!');
            setIsDialogOpen(false);
        } catch (error) {
            toast.error('Failed to send adoption request. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        stray && (
            <div>
                <Navbar />
                <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
                        <img className="h-64 w-full object-contain rounded-md" src={`http:\\\\localhost:8080\\${stray.imageUrl}`} alt={stray.name} />
                        <h2 className="mt-4 text-2xl font-bold text-gray-900">{stray.name}</h2>
                        <p className="text-gray-600">{stray.type}</p>
                        <p className="mt-2 text-gray-600">{stray.description}</p>
                        <p className="mt-2 text-gray-600">Location: {stray.location}</p>
                        <p className="mt-2 text-gray-600">Status: {stray.status}</p>
                        <h2 className="mt-2 text-xl text-gray-800">Contact Detail :</h2>
                        <div className='ml-5'>
                            <p className="mt-1 text-gray-600">Name: {stray.contact.name}</p>
                            <p className="mt-1 text-gray-600">Phone: {stray.contact.phone}</p>
                            <p className="mt-1 text-gray-600">Email: {stray.contact.email}</p>
                        </div>
                        <button 
                            className="mt-4 w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary disabled:opacity-50"
                            onClick={handleAdoptClick}
                            disabled={loading}
                        >
                            {loading ? 'Sending Request...' : `Adopt ${stray.name}`}
                        </button>
                    </div>
                </div>
                <Footer />
                <AdoptionFormDialog
                    isOpen={isDialogOpen}
                    onClose={handleDialogClose}
                    onSubmit={handleAdoptionSubmit}
                    animalName={stray.name}
                />
            </div>
        )
    );
}
