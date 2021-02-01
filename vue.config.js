module.exports = {
	lintOnSave: false,

	css: {
		loaderOptions: {
			sass: {
				// acesso a infos de funcoes e cores
				// importanto por aqui não precisa se preocupar em importar em cada componente que for utilizar essas infos -> ficam como global

				additionalData: `
        @import "@/styles/functions";
        @import "@/styles/colors";
        @import "@/styles/variables";
      `,
			},
		},
	},
};
