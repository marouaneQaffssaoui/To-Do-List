import { useEffect, useState } from "react";
import CreateTask from "./components/CreateTask";
import ListTask from "./components/ListTask";
import { Toaster } from 'react-hot-toast';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'


function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  return (
    <DndProvider backend={HTML5Backend}>
      <Toaster />
      <div className="bg-slate-300 w-screen h-screen 
      flex flex-col items-center p-3 gap-16 pt-24">
        <CreateTask tasks={tasks} setTasks={setTasks}/>
        <ListTask tasks={tasks} setTasks={setTasks}/>
      </div>
    </DndProvider>
    
  )
}

export default App
