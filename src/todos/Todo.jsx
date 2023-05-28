import React from "react";
import {ACTIONS} from "./ToDosReducer"

export default function Todo({ todo, dispatch }) {
  return (
    <div className="min-w-[400px] flex items-center justify-between pt-4">
      <span style={{ color: todo.complete ? "#AAA" : "#000" }} className="">
        {todo.name}
      </span>
      <div>
        <button
          onClick={() =>
            dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
          }
        >
          Toggle
        </button>
        <button
          onClick={() =>
            dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
          }
        >
          Delete
        </button>
      </div>
    </div>
  );
}
