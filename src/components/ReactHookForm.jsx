import React from "react";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data){
    console.log("form submitted", data)
  }

  return (
    <div className="flex items-center justify-center flex-col">
      <form 
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 p-4 border-2 border-black w-1/2 mx-auto my-4 justify-center items-center">
        <div>
          <label> first name: </label>
          <input type="text" 
          {...register('firstName',{ required: true, minLength: 5 })}
          className="border-1 border-black"/>
        </div>

          <div>
          <label> middle name: </label>
          <input type="text" 
          {...register('middleName',{ required: true, maxLength: 20 })}
          className="border-1 border-black" />
        </div>

          <div>
          <label> last name: </label>
          <input type="text" 
          {...register('lastName',{ required: true, maxLength: 20 })}
          className="border-1 border-black" />
        </div>

        <input 
        className="border-1 rounded-lg px-4 py-2"
        type="submit" />

      </form>
    </div>
  );
}

export default App;
