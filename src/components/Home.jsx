import React, { useEffect, useState } from "react";
import add from "../components/Home/add-button.png";
import del from "../components/Delete/delete.png"


function Home() {
  const [Tasks, setTasks] = useState([
  ]);
  const [newTask ,setNewtasks] =useState('')
  const [error ,SetError] =useState('')
  const [category ,SetCategory] =useState('')

  const addtask= ()=>{
    if(newTask===''){
      SetError(`please enter a task`)
      return
    }
    else{
      SetError(``)
    }

    setTasks([...Tasks,{title :newTask ,category: category}])
  }
  const deletebutton=(index)=>{
    const newTask =[...Tasks];
    newTask.splice(index,1);
    setTasks(newTask);

  }
  useEffect(()=>{
    if(Tasks.length==0){
      return
    }
    localStorage.setItem('Tasks',JSON.stringify(Tasks));
    
  },[Tasks])

  useEffect(()=>{
    const Tasks = localStorage.getItem('Tasks');
    if(Tasks){
      setTasks(JSON.parse(Tasks));
    }

  },[''])

  
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
                {Tasks.map((Task, index) => {
                  const{title ,category}=Task
                  return (
                    <div className="bg-blue-600 rounded-sm m-2 mt-10 w-52 h-12 text-xl capitalize text-center p-2  mx-auto flex justify-between">
                      <div className="flex justify-evenly w-48">
                      <div className=""><h2>{title}</h2></div>
                      <div><h2>{category}</h2></div>
                      </div>
                      <div>
                        <img src={del} className=" h-8 w-8" onClick={()=>deletebutton(index)}/>
                        </div>

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
              <div className="text-center   rounded-r-sm  text-base m-1">
              <select className="text-center p-1 bg-gray-300 rounded-sm m-1 " value={category} onChange={(e)=>{
              SetCategory(e.target.value)} }>
              <option className="">category</option>
              <option>learning</option>
              <option>playing</option>
              <option>office</option>
              </select>
              </div>
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
