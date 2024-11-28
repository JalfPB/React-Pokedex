import axios from 'axios';
 
const BASE_URL = 'https://pokeapi.co/api/v2';
 
export const getPokemonList = async (limit = 10) => {
    const response = await axios.get(`${BASE_URL}/pokemon?limit=${limit}`);
    return response.data.results; // Retorna la lista de Pokémon
};
 
export const getPokemonDetails = async (url) => {
    const response = await axios.get(url);
    return response.data; // Retorna detalles de un Pokémon
};
