// instancia do axios com configuracao pre definida
// ao inves de utilizar o axios diretamente, utilizar uma instancia obtida pela factory

// sobrescrevendo o que o axios faz para obter uma instancia e ter maior controle do que esta acontecendo

import axios from 'axios';

import {
	requestInterceptor,
	responseSuccessInterceptor,
	responseErrorInterceptor,
} from './interceptors';

// axios create com uma url base da api

function Factory(baseURL) {
	const instance = axios.create({
		baseURL,
    });
    
    //toda request e response ser interceptada pelo interceptador

	instance.interceptors.request.use(requestInterceptor);

	instance.interceptors.response.use(
		responseSuccessInterceptor,
		responseErrorInterceptor,
	);

	return instance;
}

export default Factory;