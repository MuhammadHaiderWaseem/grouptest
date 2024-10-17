import logo from './logo.svg';
import './App.css';
import Pageone from './components/Pageone';
import {useState} from 'react';
function App() {
  const[todolist, setTodolist]=useState([]);
  const addlistitem=(count) =>{
    if(count!=="")
      setTodolist([...todolist,count]) 
  }
   
  return (
    <div className="App">
      <Pageone
        addlistitem={addlistitem}/> 
      
    </div>
  );
}

export default App;
