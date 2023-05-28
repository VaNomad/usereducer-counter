import { useReducer, useState } from "react";
import Todo from "./Todo";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo'
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)]
    case ACTIONS.TOGGLE_TODO:
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return{...todo, complete: !todo.complete}
        }
        return todo
      })
    case ACTIONS.DELETE_TODO:
      return todos.filter(todo => todo.id !== action.payload.id)
    default:
      return todos
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false }
}

export default function ToDosReducer() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: {name: name} });
    setName("");
  }

  console.log(todos)

  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl text-white mb-5">Reducer Form</h1>
        <form onSubmit={handleSubmit} className="text-white">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="cursor-pointer py-2 px-3 rounded-lg min-w-[400px]"
          />
        </form>
        { todos.map(todo => {
          return <Todo key={ todo.id } todo={ todo } dispatch={dispatch} />
        })}
      </div>
    </>
  );
}
