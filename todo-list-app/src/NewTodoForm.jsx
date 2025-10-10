import { useState } from "react";
import { createTodos } from "./thunks";
import { useDispatch } from "react-redux";
export default function NewTodoForm() {
  const [inputText, setInputText] = useState("");
  const dispatch=useDispatch();
  return (
    <>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        onClick={()=>dispatch(createTodos(inputText))}
      >
        Create Todo
      </button>
    </>
  );
}
