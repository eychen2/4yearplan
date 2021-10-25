import React,{ useState} from 'react';
import './App.css'
import Nodes from './Components/Nodes';

const initialElements=[{id: '1', type: 'input',data:{label: 'Node'},position:{x:0,y:0}}]
const App = () => {
const [elements,setElements]=useState(initialElements);

  return (
      <div className="App">
        <Nodes elements={elements} setElements={setElements}/>
      </div>
  );
}

export default App;
