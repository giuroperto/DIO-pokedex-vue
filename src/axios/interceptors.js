// interceptador de request pega a configuracao passada e retorna ela 

const requestInterceptor = config => config;

// para nao precisar acessar direto o response.data a gente já retorna apenas essa propriedade

const responseSuccessInterceptor = response => response.data;

// no caso de erro, se ele tiver a propriedade response, ele manda ela, se nao manda o erro como inteiro e manda como rejeitado a response direto

const responseErrorInterceptor = (error) => {
	const response = error.response || error;
	return Promise.reject(response);
};

export {
	requestInterceptor,
	responseSuccessInterceptor,
	responseErrorInterceptor,
};
