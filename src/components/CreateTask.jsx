import { useState } from "react";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from 'uuid';

const CreateTask = ({ tasks, setTasks }) => {3
    const [task, setTask] = useState({
        id:"",
        name:"",
        status:"todo"
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.name.length < 3) {
            return toast.error("A task must have more than 3 character");
        }
        if (task.name.length > 50) {
            return toast.error("A task must not be more than 50 character");
        }
        setTasks((prev) =>{
            const List = [...prev, task];

            localStorage.setItem("tasks", JSON.stringify(List));

            return List;
        });
        toast.success("Task created");
        setTask({
            id:"",
            name:"",
            status:"todo"
        })
    }
    return <form onSubmit={handleSubmit}> 
        <input type="text" className="border-2 border-slate-500 bg-slate-200 rounded-md mr-4 h-12 w-64 px-1"
            value={task.name}
            onChange={(e)=>setTask({...task, id: uuidv4(), name: e.target.value})}
        />
        <button className="bg-cyan-600 rounded-md px-4 h-12 text-white">Create</button>
    </form>;
};
 export default CreateTask;