// src/Cards.js
import React from 'react';

const cardsData = [
  {
    title: "Add Stray",
    body: "Help us by adding information about stray animals in your area.",
    image: "/img/undraw_pet_adoption_-2-qkw.svg",
    buttonText: "Add Stray",
    link: "/add-stray",
  },
  {
    title: "Adopt Stray",
    body: "Looking to adopt a pet? Find stray animals that need a home.",
    image: "/img/undraw_friends_r511.svg",
    buttonText: "Adopt Stray",
    link: "/adopt-stray",
  },
  {
    title: "Volunteer Treatment",
    body: "Join our volunteer team to provide treatment to stray animals.",
    image: "/img/undraw_sign_in_re_o58h.svg",
    buttonText: "Volunteer",
    link: "/volunteer-treatment",
  },
  {
    title: "Find Veterinary Doctor",
    body: "Locate veterinary doctors near you for stray animal treatment.",
    image: "/img/undraw_location_search_re_ttoj.svg",
    buttonText: "Find Vet",
    link: "/find-vet",
  },
];

const  OptionCards= () => {
  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-5 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {cardsData.map((card, index) => (
          <div key={index} className=" text-white shadow-md rounded-lg p-1" style={{backgroundColor:"#0101017b"}}>
            <img src={card.image} alt={card.title} className="w-full object-content p-5 h-1/2" />
            <div className="h-100 p-6 flex flex-col justify-around h-1/2">
              <h2 className="text-2xl font-bold mb-2">{card.title}</h2>
              <p className="text-white mb-4">{card.body}</p>
              <a href={card.link} className="px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary">
                {card.buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OptionCards;

