import React,{ useState} from 'react';
import './App.css'
import ReactFlow, {Controls} from 'react-flow-renderer';
import Form from './Components/Form'
import highlightnodes from './functions/hilightnodes.js'
import snapnodes from './functions/snapnodes.js'
import getcreds from './functions/getcreds.js'
import Popup from "./popup.js";

const CISE_Courses=require('./data/Courses.js');
const initialElements=require('./data/InitialElements');
const snapLocation=require('./data/SnapLocations.js');
const snapDistance=[]
const courseInfo = []

const App = () => {
//pop up const
const [buttonPopup, setButtonPopup] = useState(false);

//node const
const [elements,setElements]=useState([]);
const [inputText,setInputText] = useState("");
const [paneMoveable, setPaneMoveable] = useState(false);


const handleNodeMouseEnter = (event,node) => {
  var index = CISE_Courses.findIndex(x=> x.code===node.id)
  if(index!==-1)
  {
    let temp= CISE_Courses[index].preReqs.slice(0)
    let prereqs = new Set(temp)
    while(temp.length)
    {
        let temp2=temp.pop()
        let next = CISE_Courses[CISE_Courses.findIndex(x=> x.code===temp2)].preReqs
        temp=temp.concat(next)
        prereqs.add(temp2)
        
    }
    setElements(highlightnodes(elements,prereqs));
  }
}
const handleNodeMouseLeave = (event,node) => {
  var index = CISE_Courses.findIndex(x=> x.code===node.id)
  if(index!==-1)
  {
    var prereqs= new Set(CISE_Courses[index].preReqs)
    setElements(highlightnodes(elements,prereqs));
  }
}
function doSomething(elements,node)
{
    const newElements = elements.map((e) => {
        if(e.id === node.id)
        {
            return{...e,position:{x:node.position.x-1,y:node.position.y-1}}
        }
        else
        {
            return{...e}
        }

    })
    return newElements;
}
const handleNodeMouseDrop = (event, node) => {
    setElements(doSomething(elements,node))
    setElements(snapnodes(elements,snapDistance,snapLocation,node))
}
const handleNodeDoubleClick = (event, element) => {
    //put code here for right click info thing
    courseInfo.length = 0;
    for(let i=0; i < CISE_Courses.length; i++){
        if(CISE_Courses.at(i).code === element.id){
            courseInfo.push({
                cId: CISE_Courses.at(i).code,
                cName: CISE_Courses.at(i).name,
                cCred: CISE_Courses.at(i).credit,
                cDes: CISE_Courses.at(i).description,
                cReq: CISE_Courses.at(i).yearReq
            })
        }
    }
    if(courseInfo.length === 0){
        console.log("Class info not found")
    }
    setButtonPopup(true);
}
    const clickCSE = () => {
        console.log('CSE');
        setElements(initialElements);
    };
    const clickCSC = () => {
        console.log('CSC');
        setElements(initialElements);
    };
    const clickDAS = () => {
        console.log('DAS');
        setElements(initialElements);
    };

  return (
      <div className="App">
          <p></p>
          <button onClick={clickCSE}>Computer Science (CSE)</button>
          <p></p>
          <button onClick={clickCSC}>Computer Science (CSC)</button>
          <p></p>
          <button onClick={clickDAS}>Digital Arts and Sciences (DAS)</button>
          <p></p>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
              {courseInfo.map(function(c, hd){
                  return (
                      <h2 key={hd}>{c.cId + " " + c.cName}</h2>
                  )
              })}
              {courseInfo.map(function(c, crd){
                  return (
                      <h3 key={crd}>{"Credits: " + c.cCred}</h3>
                  )
              })}
              {courseInfo.map(function(c, yr){
                  return (
                      <h3 key={yr}>{"Year Requirement: " + c.cReq}</h3>
                  )
              })}
              {courseInfo.map(function(c, bd){
                  return (
                      <p key={bd}>{c.cDes}</p>
                  )
              })}
          </Popup>
        <Form setInputText={setInputText} inputText={inputText} elements={elements} setElements={setElements}/>
        <div className="creds">
            <div className="element">Credits: {getcreds(elements,CISE_Courses,0)}</div>
            <div className="element">Credits:{getcreds(elements,CISE_Courses,125)}</div>
            <div className="element">Credits:{getcreds(elements,CISE_Courses,250)}</div>
            <div className="element">Credits:{getcreds(elements,CISE_Courses,375)}</div>
            <div className="element">Credits:{getcreds(elements,CISE_Courses,500)}</div>
            <div className="element">Credits:{getcreds(elements,CISE_Courses,625)}</div>
            <div className="element">Credits:{getcreds(elements,CISE_Courses,750)}</div>
            <div className="element">Credits:{getcreds(elements,CISE_Courses,875)}</div>


        </div>
        <div style={{height: 700}}>
              <ReactFlow elements={elements} onNodeMouseEnter={handleNodeMouseEnter} onNodeMouseLeave={handleNodeMouseLeave} onNodeDragStop={handleNodeMouseDrop}  onNodeDoubleClick={handleNodeDoubleClick} onPaneClick={() => setButtonPopup(false)} paneMoveable={paneMoveable}>
              <Controls showFitView={false} showInteractive={false} showZoom={false}/>
              <div className="rectangle" style={{position:'absolute', top:100,left:0}}/>
              <div className="rectangle" style={{position:'absolute', top:100,left:125}}/>
              <div className="rectangle" style={{position:'absolute', top:100,left:375}}/>
              <div className="rectangle" style={{position:'absolute', top:100,left:500}}/>
              <div className="rectangle" style={{position:'absolute', top:100,left:625}}/>
              <div className="rectangle" style={{position:'absolute', top:100,left:750}}/>
              <div className="rectangle" style={{position:'absolute', top:100,left:875}}/>
              </ReactFlow>
        </div>
      </div>
  );
}

export default App;
