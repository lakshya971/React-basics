import React from "react";

const Statelifting = (props) => {
  return (
    <div className='flex justify-center items-center flex-col border-2 h-60 m-10 border-gray-300 p-4 rounded-4xl'>
        <input type="text"
        className="border-2 rounded-xl px-9 py-2 border-green-500"
        onChange={(e) => props.setName(e.target.value)}
        />

        <p>Name state variable is {props.title} : {props.name}</p>
    </div>
  );
};

export default Statelifting;
