import Factory from './factory';

const coreApiUrl = 'https://pokeapi.co/api/v2';

// criacao de instancia passando a coreApi
const commonInstance = Factory(coreApiUrl);

export default commonInstance;

// sempre que for usar o axios a gente vai gerar uma nova instancia do Factory para poder fazer uso dos interceptadores definidos