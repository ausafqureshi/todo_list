
import { useDispatch, useSelector } from "react-redux";
import { addTodo, setInput } from "../features/todo/todoSlice";
import Todos from "./Todos";

const AddTodo = () => {
  const intVal = useSelector((state) => state.inputValue);

  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(intVal));
    dispatch(setInput(""))
  };

  return (
    <>
      <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
        <input
          type="text"
          className="bg-gray-800 rounded border-border-gray-700 focus:border-indigo-500
            focus:ring-2 focus:ring-indigo-900 text-baseoutline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter a Todo..."
          value={intVal}
          onChange={(e) => dispatch(setInput(e.target.value))}
        />
        <button type="submit">Submit</button>
      </form>
      <Todos />
    </>
  );
};

export default AddTodo;
