/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
const cardsData = [
  {
    title: "Tosif Jamadar",
    body: "Frontend Developer",
    image: "/img/undraw_pet_adoption_-2-qkw.svg",
    buttonText: "Add Stray",
  },
  {
    title: "Nikita Jagtap",
    body: "Frontend Developer",
    image: "/img/undraw_pet_adoption_-2-qkw.svg",
    buttonText: "Add Stray",
  },
  {
    title: "Umra Pathan",
    body: "Backend Developer",
    image: "/img/undraw_pet_adoption_-2-qkw.svg",
    buttonText: "Add Stray",
  },
  {
    title: "Raviraj Shete",
    body: "Frontend  Developer",
    image: "/img/undraw_pet_adoption_-2-qkw.svg",
    buttonText: "Add Stray",
  },
  {
    title: "Kiran More",
    body: "Backend Developer",
    image: "/img/undraw_pet_adoption_-2-qkw.svg",
    buttonText: "Add Stray",
  },
  
]


export default function AboutUsSection() {
  const missionImage = "/img/mission.jpg";
  const visionImage = "/img/vision.jpg";
  const teamImage = "/img/team.jpg";
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">About Us</h2>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
            <div className="flex flex-col md:flex-row md:items-center">
              <img src={missionImage} alt="Mission" className="w-full md:w-1/2 rounded-lg shadow-md mb-4 md:mb-0 md:mr-4" />
              <p className="text-gray-700 md:w-1/2">
                At STRAYCARE, our mission is to provide care and protection to stray animals, ensuring they receive the necessary medical treatment and finding loving homes for them. We believe every stray deserves a chance to live a happy and healthy life.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
            <div className="flex flex-col md:flex-row md:items-center">
              <p className="text-gray-700 md:w-1/2">
                Our vision is a world where all stray animals are treated with compassion and respect. We aim to create a community where strays are no longer homeless, but rather have the opportunity to be cared for and loved.
              </p>
              <img src={visionImage} alt="Vision" className="w-full md:w-1/2 rounded-lg shadow-md mb-4 md:mb-0 md:mr-4 h-72" />

            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Team</h3>
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="py-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-5 grid gap-6 md:grid-cols- lg:grid-cols-5">
                  {cardsData.map((card, index) => (
                    <div key={index} className=" text-black bg-white text-center shadow-md rounded-lg p-1">
                      <img src={card.image} alt={card.title} className="w-full object-content p-5 h-3/5" />
                      <div className="p-6 flex flex-col justify-around h-2/5">
                        <h2 className="text-2xl font-bold mb-1">{card.title}</h2>
                        <p className="text-gray-600 mb-1">{card.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />

    </div>

  );

}
