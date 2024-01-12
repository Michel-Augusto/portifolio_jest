const axios = require('axios');

async function pokemonData() {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/pikachu');
    return response.data;
  } catch (error) {
    throw error;
  }
}

async function berrieData() {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/berry/cheri');
      return response.data;
    } catch (error) {
      throw error;
    }
  }

module.exports = { pokemonData, berrieData };