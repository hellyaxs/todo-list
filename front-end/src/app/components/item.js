import React, { useState } from "react";

export default function Item({ title }) {

    const [tasks, setTasks] = useState([
        { id: 1, title: "Task Title", description: "alguma descriçaõ um poco maisn longa para teste de alout", checked: true },
      ]);
      const [isAddingTask, setIsAddingTask] = useState(false); // Controla se o input está visível
      const [newTaskTitle, setNewTaskTitle] = useState("");
    
      const addTask = () => {
        if (newTaskTitle.trim() !== "") {
          setTasks([
            ...tasks,
            { id: Date.now(), title: newTaskTitle, description: "description" },
          ]);
          setNewTaskTitle(""); // Limpa o campo
          setIsAddingTask(false); // Fecha o campo
        }
    }

    return (
    <> 
<div className="w-full max-w-md min-w-96 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">{title}</h5>

        <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
        </div>
       

   </div>
   <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            {tasks.map((item, index) => (
            <li key={index} className="py-3 sm:py-4">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                    <label className="flex items-center cursor-pointer relative">
                        <input value={item.checked} type="checkbox" className="peer h-6 w-6 cursor-pointer transition-all appearance-none rounded-full bg-slate-100 shadow hover:shadow-md border border-slate-300 checked:bg-green-400 checked:border-green-400" id="check-custom-style" />
                        <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" ></path>
                        </svg>
                        </span>
                    </label>
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {item.title}
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            {item.description}
                        </p>
                    </div>
                   
                </div>
            </li>
            ))}
    
        </ul>
   </div>
   {isAddingTask ? (
        <div className="flex items-center gap-2 mt-4">
          <input
            type="text"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            placeholder="New Task Title"
            className="flex-1 border rounded px-2 py-1 text-black"
          />
          <button
            onClick={addTask}
            className="bg-purple-500 px-3 py-1 rounded text-white hover:bg-purple-600 transition"
          >
            Add
          </button>
        </div>
      ) : (
        <button
          onClick={() => setIsAddingTask(true)}
          className="text-purple-400 mt-4 hover:underline"
        >
          new Task +
        </button>
      )}
</div>
</>
    );
}