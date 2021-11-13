import React,{ useState} from 'react';
import './App.css'
import ReactFlow, {Controls} from 'react-flow-renderer';
import Form from './Components/Form'
import highlightnodes from './hilightnodes.js'

const CISE_Courses = [
    {
        code: "MAC1147",
        name: "Precalculus Algebra and Trigonometry",
        credit: 4,
        description: "College algebra, functions, coordinate geometry, exponential and logarithmic functions, and trigonometry. Fast-paced review of algebra and trigonometry to prepare for calculus. Assumes prior knowledge of intermediate algebra (Algebra 2) and trigonometry. (M)",
        preReq: "-",
        yearReq: "-"
    },
    {
        code: "CAP3020",
        name: "Theory and Practice of Multimedia Production",
        credit: 3,
        description: "Combines the traditional media production pipeline and software engineering processes to synthesize an approach geared for the production of works incorporating both artistic and computational elements.",
        preReq: "CAP3027",
        yearReq: "-"
    }
];

const initialElements=[{id: '1', type: 'input',data:{label: CISE_Courses.pop().code},position:{x:0,y:0}}]
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
