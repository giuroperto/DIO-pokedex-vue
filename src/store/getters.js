// podemos acessar o estado diretamente, mas as vezes precisa fazer uma certa manipulacao da variavel -> ex listagem de pokes mas so quero o nome deles -> se acesso o estado, toda vez que for utilizar, tenho que mapear o dado para trazer somente o nome -> centralizar isso com o getter
// recebe as variaves do estado e retorna o estado modificado

import state from './state';

export default {
	// ela por ser get é só acessar o método que já vai funcionar, não precisa executar a funcao
	// ex: pokemonInfoGetter.pokemonsInfo

	// sem o getter, sempre que fosse acessar o estado teria que fazer esse mapeamento para tratar as infos
	get pokemonsInfo() {
		return state.list.map(info => ({
			id: info.id,
			name: info.name,
			types: info.types.map(({
				type
			}) => type.name),
			sprite: info.sprites.front_default ||
				'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png',
		}));
	},
};
