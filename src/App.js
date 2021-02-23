import React, {useEffect, useState} from 'react';
import './App.css';
import Element1 from'./element.js';

function App() {
  
  var symbol = "";
  
  const [data, setData] = useState([]);

  const getElements = async (element_name) =>{
    const response = await fetch(`https://neelpatel05.pythonanywhere.com/element/atomicname?atomicname=${element_name}`);
    const data_raw = await response.json();
    setData(data_raw);
    
  }
  
  
  
     const search = () => {
      getElements(document.getElementById("search-bar").value);
     }
  

  return (
    <div className="App">
      <h1 id="title">Elemental Data</h1>
      <div className="search-pane">
      <form>
        <input id="search-bar" type="text" defaultValue="Hydrogen"/>
        <button id="search-btn" type="button" onClick={search}>Search</button>
      </form>
      
      </div>

      <Element1 results={data}/>
      
    
    </div>
    
    
  );
}

export default App;
