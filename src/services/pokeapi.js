// pegando a instancia customizada do axios
import axios from '@/axios';

// limit controla quantidade de cada request e o offset a partir da onde quer fazer a busca
const getPokemons = ({ limit = 25, offset = 0 }) => axios.get(`/pokemon?limit=${limit}&offset=${offset}`);

const getPokemonByName = name => axios.get(`/pokemon/${name}`);

export default {
  getPokemons,
  getPokemonByName,
};
