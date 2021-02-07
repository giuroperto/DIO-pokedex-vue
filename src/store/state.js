// arquivo de estado -> trabalhar com estado global e definir variaveis reativas e o vue vai gerar a reatividade

// vamos fazer uso da propriedade de observacao do vue
import Vue from 'vue';

const LIMIT = 25;
const OFFSET = 0;

// o objeto a partir do momento que exportamos pelo vue observable, ele passa a ser reativo, todo lugar que importar esse estado e utilizar e fizer modificacao, toda parte que utiliza-lo sabera que foi atualizado e sera atualizado reativamente

export default Vue.observable({
	list: [],
	// para aumentar a performance, guardando os pokemons ja buscados na listagem -> mesmo depois de resetar a lista -> evitando ter que fazer mais chamadas para carregar os pokemons que ja foram buscados
	tempList: [],
	// responsavel por saber se tem pokemons a serem carregados
	listHasNext: false,
	// se a lista esta completa
	listHasCompleted: false,
	// e se trouxe algum erro
	listHasError: false,

	// variaveis de controle
	isSearching: false,
	// fala para a interface que o dado que esta mostrando é resultado de uma busca
	isPokemonSearch: false,
	// nao esta usando roteamento via router, nao esta usando as paginas para renderizar momentos diferentes -> mesma listagem que vai mostrar ou a lista, ou resultado do pokemon ou a busca -> controle do que mostrar e em que momento
	searchHasError: false,

	limit: LIMIT,
	offset: OFFSET,

	pokemonId: null,
});
