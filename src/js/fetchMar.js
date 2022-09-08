const BASE_URL = 'https://restcountries.com/v3.1/name/';
const FIELDS = 'fields=name,capital,population,flags,languages';

export async function fetchMar(country) {
  const response = await fetch(`${BASE_URL}${country}?${FIELDS}`);
  
  if (!response.ok || response.status === 404) {
    throw new Error(response.status);
  }
  const newCountry = await response.json();
  // return response.json();
  return newCountry;
};

export default { fetchMar };