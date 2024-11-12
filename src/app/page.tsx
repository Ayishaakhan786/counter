"use client";
import React , {useState , useEffect} from "react";
export default function Home () {
  const [count , setCount] = useState(0);
  const handleBack = ()=> {
    setCount (count +1);
  }
  useEffect(() => {
    console.log("Count has changed to:", count);
  }, [count]);
  return (
    <div className="flex bg-neutral-950 justify-center flex-col items-center min-h-screen">
      <h1 className="flex justify-center font-semibold text-3xl italic">Welcome to AK Soft Tech Counter System</h1>
      <p className="text-2xl font-semibold mb-4 text-white mt-5">Current count: <span className="text-blue-500"></span>{count}</p>
      <button onClick={handleBack} 
      className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md shadow-lg hover:bg-blue-600 focus:outline-none">Add Counter</button>
    </div>
  );
}
