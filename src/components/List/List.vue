<template>
	<ul class="list text--white bg--black">
		<p v-if="isSearching" class="list--message">Looking for the pokemon</p>
		<p v-else-if="hasSearchError" class="list--message">We couldn't find this pokemon</p>

		<!-- caso seja um search, vai fazer o v-bind da posicao zero -> como no search gera uma lista com um elemento, acessa o elemento no vbind para pegar o pokemon -> um objeto dentro do array -->
		<ListItem v-else-if="isPokemonSearching" v-bind="pokemonsList[0]" />

		<!-- se nao for nenhum desses 3 casos, v-else, pq ai teremos dois filhos irmaos e para ambos serem renderizados ao mesmo tempo -> template n eh renderizado mas renderiza os filhos -->

		<template v-else>
			<!-- pega todos os pokemons e passa para o ListItem todas as infos -> v-bind -> passa um objeto -> todas as propriedades do pokemon viram propriedades do componente -->
			<ListItem v-for="pokemon in pokemonsList" :key="pokemon.id" v-bind="pokemon" />
			<!-- funcao que vai controlar a paginacao, infinite load -> infiniteHandler -->
			<infinite-loading @infinite="infiniteHandler" />
		</template>

	</ul>
</template>

<script>
  import { state, getters, actions } from '@/store';
  import ListItem from './ListItem.vue';

  export default {
    name: 'List',
    components: {
      ListItem,
    },
    computed: {
      // pq estamos colocando tudo isso dentro da propriedade computada? estado tem que ser reativo -> para deixar a reatividade acontecer no componente, usa a propriedade computada que é especifica para gerar a reatividade de variaveis -> as duas variaveis abaixo sao reativas e retornam os estados reativos
      pokemonsList() {
        return getters.pokemonsInfo;
      },
      isSearching() {
        return state.isSearching;
      },
      isPokemonSearching() {
        return state.isPokemonSearch;
      },
      hasSearchError() {
        return state.searchHasError;
      },
    },
    methods: {
      // assincrono pois vamos fazer as chamadas das actions aqui dentro
      // o state com dolar é o state do infiniteHandler
      // sempre que chamado vai carregar a lista de pokes
      async infiniteHandler($state) {
        await actions.getPokemons();
        // esse state é o que foi criado na store
        // caso a lista tenha um proximo, ele vai executar
        if (state.listHasNext) {
          $state.loaded();
          return;
        }

        // se tiver acabado, ele avisa a interface que acabou
        if (state.listHasCompleted) {
          $state.complete();
          return;
        }

        // aqui não precisa de return pois é a última instrução
        // se tiver erros, ele passa os erros
        if (state.listHasError) {
          $state.error();
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
.list {
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	border: 10px solid color(white);
	border-radius: 8px;
	padding: 0 8px 8px 0;
	overflow-y: scroll;
	-ms-overflow-style: none;
	scrollbar-width: none;

	&::-webkit-scrollbar {
		display: none;
	}

	@media (min-width: $viewport-medium) {
		max-height: 72%;
		border: 20px solid color(white);
	}

	&--message {
		text-align: center;
		margin-top: 8px;
	}
}
</style>
