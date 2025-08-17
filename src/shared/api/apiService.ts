const BASE_URL = 'https://jsonplaceholder.typicode.com';

const apiService = async <T>(endpoint: string): Promise<T> => {
  const response = await fetch(`${BASE_URL}/${endpoint}`);

  if (!response.ok) {
    throw new Error('Fetch failed');
  }

  return response.json();
};

export default apiService;
