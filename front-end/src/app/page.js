"use client";
import { useState } from "react";
import Item from "./components/item";

export default function Home() {
  const [lists, setLists] = useState([]);
  const [newListName, setNewListName] = useState("");

  const addList = () => {
    if (newListName.trim() !== "") {
      setLists([...lists, { id: Date.now(), name: newListName }]);
      setNewListName(""); // Limpa o campo de texto
    }
  };
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <h1 className="text-center text-2xl font-bold ">Nova Lista de Tarefas</h1>
   
      <div class="w-full min-w-96 mt-4 relative">
        <input
        value={newListName}
        onChange={(e) => setNewListName(e.target.value)} 
        type="text" class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-10 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Enter your text" />
        <button onClick={addList} class="absolute right-1 top-1 rounded bg-purple-500 text-white hover:bg-purple-600 transitionbg-slate-800 p-1.5 border border-transparent text-center text-sm  transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700  active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
            <path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
  

    <div className="min-h-screen bg-black text-white p-5">
      
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {lists.map((list) => (
          <Item 
            key={list.id}
            className="border-2 border-purple-500 rounded-lg p-4 text-center"
            title={list.name}
          >
          </Item>
        ))}
      </div>
    </div>

   
       
      </main>
    </div>
  );
}
