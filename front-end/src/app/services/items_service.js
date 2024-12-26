import axios from 'axios';

const baseURL =  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

class ItemService {
    constructor() {
      this.api = axios.create({
        baseURL:baseURL,
        httpsAgent: new (require("https").Agent)({ rejectUnauthorized: false }),
      });
    }


    async getItemsOfList(id) {
      try {
        const response = await this.api.get(`/listas/${id}/itens`);
        return response.data.sort((a, b) => a.id - b.id);
      } catch (error) {
        console.error('Erro ao buscar listas:', error);
        throw error;
      }
    }
  
    async createItem(id,{ nome, checked, description }) {
      try {
        const response = await this.api.post(`/listas/${id}/itens`, 
            { "item": {
                    "titulo": nome, 
                    "check": checked, 
                    "descricao_breve": description, 
                    "lista_id": id 
                    }
            });
        return response.data;
      } catch (error) {
        console.error('Erro ao criar lista:', error);
        throw error;
      }
    }

    async updateItem(idLista,idItem, { nome, checked, description }) {
      try {
        const response = await this.api.put(`/listas/${idLista}/itens/${idItem}`, 
            { "item": {
                    "titulo": nome, 
                    "check": checked, 
                    "descricao_breve": description, 
                    "lista_id": idLista 
                    }
            });
        return response.data;
      } catch (error) {
        console.error('Erro ao criar lista:', error);
        throw error;
      }
    }

    async deleteItem(idLista, idItem) {
      try {
        const response = await this.api.delete(`/listas/${idLista}/itens/${idItem}`);
        return response.data;
      } catch (error) {
        console.error('Erro ao deletar lista:', error);
        throw error;
      }
    }
  
    // Adicione outros métodos conforme necessário
  }

const instanceItemService = new ItemService();
export default ItemService;

