import React from 'react'

const Card = (props) => {
    // Destructure the name prop
  return (
    <div className='flex justify-center items-center flex-col border-2 h-60 m-10 border-gray-300 p-4 rounded-4xl'>
        {props.children} 
        {/* Here name is written in Card component */}
        {props.name}
    </div>
  )
}

export default Card