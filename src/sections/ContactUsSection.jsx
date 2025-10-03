import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ContactUsSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState({
        message: '',
        type: '' // 'success' or 'error'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/contact/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                setStatus({
                    message: 'Message sent successfully! We will get back to you soon.',
                    type: 'success'
                });
                // Clear form fields
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            } else {
                throw new Error(data.error || 'Failed to send message');
            }
        } catch (error) {
            setStatus({
                message: error.message || 'Failed to send message. Please try again later.',
                type: 'error'
            });
        }
    };

    return (
        <div>
            <Navbar />
            <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">Contact Us</h2>

                    {status.message && (
                        <div className={`mb-4 p-4 rounded-md ${
                            status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                        }`}>
                            {status.message}
                        </div>
                    )}

                    <div className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">STRAYCARE Information</h3>
                        <p className="text-gray-700 mb-4">
                            STRAYCARE is committed to rescuing and caring for stray animals. We aim to provide them with medical treatment and find loving homes for these animals.
                        </p>
                        <p className="text-gray-700 mb-4">
                            For any inquiries or feedback, please fill out the form below or contact us directly via email at <strong>info@straycare.org</strong> or phone at <strong>(123) 456-7890</strong>.
                        </p>
                    </div>

                    <form className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Send Us a Message</h3>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                            ></textarea>
                        </div>
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}
