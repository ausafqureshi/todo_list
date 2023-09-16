import { useDispatch, useSelector } from "react-redux";
import { addTodo, setInput } from "../features/todo/todoSlice";
import Todos from "./Todos";

const AddTodo = () => {
  const inputVal = useSelector((state) => state.inputValue);

  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(inputVal));
    dispatch(setInput(""));
  };

  return (
    <>
      <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
        <input
          type="text"
          className="bg-yellow-2000 rounded border-border-gray-700 focus:border-indigo-500
            focus:ring-2 focus:ring-indigo-900 text-baseoutline-none text-black-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out w-1/2"
          placeholder="Enter a Todo..."
          value={inputVal}
          onChange={(e) => dispatch(setInput(e.target.value))}
        />
        <button
          type="submit"
          className="text-white border rounded-xl bg-gray-400 p-2"
        >Submit
        </button>
      </form>
      <Todos />
    </>
  );
};

export default AddTodo;
