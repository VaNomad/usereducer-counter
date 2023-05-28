import { useReducer } from "react";

const ACTIONS = {
  PLUS: 'plus',
  MINUS: 'minus'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.PLUS:
      return { count: state.count + 1 }
    case ACTIONS.MINUS:
      return { count: state.count - 1 }
    default:
      return state
  }
}

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, {count: 0})

  function plus() {
    dispatch({type: ACTIONS.PLUS});
  }

  function minus() {
   dispatch({type: ACTIONS.MINUS})
  }

  return (
    <>
      <div className="h-screen min-w-[320px] m-0 flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold">Counter</h1>
        <div className="m-6 w-[200px] flex items-center justify-between">
          <button onClick={minus}>-</button>
          <p className="text-5xl text-fuchsia-400">{state.count}</p>
          <button onClick={plus}>+</button>
        </div>
      </div>
    </>
  );
}

