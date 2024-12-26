"use client";
import { useEffect, useState } from "react";
import Item from "./components/item";
import  ApiService  from "./services/lista_service";


export default function Home() {
  const apiService = new ApiService();
  const [lists, setLists] = useState([]);
  const [newListName, setNewListName] = useState("");
 
  const fetchLists = async () => {
    try {
      const data = await apiService.getLists();
      setLists(data);
    } catch (error) {
      console.error('Erro ao buscar listas:', error);
    }
  };

  useEffect(() => {
    fetchLists();
  }, []);


  const addList = () => {
    if (newListName.trim() !== "") {
      const novalista = apiService.createList(newListName);
      setLists([...lists, novalista]);
      setNewListName(""); 
      fetchLists();
      console.log(lists);
    }
  };

  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <h1 className="text-center text-2xl font-bold ">Nova Lista de Tarefas</h1>
   
      <div className="w-full min-w-96 mt-4 relative">
        <input
        value={newListName}
        onChange={(e) => setNewListName(e.target.value)} 
        onKeyDown={(e) => e.key === "Enter" && addList()}
        type="text" className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-10 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Crie uma nova lista de tarefas" />
        <button onClick={addList}  className="absolute right-1 top-1 rounded bg-purple-500 text-white hover:bg-purple-600 transitionbg-slate-800 p-1.5 border border-transparent text-center text-sm  transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700  active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
        </button>
      </div>
  

    <div className="min-h-screen bg-black text-white p-5">
      
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {lists.map((list) => (
          <Item 
            key={list.id}
            idLista={list.id}
            className="border-2 border-purple-500 rounded-lg p-4 text-center"
            title={list.nome}
          >
          </Item>
        ))}
      </div>
    </div>

   
       
      </main>
    </div>
  );
}
