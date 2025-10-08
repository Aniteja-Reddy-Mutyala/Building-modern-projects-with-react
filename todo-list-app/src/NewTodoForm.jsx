import { useState } from "react";
import { createTodo } from "./todosSlice";
import { useDispatch } from "react-redux";
export default function NewTodoForm() {
  const [inputText, setInputText] = useState("");
  const dipsatch=useDispatch();
  return (
    <>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        onClick={()=>dipsatch(createTodo(inputText))}
      >
        Create Todo
      </button>
    </>
  );
}
