import { useState } from "react";
import "./TodoApp.css";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { z } from "zod";

const todoSchema = z.string().trim().min(1, "Please enter a task").max(50, "Task is too long");

export default function TodoApp() {
    const [todos,setTodos] =useState([]);
    const [todoItem,setTodoItem] =useState("");

    const handleClick =() =>{
        const parsed = todoSchema.safeParse(todoItem);
        if (!parsed.success) {
            alert(parsed.error.errors[0].message);
            return;
        }
        setTodos((prev)=>[...prev, parsed.data])
        setTodoItem("")
    }

  return (
    <div className="todo-wrapper">
      <div className="todo-card">
        <h1 className="title">My To-Do List</h1>
        <div className="input-row">
          <input
            type="text"
            placeholder="Add a task..."
            className="todo-input"
            onChange={(e)=>setTodoItem(e.target.value)}
            value={todoItem}
          />
          <button className="add-btn" onClick={handleClick}>Add</button>
        </div>

         {/* Temporary display area */}
        <div className="todo-list">
            {Array.isArray(todos) && todos.length > 0 && todos?.map(
                (item,idx) => (
                    <div className="todo-item" key={idx}>
                    {item}
                    <span className="items-btns-wrapper">
                    <MdModeEdit className="editIcon icon"/>
                    <MdDelete className="deleteIcon icon"/>                                        
                     </span>
                    </div>
                    )
            )}
        </div>
      </div>
    </div>
  );
}
