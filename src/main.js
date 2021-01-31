import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
	render: h => h(App),
}).$mount('#root');


// POSTCSSRC - aplicar algumas configuracoes depois do processamento do CSS
// responsavel por algumas regras de CSS que sao escritas de maneiras diferentes para os diferentes browsers

//JSCONFIG.JSON -> para adicionar o @/ como a pasta source para podermos fazer autocomplete -> o exclude são as pastas que não precisam ser pesquisadas