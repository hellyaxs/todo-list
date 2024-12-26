import axios from 'axios';

const baseURL =  'http://[::1]:3000';

// process.env.NEXT_PUBLIC_API_URL ||
class ApiService {
    constructor() {
      this.api = axios.create({
        baseURL,
      });
    }
  
    async getLists() {
      try {
        const response = await this.api.get('/listas');
        return response.data;
      } catch (error) {
        console.error('Erro ao buscar listas:', error);
        throw error;
      }
    }
  
    async createList(nome) {
      try {
        const response = await this.api.post('/listas', { nome });
        return response.data;
      } catch (error) {
        console.error('Erro ao criar lista:', error);
        throw error;
      }
    }
  
    // Adicione outros métodos conforme necessário
  }
  
export default ApiService;

