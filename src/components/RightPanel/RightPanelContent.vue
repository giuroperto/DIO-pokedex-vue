<template>
	<!-- input de dados e o form do html pq se tiver um botao dentro tb é acionado se pressionar a tecla enter dentro de um input (a mesma coisa que clicar no botao) -->
	<!-- mudando de form para div pois falta adicionar botao clear e executar por enter de outra maneira -->
	<div class="search">
		<label for="search" class="search__label text--white bg--black">
			<h3 class="search__label--text">E.g.: Charizard | 6</h3>
			<!-- colocamos o v-model para controlar o nome do pokemon e adicionamos o modificador de trim para nao ter que se preocupar com espacos na direita e na esquerda -> observando a variavel name para update o estado -->
			<!-- como tirou o form lá de cima e transformou em div, o enter não está mais funcionando, ai tem que adicionar o evento keyup -->
			<input
      id="search"
      v-model.trim="name"
      type="text"
      class="search__input"
      @keyup.enter="searchPokemon"
      >
		</label>

		<div class="buttons">
			<!-- quando usa form se aperta o botao da refresh na pagina, para evitar -> usar prevent para nao usar o efeito de formulario -->
			<button class="btn btn--clear" @click.prevent="clear">
				Clear
			</button>
			<button class="btn btn--search bg--gray text--yellow" @click.prevent="searchPokemon">
				Search
			</button>
		</div>

	</div>
</template>

<script>

import { actions, mutations } from '@/store';

  export default {
    name: 'RightPanelContent',
    data() {
      return {
        name: '',
      };
    },
    methods: {
      clear() {
        this.name = '';
        // nao usou action pra depois usar mutation dentro dela pois usa com chamadas assincronas -> reset a lista é só pegar o que tava no cache e adicionar de volta -> nao é chamada assincrona
        mutations.resetList();
      },
      async searchPokemon() {
        await actions.searchPokemon(this.name);
      },
    },
  };

</script>

<style lang="scss" scoped>
.search {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	// para ocupar todo o conteudo e espaco livre do elemento
	flex: 1;
	// rotaciona em 180 pois todo o conteudo la dentro girou junto quando rodou o painel -> rotaciona em x pois tera a impressao visual que sera escrito da esquerda para a direita -> só rotacionamento visual
	transform: rotateX(-180deg);

	@media (min-width: $viewport-medium) {
		transform: rotateY(-180deg);
		padding-top: 50px;
	}

	&__label {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 100%;
		height: 50%;
		padding: 6px 12px 12px;

		@media (min-width: $viewport-medium) {
			height: 36%;
			padding: 12px 24px 24px;
		}
	}

	&__input {
		color: inherit;
		background: transparent;
		border: none;
		border-bottom: 2px solid color(white);
		padding: 4px 8px;

		@media (main-width: $viewport-medium) {
			padding: 8px;
		}
	}

	.buttons {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .btn {
      border-radius: 8px;
      font-size: 18px;
      font-weight: bold;
      cursor: pointer;

      &--clear {
        width: 80px;
        padding: 8px;
        margin-right: 16px;
        border: none;
      }

      &--search {
        width: 120px;
        padding: 15px;
        border: 4px solid color(black);

        @media (min-width: $viewport-medium) {
          width: 160px;
        }
      }
    }
  }
}
</style>