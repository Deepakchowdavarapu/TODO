import React from 'react';
import './Todo2.css'

const Todo2 = () => {

    const [tasks,setTasks] = React.useState(["Sleep" , "Study","Anime"])
    const [newTask , setNewTask] = React.useState("")

    function AddTask(){

        setTasks(tasks => [...tasks , newTask])
        setNewTask("")
    }

    function Delete(index){
        const updatedTasks = tasks.filter((e , idx) => idx!=index)
        setTasks(updatedTasks)
    }

    function MoveUp(index){

        if(index<=0){
            alert("Invalid move")    
            return ;
        }

        const updatedTasks = [...tasks];

        const temp = updatedTasks[index];
        updatedTasks[index] = updatedTasks[index-1]
        updatedTasks[index-1] = temp

        setTasks(updatedTasks)
    }

    function MoveDown(index){

        if(index >= tasks.length-1){
            alert(" move")
            return ;
        }

         const updatedTasks = [...tasks];

        const temp = updatedTasks[index];
        updatedTasks[index] = updatedTasks[index+1]
        updatedTasks[index+1] = temp

        setTasks(updatedTasks)

    }

    return (
        <div className="full">
              <p style={{backgroundColor:'rgb(112,128,24)' , color:'black'}}>CH DEEPAK'S</p>  

                <div className="to-do-list">
                    <h1>To Do List</h1>
                    <input className='input' type="text"
                           placeholder='Enter task'
                           value={newTask}
                           onChange={(e)=>setNewTask(e.target.value)} 
                    />
                    <button className='addbtn' onClick={AddTask}>Add</button>
                </div>

                <ol className='ols'>
                    {tasks.map((event,idx)=>
                    <li className='lis' key = "idx">
                        {event}
                    <button className='del' onClick={()=>Delete(idx)}
                    >Delete</button>
                    <button className='btns' onClick={()=>MoveUp(idx)}
                    >MoveUp</button>
                    <button className='btns' onClick={()=>MoveDown(idx)}
                    >MoveDown</button>
                    </li>
                    )
                }
                </ol>
        </div>
    );
};

export default Todo2;