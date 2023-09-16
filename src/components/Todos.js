import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeTodo,
  setInput,
  setRequestedUpdateId,
  editTodo,
} from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);

  const requestedUpdatedId = useSelector((state) => state.requestedUpdateId);

  const dispatch = useDispatch();

  return (
    <>
      <div>Todos</div>
      {todos.map((todo) => (
        <li
          className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-3 rounded"
          key={todo.id}
        >
          <div className="text-white">{todo.text}</div>
          {requestedUpdatedId === todo.id ? (
            <>
              <button
                className="bg-blue-500"
                onClick={() => dispatch(editTodo())}
              >
                Update
              </button>
              <button
                onClick={() => {
                  dispatch(setInput(""));
                  dispatch(setRequestedUpdateId());
                }}
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                dispatch(setInput(todo.text));
                dispatch(setRequestedUpdateId(todo.id));
              }}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-redd-600 rounded-text-md"
            >
              Edit
            </button>
          )}
          <button
            onClick={() => dispatch(removeTodo(todo.id))}
            className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-redd-600 rounded-text-md"
          >
            Delete
          </button>
        </li>
      ))}
    </>
  );
};

export default Todos;
