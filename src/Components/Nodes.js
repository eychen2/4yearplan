import React,{Fragment, useState} from 'react'   ;
import ReactFlow, {Controls} from 'react-flow-renderer';
import Form from './Form'

const Nodes=({elements,setElements}) => {
    const [inputText,setInputText] = useState("");
    const [count,setCount] = useState(()=>{
        return 2;
      });
    return(
        <Fragment>
        <div style={{height: 700}}>
              <ReactFlow elements={elements} > <Controls/> </ReactFlow>
        </div>
        <Form setInputText={setInputText} inputText={inputText} elements={elements} setElements={setElements} count={count} setCount={setCount}/>
        </Fragment>
    
    )
}
export default Nodes;