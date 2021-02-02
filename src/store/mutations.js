// para fazer o controle dessa reatividade dos estados -> mutacoes
// um estado so pode ser editado atraves de uma mutacao, nao edita atraves de uma chamada assincrona -> boas praticas
// somente as mutacoes tem acesso aos estados e podem mudar eles

import state from './state';

// exportar lista de mutacoes responsaveis por alterar o estado baseado em cada uma delas
export default {
	// quando precisar atualizar a posicao de onde comecar a mostrar o pokemon
	// paginacao
	// Updates the pokedex loading offset
	updateOffset() {
		state.offset += state.limit;
	},

	// Adds pokemons to the pokedex for the infinite loading
	setList(List) {
		state.list.push(...List);
		state.tempList.push(...List);
	},

	// Informs if the pokedex needs more data
	setListHasNext(flag) {
		state.listHasNext = flag;
	},

	// Informs if the pokedex has finished fetching data
	setListHasCompleted(flag) {
		state.listHasCompleted = flag;
	},

	// Informs if the pokedex got an error
	setListHasError(flag) {
		state.listHasError = flag;
	},

	// Resets the pokedex to the last cache and removes search information
	resetList() {
		state.list = [...state.tempList];
		state.isPokemonSearch = false;
		state.listHasError = false;
		state.searchHasError = false;
	},

	// Adds to the pokedex only the searched pokemon
	setPokemonSearch(pokemon) {
		// para deixar o codigo mais simples, sempre vamos trabalhar com listagem
		// como tem um pokemon apenas, retorna so a info do pokemon na listagem
		// trabalhar com uma lista com um só pokemon -> response = objeto
		state.list = [pokemon];
	},

	// Informs that the search is happening
	setIsSearching(flag) {
		state.isSearching = flag;
	},

	// Informs that the search has been done
	setIsPokemonSearch(flag) {
		state.isPokemonSearch = flag;
	},

	// Informs that search got an error
	setSearchHasError(flag) {
		state.searchHasError = flag;
	}
};
