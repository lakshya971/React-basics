import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Counter from "./components/Counter";
import Card from "./components/Card";
import Button from "./components/Button";
import Statelifting from "./components/Statelifting";
import Logout from "./components/ConditionalRendering/Logout";
import Login from "./components/ConditionalRendering/Login";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Param from "./components/Param";
import Courses from "./components/Courses";
import Test from "./components/Test";
import Pricing from "./components/Pricing";
import ReactHookForm from "./components/ReactHookForm";

const router = createBrowserRouter(
  // ALL THE ROUTES ARE IN THE FROM OF ARRAY
  [
    {
      path: "/", //if path is this then
      element: 
      <div>
        <Navbar/>
        <HomePage /> 
      </div>, //show this element or page
    },
    {
      path: "/About",
      element: 
      <div>
        <Navbar/>
        <About /> 
      </div>,
    },
    {
      path: "/Dashboard",
      element: 
      <div>
        <Navbar/>
        <Dashboard /> 
      </div>,
      children:[            //nested routings
        {
          path: "courses",
          element: <Courses />,
        },
        {
          path: "test",
          element: <Test />,
        },
        {
          path: "pricing",
          element: <Pricing />,
        },
      ]
    },
    {
      path: "/students/:id",  //useParams hook
      element: 
      <div> 
        <Navbar/>
        <Param /> 
      </div>,
    },
  ]
);

const App = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  function handleuseeffect(){
    alert("I am useEffect Hook")
  }

  function handlemouse(){
    alert("i hovered on the para")
  }

  function handleinput(){
    alert("i am input field")
  }

  const [name, setName] = useState();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <RouterProvider router={router} />
      

      <Counter />
      <Card name="Lakshya">
        <h1 className="font-bold text-2xl">Best developer</h1>
        <p className="text-lg">Hello My Designation is full stack developer</p>
        <p className="text-lg">I am Learning Full Stack Development</p>
        {/* inside Card component all the data is known as Children */}
      </Card>
      <Button incrementCount={handleClick} text="click me">
        <h1 className="font-bold text-2xl">count is : {count}</h1>
      </Button>

      {/* create state
      manage state
      change state
      sabhi child mein state ko sync karna hai */}
      <Statelifting title="Card A" name={name} setName={setName} />
      <Statelifting title="Card B" name={name} setName={setName} />
      {/* <p>Now I am inside Parent Component : {name}</p> */}

      <div>
        {isLoggedIn ? <Logout /> : <Login />} {/* Ternary opr */}
      </div>

      <button
      onClick={handleuseeffect}
      className="bg-blue-800 mx-auto items-center flex justify-center text-2xl font-semibold hover:bg-blue-500 text-white px-4 py-2 rounded-3xl border-1">
        Click me I am  useEffect
      </button>

      <p onMouseOver={handlemouse}
      className="text-center text-xl font-semibold">
        I am Hovering on this paragraph.
      </p>

      <form className="flex justify-center items-center my-4">
        <input type="text" onChange={handleinput} 
        className="border-1 border-black py-12 px-2 flex justify-center items-center"/>
      </form>

      <ReactHookForm />

    </div>
  );
};

export default App;
