import axios from 'axios';
import Constants from 'expo-constants';

const apiKey = Constants.expoConfig?.extra?.OPENWEATHER_API_KEY;

const BASE_URL = 'https://api.openweathermap.org/data/2.5';
const BASE_URL_CITIES = 'https://api.openweathermap.org/geo/1.0';

export async function fetchWeatherByCity(city: string) {
  const response = await axios.get(`${BASE_URL}/weather`, {
    params: {
      q: city,
      appid: apiKey,
      units: 'metric',
      lang: 'en',
    },
  });
  return response.data;
}

export async function fetchWeatherByCoords(lat: number, lon: number) {
  const response = await axios.get(`${BASE_URL}/weather`, {
    params: {
      lat,
      lon,
      appid: apiKey,
      units: 'metric',
      lang: 'en',
    },
  });
  return response.data;
}



export async function searchCities(query: string): Promise<{ name: string; country: string; lat: number; lon: number; }[]> {
  const apiKey = Constants.expoConfig?.extra?.OPENWEATHER_API_KEY;

  const response = await axios.get(`${BASE_URL_CITIES}/direct`, {
    params: {
      q: query,
      limit: 5,
      appid: apiKey,
    },
  });

  return response.data;
}
