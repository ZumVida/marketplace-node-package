# marketplace

## Config

Install axios

```sh
# Using NPM
npm i axios

# Using YARN
yarn add axios

# Using PNPM
pnpm add axios

```

```js
import useMarketplace, { initApi } from '@perlatec/marketplace'


export function useService() {
	// define base url
	const baseURL = 'BASE_URL'

	// Error handler
	const api = initApi({
		baseURL,
		errorHandler: {
			/**
			 * Esta funcion se ejecuta cuando la API devuelve 401
			 */
			logout: () => {
				console.log('logout');
			},
			/**
			 * Esta funcion se ejecuta cuando la API devuelve un error 4xx o 5xx
			 * @param error 
			 */
			handleError: (error) => {
				alert(error)
				console.log({ error })
			},
			// Conjunto de errores por defecto (opcional)
			defaultError: {
				// Error a mostrar si hay ERROR 401
				unauthorized: 'No tiene permisos suficientes'
			}
		},

		// Controlador del TOKEN de AUTHENTICACION
		tokenHandler: {
			// Obtener el token (Se ejecuta en cada pedido que necesite authenticacion)
			get: () => {
				const TOKEN = localStorage.getItem('authToken')
				return TOKEN
			},
			// Establecer token
			set: (token) => {
				localStorage.setItem('authToken', token)
			}
		}
	})

	// Devuelve la instancia de marketplace
	return useMarketplace(api)
}

```


## Examples

```js
import type { 
	ProductRequestFilter,
	UserLoginRequest,
} from '@zumvida/marketplace';

import {useService} from './service'


const $service = useService()

/**
 * login
 * @param params 
 */
async function login(params: UserLoginRequest) {
	const { data } = await $service.user.auth.login(params)

	console.log({
		user: data.data,
		token: data.auth_token
	})
}

/**
 * filterProducts
 * @param params 
 */
async function filterProducts(params: ProductRequestFilter) {
	const { data } = await $service.marketplace.product.filter(params)

	console.log({
		products: data.data,
		pagination: data.meta
	})
}
```

## Changelog

### v0.1.6
- Administracion de Productos
- Errores corregidos

### v0.1.5
- Gestion de almacenes
- Errores corregidos

### v0.1.4
- Eliminar destinatarios
- Errores corregidos

### v0.1.3
- Gestion de ordenes

### v0.1.2
- Gestion de imagenes

### v0.1.1
- Correccion de errores

### v0.1.0
- Control de errores
- Gestión de Token de authenticacion
- Incluye inicializado de Axios

### v0.0.6
- User Recipients endpoints
- Create Order with items