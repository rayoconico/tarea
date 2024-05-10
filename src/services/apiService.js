import axios from 'axios';

const API_URL = ' https://api.hipotecarios.info/creditos/';

export async function fetchMortgageOptions({ valorProPiedad, Pie, plazo }) {
  try {
    const Dfl2 = true; // Valor fijo para el ejemplo
    const Tiempo = plazo; // Reemplazar 'plazo' por 'Tiempo' para coincidir con el parámetro de la API
    const response = await axios.get(API_URL, {
      params: { valorProPiedad, Pie, Tiempo, Dfl2 },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching mortgage options:', error);
    throw new Error('Hubo un error al obtener las opciones de hipoteca.');
  }
}