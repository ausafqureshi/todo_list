import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeTodo,
  setInput,
  setRequestedUpdateId,
  editTodo,
} from "../features/todo/todoSlice";
import DeleteOutlineTwoToneIcon from "@mui/icons-material/DeleteOutlineTwoTone";

const Todos = () => {
  const todos = useSelector((state) => state.todos);

  const requestedUpdatedId = useSelector((state) => state.requestedUpdateId);

  const dispatch = useDispatch();

  return (
    <>
      {todos.map((todo) => (
        <li
          className="mt-4 mx-4 flex justify-between items-center bg-zinc-100  opacity-70  px-4 py-3 rounded "
          key={todo.id}
        >
          <div className="text-black flex justify-normal text-center">
            {todo.text}
          </div>
          {requestedUpdatedId === todo.id ? (
            <>
              <button
                className="bg-blue-500 rounded-xl p-1 text-white"
                onClick={() => dispatch(editTodo())}
              >
                Update
              </button>
              <button
                onClick={() => {
                  dispatch(setInput(""));
                  dispatch(setRequestedUpdateId());
                }}
                className="bg-gray-500 rounded-lg p-1 text-white"
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
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-redd-600 rounded-text-md rounded-xl"
            >
              Edit
            </button>
          )}
          <button onClick={() => dispatch(removeTodo(todo.id))}>
            <DeleteOutlineTwoToneIcon />
          </button>
        </li>
      ))}
    </>
  );
};

export default Todos;
