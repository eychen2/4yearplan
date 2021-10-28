import React,{ useState} from 'react';
import './App.css'
import ReactFlow, {Controls} from 'react-flow-renderer';
import Form from './Components/Form'

const initialElements=[{id: '1', type: 'input',data:{label: 'Node'},position:{x:0,y:0}}]
const App = () => {
const [elements,setElements]=useState(initialElements);
const [inputText,setInputText] = useState("");
const [count,setCount] = useState(()=>{
    return 2;
  });
  return (
      <div className="App">
        <Form setInputText={setInputText} inputText={inputText} elements={elements} setElements={setElements} count={count} setCount={setCount}/>
        <div style={{height: 700}}>
              <ReactFlow elements={elements} > <Controls/> </ReactFlow>
        </div>
      </div>
  );
}

export default App;
