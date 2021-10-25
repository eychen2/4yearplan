import React from 'react';
import ReactFlow from 'react-flow-renderer';
const elements = [
  {
    id: '1',
    type: 'input', // input node
    data: { label: 'Input Node' },
    position: { x: 250, y: 25 },
  },
  // default node
  {
    id: '2',
    // you can also pass a React component as a label
    data: { label: <div>Default Node</div> },
    position: { x: 100, y: 125 },
  },
  {
    id: '3',
    type: 'output', // output node
    data: { label: 'Output Node' },
    position: { x: 250, y: 250 },
  },

];
const onNodeMouseEnter = (event,node)=>{

}
const onNodeMouseLeave = (event, node) => {
}
export default () => (
  <div style={{ height: 720 }}>
    <ReactFlow elements={elements}  onNodeMouseEnter={onNodeMouseEnter}/>
  </div>
);