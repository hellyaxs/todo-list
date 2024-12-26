"use client";
import { useEffect, useState } from "react";
import Item from "./components/item";
import  instance  from "./services/lista_service";


export default function Home() {
  const [lists, setLists] = useState([]);
  const [newListName, setNewListName] = useState("");
 

  useEffect(() => {
    const handleUpdate = (newListas) => setLists(newListas);
    instance.subscribe(handleUpdate); 
    instance.getLists().then((data) => setLists(data));
  }, []);


  const addList = async () =>  {
    if (newListName.trim() !== "") {
      const novalista = await instance.createList(newListName);
      setLists([...lists, novalista]);
      setNewListName(""); 
      instance.getLists();
    }
  };
  
  const orderListAZ = () => {
    const ordenada = [...lists].sort((a, b) => a.nome.localeCompare(b.nome));
    setLists(ordenada);
  }


  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <h1 className="text-center text-3xl font-bold">Nova Lista de Tarefas</h1>
   
      <div className="w-full min-w-96 mt-4 relative">
        <input
          value={newListName}
          onChange={(e) => setNewListName(e.target.value)} 
          onKeyDown={(e) => e.key === "Enter" && addList()}
          type="text" className="w-full bg-transparent placeholder:text-slate-400 text-white text-sm border border-slate-200 rounded-md pl-3 pr-10 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Crie uma nova lista de tarefas" />
          <button onClick={addList}  className="absolute right-1 top-1 rounded bg-purple-500 text-white hover:bg-purple-600 transitionbg-slate-800 p-1.5 border border-transparent text-center text-sm  transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700  active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
          </button>
      </div>
  
        {lists.length !== 0 && (
          <div className="min-h-screen bg-slate-900 rounded-2xl text-white p-5">
            <div className="flex justify-end items-stretch font-bold mb-4">
             <button onClick={orderListAZ} 
              className="flex justify-end bg-purple-700 rounded-3xl p-1.5 text-white hover:bg-purple-600 transitionbg-slate-800 border border-transparent text-center text-sm  transition-all shadow-sm hover:shadow focus:shadow-none  active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
               <span className="mx-1 mt-0.5" >A-Z</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
               <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z" clipRule="evenodd" />
              </svg>
             </button>
             
            </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {lists.map((list,index) => (
              <Item 
                key={list.id}
                idLista={list.id}
                className="border-2 border-purple-500 rounded-lg p-4 text-center"
                title={list.nome} />
            ))}
          </div>
        </div>
        )}
       

      </main>
    </div>
  );
}
