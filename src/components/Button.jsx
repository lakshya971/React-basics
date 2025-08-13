import React from "react";

const Button = (props) => {
  return (
    <div className="flex flex-col justify-center items-center">
      {props.children}
      <button
        onClick={props.incrementCount}
        className="bg-blue-800 text-2xl font-semibold hover:bg-blue-500 text-white px-4 py-2 rounded-3xl border-1"
      >
        {props.text}
      </button>
    </div>
  );
};

export default Button;
