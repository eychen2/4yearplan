import React, {useEffect, useState} from 'react';
import './App.css'
import ReactFlow, {Controls} from 'react-flow-renderer';
import Form from './Components/Form'
import highlightnodes from './functions/hilightnodes.js'
import snapnodes from './functions/snapnodes.js'
import getcreds from './functions/getcreds.js'
import removeElement from './functions/removeElement.js'
import Popup from "./popup.js";
import logo from "./uf-gator-logo.png";

const CISE_Courses=require('./data/Courses.js');
var initialElements=require('./data/InitialElements');
const snapLocation=require('./data/SnapLocations.js');
const snapDistance=[]
const courseInfo = []

const App = () => {
//pop up const
const [buttonPopup, setButtonPopup] = useState(false);
const [startPopup, setStartPopup] = useState(true);
//node const
const [elements,setElements]=useState([]);
const [inputText,setInputText] = useState("");
const [paneMoveable, setPaneMoveable] = useState(false);
const [zoom, setZoom] = useState(false);
//const
const [highlight, setHighlight]=useState(false);
const [highlightedNode, setHighlightedNode]=useState("");
const [drag,setDrag]=useState(false);

const handleNodeMouseEnter = (event,node) => {
    if(!highlight)
    {
        let prereqs=new Set()
        var index = CISE_Courses.findIndex(x=> x.code===node.id)
        if(index!==-1)
        {
            let temp= CISE_Courses[index].preReqs.slice(0)
            while(temp.length)
            {
                let temp2=temp.pop()
                var index2=CISE_Courses.findIndex(x=> x.code===temp2)
                if(index2!==-1)
                {
                    let next= CISE_Courses[index2].preReqs
                    temp=temp.concat(next)
                }
            prereqs.add(temp2)
            }
            setElements(highlightnodes(elements,prereqs))
            setHighlight(true)
            setHighlightedNode(node.id)

        }
    }
}
const handleNodeMouseLeave = (event,node) => {
  var index = CISE_Courses.findIndex(x=> x.code===node.id)
  if(highlightedNode===node.id&&!drag&&index!==-1)
  {
      var prereqs= new Set(CISE_Courses[index].preReqs)
      setElements(highlightnodes(elements,prereqs));
      setHighlightedNode("")
      setHighlight(false)
      
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
    let prereqs=new Set()
    var index = CISE_Courses.findIndex(x=> x.code===node.id)
    if(index!==-1)
    {
      let temp= CISE_Courses[index].preReqs.slice(0)
      while(temp.length)
      {
          let temp2=temp.pop()
          var index2=CISE_Courses.findIndex(x=> x.code===temp2)
          if(index2!==-1)
          {
            let next= CISE_Courses[index2].preReqs
            temp=temp.concat(next)
          }
          prereqs.add(temp2)
      }
    }
    setElements(snapnodes(elements,snapDistance,snapLocation,node,prereqs))
    setDrag(false);
}
const handleRightClick=(event, node) => {
    event.preventDefault()
    var index = CISE_Courses.findIndex(x=> x.code===node.id)
    console.log(index)
    let prereqs=new Set()
    if(index!==-1)
    {
      let temp= CISE_Courses[index].preReqs.slice(0)
      while(temp.length)
      {
          let temp2=temp.pop()
          var index2=CISE_Courses.findIndex(x=> x.code===temp2)
          if(index2!==-1)
          {
            let next= CISE_Courses[index2].preReqs
            temp=temp.concat(next)
          }
          prereqs.add(temp2)
          
      }
    }
    setElements(removeElement(elements,node,prereqs))
    setHighlight(false)
}
const checkDrag = (event,element) => {
    setDrag(true)
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
const UpdateNode = (event, element) => {
    setElements((els) =>
        els.map((el) => {
            if (el.id === element.id) {
                if(el.data.label.search("[✓]") === -1){
                    el.data = {...el.data, label: el.data.label + " [✓]"}
                }
                else{
                    el.data = {...el.data, label: el.data.label.replace(" [✓]", "")}
                }
            }
            return el;
        })
    );
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
          <header><img src={logo} alt="Logo"></img>University of Florida</header>
          <p></p>
          <button onClick={clickCSE}>Computer Science (CSE)</button><button onClick={clickCSC}>Computer Science (CSC)</button><button onClick={clickDAS}>Digital Arts and Sciences (DAS)</button>
          <p></p>
        <Form setInputText={setInputText} inputText={inputText} elements={elements} setElements={setElements}/>
        <p></p>
        <div className="creds">
            <div className="element" style={{position:'absolute', top:225,left:snapLocation.at(0).x+15}}>Credits: {getcreds(elements,CISE_Courses,snapLocation.at(0).x)}</div>
            <div className="element" style={{position:'absolute', top:225,left:snapLocation.at(6).x+15}}>Credits:{getcreds(elements,CISE_Courses,snapLocation.at(6).x)}</div>
            <div className="element" style={{position:'absolute', top:225,left:snapLocation.at(12).x+15}}>Credits:{getcreds(elements,CISE_Courses,snapLocation.at(12).x)}</div>
            <div className="element" style={{position:'absolute', top:225,left:snapLocation.at(18).x+15}}>Credits:{getcreds(elements,CISE_Courses,snapLocation.at(18).x)}</div>
            <div className="element" style={{position:'absolute', top:225,left:snapLocation.at(24).x+15}}>Credits:{getcreds(elements,CISE_Courses,snapLocation.at(24).x)}</div>
            <div className="element" style={{position:'absolute', top:225,left:snapLocation.at(30).x+15}}>Credits:{getcreds(elements,CISE_Courses,snapLocation.at(30).x)}</div>
            <div className="element" style={{position:'absolute', top:225,left:snapLocation.at(36).x+15}}>Credits:{getcreds(elements,CISE_Courses,snapLocation.at(36).x)}</div>
            <div className="element" style={{position:'absolute', top:225,left:snapLocation.at(42).x+15}}>Credits:{getcreds(elements,CISE_Courses,snapLocation.at(42).x)}</div>
            <div className="element" style={{position:'absolute', top:225,left:snapLocation.at(48).x+15}}>Credits:{getcreds(elements,CISE_Courses,snapLocation.at(48).x)}</div>
        </div>
          <div className="semesters">
              <div className="element" style={{position:'absolute', top:175,left:snapLocation.at(0).x+35}}> Fall </div>
              <div className="element" style={{position:'absolute', top:175,left:snapLocation.at(6).x+25}}> Spring </div>
              <div className="element" style={{position:'absolute', top:175,left:snapLocation.at(12).x+35}}> Fall </div>
              <div className="element" style={{position:'absolute', top:175,left:snapLocation.at(18).x+25}}> Spring </div>
              <div className="element" style={{position:'absolute', top:175,left:snapLocation.at(24).x+35}}> Fall </div>
              <div className="element" style={{position:'absolute', top:175,left:snapLocation.at(30).x+25}}> Spring </div>
              <div className="element" style={{position:'absolute', top:175,left:snapLocation.at(36).x+35}}> Fall </div>
              <div className="element" style={{position:'absolute', top:175,left:snapLocation.at(42).x+25}}> Spring </div>
              <div className="element" style={{position:'absolute', top:175,left:snapLocation.at(48).x+35}}> Fall </div>
          </div>
        <div style={{height: 700}}>
              <ReactFlow elements={elements} onNodeMouseEnter={handleNodeMouseEnter} onNodeMouseLeave={handleNodeMouseLeave} onNodeDrag={checkDrag} onNodeDragStop={handleNodeMouseDrop} onNodeDoubleClick={handleNodeDoubleClick} onElementClick={UpdateNode} onNodeContextMenu={handleRightClick} onPaneClick={() => setButtonPopup(false)} paneMoveable={paneMoveable} zoomOnDoubleClick={zoom} zoomOnPinch={zoom} zoomOnScroll={zoom}>
              <Controls showFitView={false} showInteractive={false} showZoom={false}/>
              <div className="rectangle" style={{position:'absolute', top:100,left:snapLocation.at(0).x}}/>
              <div className="rectangle" style={{position:'absolute', top:100,left:snapLocation.at(6).x}}/>
              <div className="rectangle" style={{position:'absolute', top:100,left:snapLocation.at(12).x}}/>
              <div className="rectangle" style={{position:'absolute', top:100,left:snapLocation.at(18).x}}/>
              <div className="rectangle" style={{position:'absolute', top:100,left:snapLocation.at(24).x}}/>
              <div className="rectangle" style={{position:'absolute', top:100,left:snapLocation.at(30).x}}/>
              <div className="rectangle" style={{position:'absolute', top:100,left:snapLocation.at(36).x}}/>
              <div className="rectangle" style={{position:'absolute', top:100,left:snapLocation.at(42).x}}/>
              <div className="rectangle" style={{position:'absolute', top:100,left:snapLocation.at(48).x}}/>
              </ReactFlow>
        </div>
        <footer>Footer Text</footer>
         <Popup  trigger={buttonPopup} setTrigger={setButtonPopup}>
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
          <Popup  trigger={startPopup} setTrigger={setStartPopup}>
              <h3>Instructions</h3>
              <li>Drag and drop courses into semesters to create your own custom 4 year plan</li>
              <li>Hover over a course to see its prerequisites</li>
              <li>Left click a node to mark a course as completed</li>
              <li>Double click a node to get more information about the course</li>
              <li>Right click a node to remove a course</li>
              <p></p>
          </Popup>
      </div>
  );
}

export default App;
