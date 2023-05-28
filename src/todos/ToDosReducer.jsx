import { useReducer, useState } from "react";

function reducer() {

}

export default function ToDosReducer() {
  const [todos, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState('');

  return (
    <>
      <div className="h-screen min-w-[320px] flex flex-col justify-center items-center">
        <h1 className="text-4xl text-white mb-5">Reducer Form</h1>
        <form className="text-white">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="cursor-pointer py-2 px-3 border rounded-lg"
          />
        </form>
      </div>
    </>
  );
}