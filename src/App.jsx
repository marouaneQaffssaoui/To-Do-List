import { useEffect, useState } from "react";
import CreateTask from "./components/CreateTask";
import ListTask from "./components/ListTask";
import { Toaster } from 'react-hot-toast';

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  return (
    <>
      <Toaster />
      <div className="bg-slate-300 w-screen h-screen 
      flex flex-col items-center gap-16 pt-24">
        <CreateTask tasks={tasks} setTasks={setTasks}/>
        <ListTask tasks={tasks} setTasks={setTasks}/>
      </div>
    </>
    
  )
}

export default App
