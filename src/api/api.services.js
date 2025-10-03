import axios from "axios";


const url = import.meta.env.VITE_APP_API_URL;


export async function fetchAllStrays() {
  try {
    const response = await axios.get(`${url}/api/stray/all`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("Error:", error);
    return null;
  }
}

export async function fetchStrayById(id) {
  try {
    const response = await axios.get(`${url}/api/stray/byId/${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("Error:", error);
    return null;
  }
}

export async function addStray(data){
  try {
    const response = await axios.post(`${url}/api/stray/`, data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("Error:", error);
    return null;
  }
}

export async function addDoctor(data){
  try {
    const response = await axios.post(`${url}/api/doctor/`, data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("Error:", error);
    return null;
  }
}

export async function findDoctorByCity(city){
  try {
    const response = await axios.get(`${url}/api/doctor/city?city=${city}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("Error:", error);
    return null;
  }
}

export const sendAdoptionEmail = async (toEmail, animalName, contactDetails) => {
    try {
        const response = await axios.post(`${url}/api/stray/send-adoption-email`, {
            toEmail,
            animalName,
            contactDetails
        });
        return response.data;
    } catch (error) {
        console.error('Error sending adoption email:', error);
        throw error;
    }
};