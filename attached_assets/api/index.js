// Este archivo es el punto de entrada para la función serverless de Vercel.
// Importa la función de configuración de la aplicación Express y la llama.

import { setupApp } from '../server/index.ts';

// Vercel espera que exportemos una función que maneje la solicitud.
// setupApp() devuelve la aplicación Express.
export default async function handler(req, res) {
  const app = await setupApp();
  app(req, res);
}
