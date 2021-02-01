<template>
	<!-- div.panel>div.container>TopPanel -->
	<div class="panel bg--red-04">
		<div class="container bg--red-01">
			<!-- bind do style e class
      quando passamos atributos para o elemento -> props
      dependendo do elemento é injetado no primeiro elemento -> propriedades html n precisam ser passadas pela props -->
			<TopPanelButton v-for="(button, index) in buttons" :key="index" v-bind="button" />
		</div>
	</div>
</template>

<script>
import TopPanelButton from "./TopPanelButton.vue";

export default {
	name: "TopPanel",
	components: {
		TopPanelButton,
	},
	data() {
		// retornar lista de botoes e definir os botoes
		return {
			buttons: [
				{ style: { width: "50px", height: "50px" }, class: "bg--blue-00" },
				{ style: { width: "20px", height: "20px" }, class: "bg--red-02" },
				{ style: { width: "20px", height: "20px" }, class: "bg--yellow" },
				{ style: { width: "20px", height: "20px" }, class: "bg--green" },
			],
		};
	},
};
</script>

<style lang="scss" scoped>
.panel {
	position: absolute;
	width: 100%;
	// criamos o background color como a seguir, mas geramos os mixins para gerar esses backgrounds
	// background-color: color('red-04');
	// cortar o elemento, gerar formar geometricas
	clip-path: polygon(0 0, 100% 0, 100% 41px, 270px 41px, 200px 100%, 0 100%);
	z-index: 1;

	@media (min-width: $viewport-medium) {
		// 20px considerando o padding
		width: calc(50% + 20px);
	}

	.container {
		display: flex;
		padding: 10px;
		align-items: flex-start;
		height: 75px;
		// background-color: color('red-01');
		clip-path: polygon(0 0, 100% 0, 100% 38px, 270px 38px, 200px 72px, 0 72px);
		// inset é para definir de dentro, - 10 para crescer para a esquerda
		box-shadow: inset - 10px 0 0 0 color("red-03");
	}
}
</style>
