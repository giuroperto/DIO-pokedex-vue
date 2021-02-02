// sao o ponto de entrada para chamadas de api assincronas
// chamada assincrona para atualizar estado estara aqui
// chamada de api e por aqui

// onde fazemos a chamada de api e pega o dado retornado, atualizando o estado atraves das mutations

import PokeAPI from '@/services/pokeapi';

import state from './state';
import mutations from './mutations';

export default {
	async getPokemons() {
		// funcoes que vamos utilizar quando formos fazer a busca da listagem de pokemons
		const {
			setList,
			setIsPokemonSearch,
			setListHasError,
			setListHasNext,
			setListHasCompleted,
			updateOffset,
		} = mutations;

		// boas praticas usar try/catch com asyn await
		try {
			// como vai controlar algumas variaveis de longe, sempre que for realizar uma busca nova quer resetar o que esta fazendo
			// para garantir que quando for buscar todos os pokemons, não traga a busca de pokemon -> mesmo componente para renderizar diferentes momentos da aplicação
			setIsPokemonSearch(false);
			// limpar variavel para que se deu erro antes nao reflita nesse momento
			setListHasError(false);

			// nessa chamada não nos mostra os dados do pokemon, apenas o nome
			const pokemonsList = await PokeAPI.getPokemons({
				// sempre pega as variaveis do estado pois o estado é reativo, garante que sempre vai pegar o valor atualizado
				limit: state.limit,
				offset: state.offset,
			});

			// antigamente para fazer if qdo n queriamos que o acesso a propriedades de objetos causassem problemas tinhamos que garantir que a variavel pokemonList existisse, que o pokemonsList.results existisse e o pokemonsList.results.length existisse -> gera mta complexidade
			// chaining opcional na condicional
			if (pokemonsList?.results?.length) {
				// gera um array de promises -> pokeAPI retorna uma chamada do axios get, e nao estamos utilizando a resolucao de promises e nem async await -> simplesmente retorna a chamada (não tem await) -> configurando promises para cada pokemon -> gerar uma listagem de promises que vai simbolizar cada pokemon
				const prepareInfo = pokemonsList.results.map((item) => PokeAPI.getPokemonByName(item
					.name));
				// agora estara resolvendo as promises, todas que estao dentro do array, se nao usar o await vai gerar uma promise nao resolvida
				const pokemonsInfo = await Promise.all(prepareInfo);

				setList(pokemonsInfo);
			}

			// a propria API tras a info de next caso exista mais elementos
			if (pokemonsList?.next) {
				setListHasNext(true);
				updateOffset();
			} else {
				setListHasNext(false);
				setListHasCompleted(true);
			}
		} catch (error) {
			setListHasError(true);
		}
	},

	async getPokemonByName(name) {
		const {
			setPokemonSearched
		} = mutations;

		const pokemon = await PokeAPI.getPokemonByName(name);

		if (pokemon) {
			setPokemonSearched(pokemon);
		}
	},

	async searchPokemon(name) {
		const {
			setIsPokemonSearch,
			setIsSearching,
			setPokemonSearched,
			setSearchHasError,
			resetList,
		} = mutations;

		// se chamar o search pokemon sem nada -> reseta a lista
		if (!name) {
			resetList();
			return;
		}

		try {
			setSearchHasError(false);
			setIsSearching(true);
			setIsPokemonSearch(true);

			// ve se o pokemon procurado ja existe na lista, pois ai nao precisa chamar a api novamente
			const pokemon = state.tmplist.find(info => info.name.toLowerCase() === name.toLowerCase());

			if (pokemon) {
				setPokemonSearched(pokemon);
				return;
			}

			await this.getPokemonByName(name);
		} catch (error) {
			setSearchHasError(true);
		} finally {
			// ou vai dar sucesso ou vai dar erro e tira o loading
			setIsSearching(false);
		}


	}

};
