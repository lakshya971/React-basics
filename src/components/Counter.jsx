import React, { useState } from "react";
//usestate hook
const Counter = () => {
  const [count, setCount] = useState(0);
  // count represents the initial state of the counter which is 0 in this case
  // and setCount is used whenever we want to update the state/ count in this case

  return (
    <div>
      <main className="flex flex-col gap-4 justify-center items-center h-50 m-10 border-2 rounded-4xl bg-blue-200">
        <p className="font-semibold text-3xl">YOU HAVE CLICKED {count} TIMES</p>
        <div>
          <button
            onClick={() => {
              setCount(0);
            }}
            className="bg-blue-600 text-2xl font-semibold hover:bg-blue-500 text-white px-4 py-2 rounded-3xl border-1"
          >
            Reset
          </button>
          <button
            onClick={() => {
              setCount(count - 1);
            }}
            className="bg-blue-600 text-2xl font-semibold hover:bg-blue-500 text-white px-4 py-2 rounded-3xl border-1"
          >
            -
          </button>
          <button
            onClick={() => {
              setCount(count + 1);
            }}
            className="bg-blue-600 text-2xl font-semibold hover:bg-blue-500 text-white px-4 py-2 rounded-3xl border-1"
          >
            CLICK ME
          </button>
          <button
            onClick={() => {
              setCount(count + 1);
            }}
            className="bg-blue-600 text-2xl font-semibold hover:bg-blue-500 text-white px-4 py-2 rounded-3xl border-1"
          >
            +
          </button>
          
        </div>
      </main>
    </div>
  );
};

export default Counter;
