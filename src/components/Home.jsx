import React, { useState } from "react";
import add from "../components/Home/add-button.png";
import del from "../components/Home/delete.png";

function Home() {
  const [Tasks, setTasks] = useState([
  ]);
  const [newTask ,setNewtasks] =useState('')
  const [error ,SetError] =useState('')

  const addtask= ()=>{
    if(newTask===''){
      SetError(`please enter a task`)
      return
    }
    else{
      SetError(``)
    }

    setTasks([...Tasks,newTask])
  }
  return (
    <div>
      <div>
        <>
          <div>
            <h1 className="capitalize text-5xl font-bold ">todo app</h1>
          </div>
          <div>
            <div className=" mx-5 flex justify-center mb-6 ">
              <div className=" bg-gray-300 rounded-sm p-1 w-80  mt-4  ">
                {Tasks.map((Task, i) => {
                  return (
                    <div className="bg-blue-600 rounded-sm m-2 mt-10 w-52 h-12 text-xl capitalize text-center p-2  mx-auto">
                      <h2>{Task}</h2>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div>
              <p>
                {error} 
              </p>
            </div>

            <div className="flex  justify-center">
              <input
                type="text"
                placeholder="add a task"
                value={newTask}
                onChange={(e)=>{
                  setNewtasks(e.target.value)
                }}
                className="text-center  bg-gray-300  rounded-r-sm  text-base"
              />
              <div>
              <img src={add} alt="add" className="h-10" onClick={addtask} />
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
}

export default Home;
