const API_URL = 'http://localhost:5000/api';

async function apiRequest(endpoint, method = 'GET', body = null, token = null) {
  const headers = { 'Content-Type': 'application/json' };
  if (token) headers['Authorization'] = `Bearer ${token}`;

  const options = { method, headers };
  if (body) options.body = JSON.stringify(body);

  try {
    const response = await fetch(`${API_URL}${endpoint}`, options);
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Erro ${response.status}: ${errorText}`);
    }
    return response.json();
  } catch (error) {
    console.error('Detalhes do erro:', error);
    throw error; // Re-throw para o alert capturar
  }
}

async function login(email, password) {
  const data = await apiRequest('/users/login', 'POST', { email, password });
  localStorage.setItem('token', data.token);
  return data.token;
}