import { useState } from "react"

const EventsPage = () => {
  const [count, setCount] = useState(0);
  const increment = ()=>{
    setCount(prev=>prev+1);
  }
    const decrement = ()=>{
    count>0 ? setCount(prev=>prev-1): null;
  }


  return (
    <div className="w-full h-fit flex flex-col justify-center items-center gap-2 ">
      <p>{count}</p>
      <div className="flex gap-2">
        <button className="w-fit h-fit p-1 border rounded " onClick={increment}>Increment</button>
        <button className="w-fit h-fit p-1 border rounded " onClick={decrement}>Decrement</button>
      </div>
    </div>
  )
}

export default EventsPage