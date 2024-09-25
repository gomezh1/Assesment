const axios = require('axios');

// URL base de la API externa
const apiClient = axios.create({
  baseURL: 'https://api.weatherbit.io/v2.0',  // Base URL de Weatherbit
  timeout: 10000,  // Tiempo de espera
  headers: {
    'Content-Type': 'application/json'
  }
});

// Función para hacer una petición GET al endpoint de clima actual
const apiKey = '533590a8a8f248b6be5e666ca494115b';  

async function getCurrentWeather(city) {
  const endpoint = `/current?city=${city}&key=${apiKey}`;
  
  try {
    const response = await apiClient.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;  // Manejo de errores
  }
}
/*
// Función para hacer una petición POST
async function postData(endpoint, data) {
  try {
    const response = await apiClient.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
}
const { getCurrentWeather } = require('./apiService');

getCurrentWeather('Bogotá')
  .then(data => console.log(data))
  .catch(error => console.error(error));


module.exports = { getCurrentWeather, postData };*/
