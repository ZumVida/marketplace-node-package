import useMarketplace, { initApi } from './main';

function useService() {
  // define base url
  const baseURL = 'BASE_URL';

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
        alert(error);
        console.log({ error });
      },
      // Conjunto de errores por defecto (opcional)
      defaultError: {
        // Error a mostrar si hay ERROR 401
        unauthorized: 'No tiene permisos suficientes',
      },
    },

    // Controlador del TOKEN de AUTHENTICACION
    tokenHandler: {
      // Obtener el token (Se ejecuta en cada pedido que necesite authenticacion)
      get: () => {
        const TOKEN = localStorage.getItem('authToken');
        return TOKEN;
      },
      // Establecer token
      set: (token) => {
        localStorage.setItem('authToken', token);
      },
    },
  });

  // Devuelve la instancia de marketplace
  return useMarketplace(api);
}
