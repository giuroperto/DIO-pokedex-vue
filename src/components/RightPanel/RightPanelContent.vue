<template>
	<!-- input de dados e o form do html pq se tiver um botao dentro tb é acionado se pressionar a tecla enter dentro de um input (a mesma coisa que clicar no botao) -->
	<form class="search">
		<label for="search" class="search__label text--white bg--black">
			<h3 class="search__label--text">E.g.: Charizard</h3>
			<input type="text" id="search" class="search__input">
		</label>

		<!-- quando usa form se aperta o botao da refresh na pagina, para evitar -> usar prevent para nao usar o efeito de formulario -->
		<button class="search__button bg--gray text--yellow" @click.prevent>
			Search
		</button>

	</form>
</template>

<script>
export default {
	name: "RightPanelContent",
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

	&__button {
		align-self: flex-end;
		width: 120px;
		height: 50px;
		border: 4px solid color(black);
		border-radius: 8px;
		font-size: 18px;
		font-weight: bold;
		cursor: pointer;

		@media (min-width: $viewport-medium) {
			width: 160px;
			height: 60px;
		}
	}
}
</style>