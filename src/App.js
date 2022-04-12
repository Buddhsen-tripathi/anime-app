import React,{useState} from 'react';
import './App.css';
import Nav from './Components/Nav';


// import func from "./Api/FetchAPI";
import FetchAPI from './Api/FetchAPI';

function App() {
  const[val,setVal]=useState(0);
  return (
    <div className="App">
     <Nav/> 
    
     <FetchAPI/>
    
    </div>
  );
}

export default App;
