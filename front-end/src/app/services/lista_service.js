import axios from 'axios';

const baseURL =  'http://localhost:3000';

// process.env.NEXT_PUBLIC_API_URL ||
class ApiService {
    constructor() {
      this.api = axios.create({
        baseURL:"http://localhost:3000",
        httpsAgent: new (require("https").Agent)({ rejectUnauthorized: false }),
      });
    }


  /**
   * @typedef {Object} Lista
   * @property {number} id - O ID da lista.
   * @property {string} nome - O nome da lista.
   */

  /**
   * Busca as listas da API.
   * @returns {Promise<Lista[]>} Retorna uma promise com um array de objetos do tipo Lista.
   */
    async getLists() {
      try {
        const response = await this.api.get('/listas');
        return response.data.sort((a, b) => a.id - b.id);;
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

    async deleteList(id) {
      try {
        const response = await this.api.delete(`/listas/${id}`);
        return response.data;
      } catch (error) {
        console.error('Erro ao deletar lista:', error);
        throw error;
      }
    }
  
    // Adicione outros métodos conforme necessário
  }
  
export default ApiService;

