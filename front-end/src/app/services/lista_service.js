import axios from 'axios';

const baseURL =  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
class ApiService {

    constructor() {
      if (ApiService.instance) {
        return ApiService.instance; // Retorna a instância existente
      }
      this.listasdeTareas = [];
      this.subscribers = [];
      this.api = axios.create({
        baseURL:baseURL,
        httpsAgent: new (require("https").Agent)({ rejectUnauthorized: false }),
      });
    }

    async getLists() {
      try {
        const response = await this.api.get('/listas');
        this.listasdeTareas = response.data;
        this.notifySubscribers();
        return this.listasdeTareas.sort((a, b) => a.id - b.id);
      } catch (error) {
        console.error('Erro ao buscar listas:', error);
        throw error;
      }
    }

    subscribe(callback) {
      this.subscribers.push(callback);
    }
  
    notifySubscribers() {
      this.subscribers.forEach((callback) => callback(this.listasdeTareas));
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
        this.listasdeTareas = this.listasdeTareas.filter((lista) => lista.id !== id);
        this.notifySubscribers();
        return this.listasdeTareas;
      } catch (error) {
        console.error('Erro ao deletar lista:', error);
        throw error;
      }
    }

    async updateList(id, nome) {
      try {
        const response = await this.api.put(`/listas/${id}`, { nome });
      } catch (error) {
        console.error('Erro ao deletar lista:', error);
        throw error;
      }
    }

    
  }

const instance = new ApiService();
export default instance;

