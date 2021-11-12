import React,{ useState} from 'react';
import './App.css'
import ReactFlow, {Controls} from 'react-flow-renderer';
import Form from './Components/Form'
import highlightnodes from './hilightnodes.js'

const initialElements=[{id: '1', type: 'input',data:{label: 'Node'},position:{x:0,y:0}}]
const App = () => {
const [elements,setElements]=useState(initialElements);
const [inputText,setInputText] = useState("");
const handleNodeMouseEnter = (event,node) => {
  setElements(highlightnodes(elements));
  console.log(node.id)
}
const handleNodeMouseLeave = (event,node) => {
}
const handleNodeDragStop = (event, node) => {
  console.log(node.position)
  var index = elements.findIndex(x=> x.id===node.id)
  elements[index].position=node.position
}
  return (
      <div className="App">
        <Form setInputText={setInputText} inputText={inputText} elements={elements} setElements={setElements}/>
        <div style={{height: 700}}>
              <ReactFlow elements={elements} onNodeMouseEnter={handleNodeMouseEnter} onNodeMouseLeave={handleNodeMouseLeave} onNodeDragStop={handleNodeDragStop}> 
              <Controls/> 
              </ReactFlow>
              
        </div>
      </div>
  );
}

export default App;
