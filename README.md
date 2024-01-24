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

Create an axios instance

```ts
import axios, { type AxiosRequestHeaders } from 'axios';

/**
 * initApi
 */
export function initApi() {
  const baseURL: string = 'API_URL_HERE';

  const api = axios.create({
    baseURL,
    withCredentials: true,
  });

  // Setup interceptors
  api.interceptors.request.use((_request) => {
    const authToken = 'USER_AUTH_TOKEN';
    const appToken = 'SOME_APP_TOKEN';

    if (!(_request.headers as AxiosRequestHeaders)['App-Token']) {
      (_request.headers as AxiosRequestHeaders)['App-Token'] =
        appToken;
    }

    if (!(_request.headers as AxiosRequestHeaders)['Content-Type']) {
      (_request.headers as AxiosRequestHeaders)['Content-Type'] =
        'application/json';
    }

    if (authToken && authToken.length > 0) {
      /* Check if authorization is set */
      if (!(_request.headers as AxiosRequestHeaders)['Authorization']) {
        /* Check if the user is authenticated to send Bearer token */
        (_request.headers as AxiosRequestHeaders).Authorization =
          'Bearer ' + authToken;
      }
    }
    return _request;
  });

  return api;
}

```

Now import axios instance and init service
```ts
import { initApi } from './initApi';

import marketplace from '@zumvida/marketplace';

/**
 * Composable service
 */ 
export function useService() {
	const api = initApi()
  return marketplace(api);
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

### v0.0.6
- User Recipients endpoints
- Create Order with items